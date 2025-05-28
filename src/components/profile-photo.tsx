import { Avatar } from "@heroui/avatar";
import React from "react";

export const ProfilePhoto: React.FC = () => {
  return (
    <Avatar
      className="w-[150px] h-[150px]"
      src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
    />
  );
};
