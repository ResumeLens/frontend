"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "~/components/ui/navigation-menu";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const storedUserId = localStorage.getItem("user_id");
    const storedOrganization = localStorage.getItem("organization");

    const allFieldsExist =
      token && storedUserId  && storedOrganization;
    setIsLoggedIn(!!allFieldsExist);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 right-0 w-full backdrop-blur-lg bg-transparent shadow-md z-50 h-20 px-8 flex items-center justify-between border-b border-white/10 dark:border-white/10 transition-all duration-300">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="dark:text-white text-xl font-bold tracking-wide hover:tracking-wider transition-all duration-300 hover:underline underline-offset-4"
            >
              LOGO
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList className="flex gap-6 items-center">
          {isLoggedIn ? (
            <NavigationMenuItem>
              <div
                onClick={() => router.push("/profile")}
                className="cursor-pointer p-2 rounded-full hover:scale-105 hover:bg-gray-100 hover:shadow-lg transition-all duration-300 bg-transparent dark:hover:bg-gray-800 backdrop-blur-md"
              >
                <User className="dark:text-white" size={28} />
              </div>
            </NavigationMenuItem>
          ) : (
            <>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/login"
                  className="hover:text-blue-400 dark:hover:text-indigo-300 font-medium transition duration-200"
                >
                  Login
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/signup"
                  className="hover:text-blue-400 dark:hover:text-indigo-300 font-medium transition duration-200"
                >
                  Sign Up
                </NavigationMenuLink>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
