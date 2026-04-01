"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient, getAuthErrorMessage, startGoogleAuth } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

interface SignupProps {
  heading?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
  className?: string;
}

const Signup = ({
  heading = "Signup for MediStore",
  logo = {
    url: "/",
    src: "/logo.avif",
    alt: "logo",
    title: "MediStore",
  },
  buttonText = "Create Account",
  googleText = "Continue with Google",
  signupText = "Already a user?",
  signupUrl = "/sign-in",
  className,
}: SignupProps) => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isCredentialLoading, setIsCredentialLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

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
      setErrorMessage(getAuthErrorMessage(err, "Unable to start Google sign up."));
      setIsGoogleLoading(false);
    }
  };

  const handleInputChange = (
    field: "name" | "email" | "password" | "confirmPassword",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  const handleCredentialSignup = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isBusy) {
      return;
    }

    const name = formData.name.trim();
    const email = formData.email.trim();

    if (!name || !email || !formData.password || !formData.confirmPassword) {
      setErrorMessage("Name, email, password, and confirm password are required.");
      return;
    }

    if (formData.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage(null);
    setSuccessMessage(null);
    setIsCredentialLoading(true);

    try {
      const result = await authClient.signUp.email({
        name,
        email,
        password: formData.password,
        callbackURL: typeof window !== "undefined" ? window.location.origin : undefined,
      });

      if (result.error) {
        setErrorMessage(getAuthErrorMessage(result.error, "Unable to create your account."));
        setIsCredentialLoading(false);
        return;
      }

      setSuccessMessage(
        "Account created. Check your email for the verification link before signing in."
      );
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setIsCredentialLoading(false);
    } catch (err) {
      setErrorMessage(getAuthErrorMessage(err, "Unable to create your account."));
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
            onSubmit={handleCredentialSignup}
            className="flex w-full max-w-sm min-w-sm flex-col items-center gap-y-4 rounded-md border border-muted bg-background px-6 py-8 shadow-md"
          >
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}

            <Input
              type="text"
              placeholder="Full Name"
              className="text-sm"
              autoComplete="name"
              value={formData.name}
              onChange={(event) => handleInputChange("name", event.target.value)}
              required
            />
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
              autoComplete="new-password"
              value={formData.password}
              onChange={(event) => handleInputChange("password", event.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              className="text-sm"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={(event) => handleInputChange("confirmPassword", event.target.value)}
              required
            />

            <Button type="submit" className="w-full" disabled={isBusy}>
              {isCredentialLoading ? "Creating account..." : buttonText}
            </Button>

            {errorMessage ? (
              <p role="alert" className="w-full text-sm text-red-600">
                {errorMessage}
              </p>
            ) : null}

            {successMessage ? (
              <p role="status" className="w-full text-sm text-green-700">
                {successMessage}
              </p>
            ) : null}

            {/* Divider */}
            <div className="flex items-center w-full gap-2">
              <div className="h-px flex-1 bg-muted"></div>
              <span className="text-xs text-muted-foreground">OR</span>
              <div className="h-px flex-1 bg-muted"></div>
            </div>

            {/* Google Button */}
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
                <ArrowLeft/> Go to Home
              </Button>
            </Link>
          </form>

          {/* Login Link */}
          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p>{signupText}</p>
            <Link
              href={signupUrl}
              className="font-medium text-primary hover:underline"
            >
              Login
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Signup };
