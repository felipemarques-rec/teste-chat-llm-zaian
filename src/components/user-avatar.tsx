"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react";

interface UserAvatarProps {
  showName?: boolean;
}

type User = {
  email: string;
  username: string;
  avatar: string;
};

export const UserAvatar = (showName: UserAvatarProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const local = localStorage.getItem("user");
    if (local) {
      const userData = JSON.parse(local);
      if (userData) {
        setUser(userData);
      }
    }
  }, []);

  return (
    <>
      <Avatar className="h-12 w-12">
        <AvatarImage src={user?.avatar} />
      </Avatar>
      {showName && <span className="text-sm font-medium text-gray-400">{user?.username}</span>}
    </>
  );
};