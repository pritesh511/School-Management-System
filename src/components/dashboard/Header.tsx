"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BsList } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  setIsSidebarOpen: (value: boolean) => void;
  isSidebarOpen: boolean;
}

const Header = (props: Props) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState("");
  const { setIsSidebarOpen, isSidebarOpen } = props;

  const handleLogout = async () => {
    try {
      const logoutCall = await fetch("/api/users/logout", {
        method: "GET",
      });
      const response = await logoutCall.json();
      toast.success(response.message);
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const getCurrentUser = async () => {
    try {
      const response = await axios.get("/api/users/currentUser");
      setCurrentUser(response.data.user.schoolName);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!currentUser) {
      getCurrentUser();
    }
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <BsList />
        </Button>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <div className="relative">
              {currentUser && (
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback className="uppercase bg-blue-500 text-white">
                      {currentUser[0] + currentUser[1]}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-gray-700">{currentUser}</span>
                </div>
              )}
            </div>
          </div>
          <IoMdLogOut
            onClick={() => handleLogout()}
            style={{ width: 32, height: 32, cursor: "pointer" }}
            color="rgb(37, 99, 235)"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
