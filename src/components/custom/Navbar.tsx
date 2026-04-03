"use client";

import { LogOut, Menu, ShoppingCart } from "lucide-react";

import {
  Accordion,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { authClient, getAuthErrorMessage } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/logo.avif",
    alt: "logo",
    title: "MediStore",
  },
  menu = [
    { title: "Stores", url: "/store" },
    {
      title: "About Us",
      url: "/about",
    },
    {
      title: "Contact Us",
      url: "/contact",
    },
    {
      title: "Dashboard",
      url: "/dashboard",
    },
  ],
  auth = {
    login: { title: "Login", url: "/sign-in" },
    signup: { title: "Sign up", url: "/sign-up" },
  },
  className,
}: NavbarProps) => {

  const pathname = usePathname()
  const router = useRouter()
  const { data: sessionData, isPending } = authClient.useSession()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [authError, setAuthError] = useState<string | null>(null)

  const sessionUser = sessionData?.user
  const userDisplayName = getUserDisplayName(sessionUser)

  const handleLogout = async () => {
    if (isLoggingOut) {
      return
    }

    setAuthError(null)
    setIsLoggingOut(true)

    try {
      const result = await authClient.signOut()

      if (result.error) {
        setAuthError(getAuthErrorMessage(result.error, "Unable to log out."))
        return
      }

      router.refresh()
    } catch (error) {
      setAuthError(getAuthErrorMessage(error, "Unable to log out."))
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <section className={cn("py-4 border-b-2", className)}>
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden items-center px-4 mx-auto max-w-9xl justify-between lg:flex">
          <div className="flex items-center gap-6">

            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
              <span className="text-lg font-bold tracking-tighter">
                {logo.title}
              </span>
            </Link>

            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item, pathname))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2">
              <ModeToggle />
              <Button asChild variant="outline" size="icon" aria-label="Cart">
                <Link href="/cart">
                  <ShoppingCart className="size-4" />
                </Link>
              </Button>
              {isPending ? (
                <Button variant="outline" size="lg" disabled>
                  Loading...
                </Button>
              ) : sessionUser ? (
                <>
                  <div className="flex items-center gap-3 rounded-full border border-border bg-background px-2 py-1">
                    {renderUserAvatar({
                      image: sessionUser.image ?? null,
                      label: userDisplayName,
                    })}
                    <span className="hidden max-w-32 truncate text-sm font-medium xl:inline">
                      {userDisplayName}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    type="button"
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                  >
                    <LogOut className="size-4" />
                    {isLoggingOut ? "Logging out..." : "Logout"}
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild variant="outline" size="lg">
                    <Link href={auth.login.url}>{auth.login.title}</Link>
                  </Button>
                  <Button asChild size="lg">
                    <Link href={auth.signup.url}>{auth.signup.title}</Link>
                  </Button>
                </>
              )}
            </div>
            {authError ? (
              <p className="text-xs text-red-600">{authError}</p>
            ) : null}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center px-4 justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
            </Link>
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" size="icon" aria-label="Cart">
                <Link href="/cart">
                  <ShoppingCart className="size-4" />
                </Link>
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item, pathname))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <ModeToggle />
                    {isPending ? (
                      <Button variant="outline" disabled>
                        Loading...
                      </Button>
                    ) : sessionUser ? (
                      <>
                        <div className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2">
                          {renderUserAvatar({
                            image: sessionUser.image ?? null,
                            label: userDisplayName,
                            className: "size-11",
                          })}
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold">
                              {userDisplayName}
                            </p>
                            {sessionUser.email ? (
                              <p className="truncate text-xs text-muted-foreground">
                                {sessionUser.email}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          type="button"
                          onClick={handleLogout}
                          disabled={isLoggingOut}
                        >
                          <LogOut className="size-4" />
                          {isLoggingOut ? "Logging out..." : "Logout"}
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button asChild variant="outline">
                          <Link href={auth.login.url}>{auth.login.title}</Link>
                        </Button>
                        <Button asChild>
                          <Link href={auth.signup.url}>{auth.signup.title}</Link>
                        </Button>
                      </>
                    )}
                    {authError ? (
                      <p className="text-xs text-red-600">{authError}</p>
                    ) : null}
                  </div>
                </div>
              </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const getUserDisplayName = (
  user: { name?: string | null; email?: string | null } | null | undefined
) => {
  if (!user) {
    return "User";
  }

  const trimmedName = user.name?.trim();

  if (trimmedName) {
    return trimmedName;
  }

  const emailName = user.email?.split("@")[0]?.trim();

  return emailName || "User";
};

const getUserInitials = (label: string) => {
  const parts = label.split(/\s+/).filter(Boolean).slice(0, 2);

  if (!parts.length) {
    return "U";
  }

  return parts.map((part) => part.charAt(0).toUpperCase()).join("");
};

const renderUserAvatar = ({
  image,
  label,
  className,
}: {
  image?: string | null;
  label: string;
  className?: string;
}) => {
  if (image) {
    return (
      <img
        src={image}
        alt={label}
        className={cn("size-9 rounded-full object-cover", className)}
      />
    );
  }

  return (
    <div
      aria-label={label}
      className={cn(
        "flex size-9 items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white",
        className
      )}
    >
      {getUserInitials(label)}
    </div>
  );
};

const renderMenuItem = (item: MenuItem, pathname: string) => {
  const isActive = pathname === item.url
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild
        className={cn("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground", isActive && "underline underline-offset-4")}
      >
        <Link href={item.url}>
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, pathname: string) => {
  const isActive = pathname === item.url
  return (
    <Link key={item.title} href={item.url} className={cn("text-md font-semibold", isActive && "underline underline-offset-4")}>
      {item.title}
    </Link>
  );
};

export { Navbar };
