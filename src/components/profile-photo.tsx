import { Avatar } from "@heroui/avatar";
import React from "react";

export const ProfilePhoto: React.FC = () => {
  return (
    <Avatar
      isBordered
      className="w-48 h-48"
      src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
    />
  );
};
