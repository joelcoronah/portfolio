import { Avatar } from "@heroui/avatar";
import React from "react";

import profile from "/profile.jpg";

export const ProfilePhoto: React.FC = () => {
  return <Avatar className="w-[150px] h-[150px]" src={profile} />;
};
