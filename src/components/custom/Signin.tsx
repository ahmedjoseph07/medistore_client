"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient, getAuthErrorMessage, startGoogleAuth } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

interface SigninProps {
  heading?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title?: string;
    className?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
  className?: string;
}

const Signin = ({
  heading = "Sign In to MediStore",
  logo = {
    url: "/",
    src: "/logo.avif",
    alt: "logo",
    title: "MediStore",
  },
  buttonText = "Sign In",
  googleText = "Continue with Google",
  signupText = "Need an account?",
  signupUrl = "/sign-up",
  className,
}: SigninProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isCredentialLoading, setIsCredentialLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isBusy = isGoogleLoading || isCredentialLoading;

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
        return;
      }

      setIsGoogleLoading(false);
      setIsCredentialLoading(false);
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  const handleGoogleLogin = async () => {
    if (isBusy) {
      return;
    }

    setErrorMessage(null);
    setIsGoogleLoading(true);

    try {
      await startGoogleAuth();
    } catch (err) {
      setErrorMessage(getAuthErrorMessage(err, "Unable to start Google sign in."));
      setIsGoogleLoading(false);
    }
  };

  const handleInputChange = (field: "email" | "password", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrorMessage(null);
  };

  const handleCredentialSignin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isBusy) {
      return;
    }

    const email = formData.email.trim();

    if (!email || !formData.password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    setErrorMessage(null);
    setIsCredentialLoading(true);

    try {
      const result = await authClient.signIn.email({
        email,
        password: formData.password,
      });

      if (result.error) {
        const message = getAuthErrorMessage(result.error, "Unable to sign in.");
        setErrorMessage(
          message === "Email not verified"
            ? "Your email is not verified yet. Check your inbox and verify your account before signing in."
            : message
        );
        setIsCredentialLoading(false);
        return;
      }

      window.location.assign("/");
    } catch (err) {
      setErrorMessage(getAuthErrorMessage(err, "Unable to sign in."));
      setIsCredentialLoading(false);
    }
  };
  
  return (
    <section className={cn("h-screen bg-muted", className)}>
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 lg:justify-start">

          {/* Logo */}
          <Link href={logo.url}>
            <div className="flex gap-2 items-center justify-center text-3xl font-bold">
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-10 dark:invert"
              />
              MediStore
            </div>
          </Link>

          {/* Form */}
          <form
            onSubmit={handleCredentialSignin}
            className="flex w-full max-w-sm min-w-sm flex-col items-center gap-y-4 rounded-md border border-muted bg-background px-6 py-8 shadow-md"
          >
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}

            <Input
              type="email"
              placeholder="Email"
              className="text-sm"
              autoComplete="email"
              value={formData.email}
              onChange={(event) => handleInputChange("email", event.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              className="text-sm"
              autoComplete="current-password"
              value={formData.password}
              onChange={(event) => handleInputChange("password", event.target.value)}
              required
            />

            <Button variant="default" type="submit" className="w-full" disabled={isBusy}>
              {isCredentialLoading ? "Signing in..." : buttonText}
            </Button>

            {errorMessage ? (
              <p role="alert" className="w-full text-sm text-red-600">
                {errorMessage}
              </p>
            ) : null}

            {/* Divider */}
            <div className="flex items-center w-full gap-2">
              <div className="h-px flex-1 bg-muted"></div>
              <span className="text-xs text-muted-foreground">OR</span>
              <div className="h-px flex-1 bg-muted"></div>
            </div>

            {/* Google Login */}
            <Button
              variant="outline"
              type="button"
              className="w-full"
              onClick={handleGoogleLogin}
              disabled={isBusy}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
                className="h-4 w-4 mr-2"
              />
              {isGoogleLoading ? "Redirecting to Google..." : googleText}
            </Button>

            <Link href="/" className="w-full">
              <Button variant="ghost" type="button" className="w-full">
                <ArrowLeft /> Go to Home
              </Button>
            </Link>
          </form>

          {/* Signup Link */}
          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p>{signupText}</p>
            <Link
              href={signupUrl}
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Signin };
