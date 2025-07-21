'use client';

import { useEffect, useState } from "react";
import { User } from "lucide-react";
import { useRouter } from 'next/navigation';

import { 
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink
} from "~/components/ui/navigation-menu";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token); // Set true if token exists
  }, []);

  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 w-full bg-black text-white z-50 h-20 flex items-center justify-between px-6">
		<NavigationMenu>
      	  <NavigationMenuList>
      	    <NavigationMenuItem>
      	      <NavigationMenuLink
      	        className="text-white text-lg font-semibold cursor-pointer"
      	        href="/"
      	      >
      	        Home
      	      </NavigationMenuLink>
      	    </NavigationMenuItem>
      	  </NavigationMenuList>
      	</NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            {isLoggedIn ? (
              <NavigationMenuItem>
                <User className="text-white" />
              </NavigationMenuItem>
            ) : (
              <>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/login" className="text-white hover:underline">
                    Login
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/signup" className="text-white hover:underline">
                    Sign Up
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Page content */}
      <div className="pt-24 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      </div>
    </div>
  );
}
