import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="bg-light-gray col-span-2 h-screen sticky top-0 left-0 overflow-auto">
      <nav className="flex flex-col p-2 lg:p-5 gap-2">
        <NavLink
          style={{ borderRadius: "5px" }}
          className={({ isActive }) =>
            cn(
              `p-1 lg:p-3 hover:text-white bg-gray  hover:bg-dark-gray flex justify-center gap-2`,
              {
                "bg-dark-gray": isActive,
              }
            )
          }
          to="/admin/dashboard"
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>

        <NavLink
          style={{ borderRadius: "5px" }}
          className={({ isActive }) =>
            cn(
              `p-1 lg:p-3 hover:text-white bg-gray  hover:bg-dark-gray flex justify-center gap-2`,
              {
                "bg-dark-gray": isActive,
              }
            )
          }
          to="/admin/add-service"
        >
          Add Service{" "}
        </NavLink>
        <NavLink
          style={{ borderRadius: "5px" }}
          className={({ isActive }) =>
            cn(
              `p-1 lg:p-3 hover:text-white bg-gray  hover:bg-dark-gray flex justify-center gap-2`,
              {
                "bg-dark-gray": isActive,
              }
            )
          }
          to="/admin/service-list"
        >
          Services List{" "}
        </NavLink>
      </nav>
    </aside>
  );
};

export default SideBar;
