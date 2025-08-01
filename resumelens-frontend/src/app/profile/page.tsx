"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Card, CardContent } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

import MouseFollow from "~/components/MouseFollow";
import Navbar from "~/components/Navbar";


const ProfilePage = () => {
  const [darkMode] = useState();

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("organization");
    router.push("/");
  };

  const [userId, setUserId] = useState<string | null>(null);
  const [organization, setOrganization] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const storedUserId = localStorage.getItem("user_id");
    const storedOrganization = localStorage.getItem("organization");

    if (!storedUserId || !storedOrganization || !token) {
      router.replace("/404");
    } else {
      setUserId(storedUserId);
      setOrganization(storedOrganization);
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) return null;

  return (
    <div className={`${darkMode ? "dark" : ""} transition-all duration-500`}>
      <MouseFollow />

      <div className='mx-auto mt-15 mb-20'>
        <Navbar />

        <div className="w-full flex gap-10 justify-center items-center" >
          <div>
            <Card className="bg-gradient-to-br from-indigo-50 to-white dark:from-zinc-800 dark:to-zinc-900 shadow-xl rounded-3xl p-1 min-w-9">
              <CardContent className="p-8 flex flex-col items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="" alt="Profile Picture" />
                  <AvatarFallback className="text-2xl font-bold text-indigo-600 dark:text-amber-400">
                    {userId ? userId.charAt(0).toUpperCase() : "U"}
                  </AvatarFallback>
                </Avatar>
      
                <div className="w-full space-y-4 text-center">
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">User ID</p>
                    <p className="text-xl font-semibold text-zinc-800 dark:text-white">{userId}</p>
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Organization</p>
                    <p className="text-xl font-semibold text-zinc-800 dark:text-white">{organization}</p>
                  </div>
                </div>

                <Button
                  onClick={handleLogout}
                  className="mt-6 w-full border-2 border-red-500 text-red-600 hover:bg-red-600 hover:text-white bg-transparent transition-all rounded-xl cursor-pointer"
                >
                  Log Out
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
