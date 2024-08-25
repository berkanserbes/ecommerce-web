import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  title: string;
  icon: React.ReactNode;
  link: string;
  isCollapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  isCollapsed,
}) => {
  return (
    <NavLink
      to={title}
      className={`flex items-center p-2 rounded-md hover:bg-gray-200 text-gray-700 ${
        isCollapsed ? "justify-start" : " justify-start space-x-4"
      }`}
    >
      <div className="text-xl">{icon}</div>
      {!isCollapsed && <span className="text-sm font-medium">{title}</span>}
    </NavLink>
  );
};

export default SidebarItem;
