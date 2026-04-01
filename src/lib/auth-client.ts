import { BetterFetchError } from "@better-fetch/fetch"
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.NEXT_PUBLIC_AUTH_BASE_URL ?? "http://localhost:8000"
})

const getMessageFromObject = (value: unknown): string | null => {
    if (!value || typeof value !== "object") {
        return null
    }

    if ("message" in value && typeof value.message === "string" && value.message.trim()) {
        return value.message
    }

    if ("error" in value) {
        return getMessageFromObject(value.error)
    }

    return null
}

export const getAuthErrorMessage = (
    error: unknown,
    fallback = "Something went wrong. Please try again."
) => {
    if (error instanceof BetterFetchError) {
        return getMessageFromObject(error.error) ?? error.message ?? fallback
    }

    if (error instanceof Error && error.message.trim()) {
        return error.message
    }

    return getMessageFromObject(error) ?? fallback
}

const getRedirectURLFromResponse = (response: unknown): string | null => {
    if (!response || typeof response !== "object") {
        return null
    }

    if ("url" in response && typeof response.url === "string") {
        return response.url
    }

    if (!("data" in response) || !response.data || typeof response.data !== "object") {
        return null
    }

    if ("url" in response.data && typeof response.data.url === "string") {
        return response.data.url
    }

    return null
}

export const startGoogleAuth = async () => {
    if (typeof window === "undefined") {
        return
    }

    const origin = window.location.origin
    const currentPage = `${origin}${window.location.pathname}`

    const response: unknown = await authClient.signIn.social({
        provider: "google",
        callbackURL: origin,
        errorCallbackURL: currentPage,
        disableRedirect: true,
    })

    const redirectURL = getRedirectURLFromResponse(response)

    if (!redirectURL) {
        throw new Error("Google authorization URL was not returned by the auth server.")
    }

    window.location.assign(redirectURL)
}
