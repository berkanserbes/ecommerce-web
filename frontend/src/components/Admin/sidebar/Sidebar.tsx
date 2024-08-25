import React from "react";
import { FaBars } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { SlLogout } from "react-icons/sl";
import { GrUserSettings } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { PiShoppingBagOpen } from "react-icons/pi";

import SidebarItem from "./SidebarItem";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);

  return (
    <div
      className={`flex flex-col px-5 py-5 h-screen bg-white border-r space-y-10 border-gray-400 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-1/6"
      }`}
    >
      <div className="flex items-center p-2 justify-between">
        <FaBars
          className="cursor-pointer"
          size={24}
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
      </div>
      <div className="flex flex-col flex-grow space-y-4">
        <SidebarItem
          title="Dashboard"
          icon={<RxDashboard />}
          link="/admin-dashboard"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          title="Users"
          icon={<GrUserSettings />}
          link="/admin-users"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          title="Products"
          icon={<PiShoppingBagOpen />}
          link="/admin-products"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          title="Settings"
          icon={<IoSettingsOutline />}
          link="/admin-settings"
          isCollapsed={isCollapsed}
        />
      </div>
      <div className="mt-auto justify-start">
        <SidebarItem
          title="Logout"
          icon={<SlLogout />}
          link="/logout"
          isCollapsed={isCollapsed}
        />
      </div>
    </div>
  );
};

export default Sidebar;
