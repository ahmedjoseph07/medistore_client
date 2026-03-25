import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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
          <div className="flex w-full max-w-sm min-w-sm flex-col items-center gap-y-4 rounded-md border border-muted bg-background px-6 py-8 shadow-md">
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}

            <Input type="email" placeholder="Email" className="text-sm" required />
            <Input type="password" placeholder="Password" className="text-sm" required />

            <Button variant="default" type="submit" className="w-full">
              {buttonText}
            </Button>

            {/* Divider */}
            <div className="flex items-center w-full gap-2">
              <div className="h-px flex-1 bg-muted"></div>
              <span className="text-xs text-muted-foreground">OR</span>
              <div className="h-px flex-1 bg-muted"></div>
            </div>

            {/* Google Login */}
            <Button variant="outline" className="w-full">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="h-4 w-4 mr-2"
              />
              {googleText}
            </Button>

            <Link href="/" className="w-full">
              <Button variant="ghost" className="w-full">
                <ArrowLeft/> Go to Home
              </Button>
            </Link>
          </div>

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