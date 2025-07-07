import { forwardRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "@/constants";
import logoLight from "@/assets/logo-light.svg";
import logoDark from "@/assets/logo-dark.svg";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";
import { ChevronDown, ChevronRight } from "lucide-react";

export const Sidebar = forwardRef(({ collapsed }, ref) => {
  const [expandedGroups, setExpandedGroups] = useState({});

  const toggleGroup = (title) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside
      ref={ref}
      className={cn(
        "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white transition-all dark:border-slate-700 dark:bg-slate-900",
        collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
        collapsed ? "max-md:-left-full" : "max-md:left-0"
      )}
    >
      <div className="flex gap-x-3 p-3">
        <img src={logoLight} alt="poultrywala" className="dark:hidden" />
        <img src={logoDark} alt="poultrywala" className="hidden dark:block" />
      </div>
      <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 scrollbar-thin">
        {navbarLinks.map((navbarLink) => {
          const isExpanded = expandedGroups[navbarLink.title];
          return (
            <nav
              key={navbarLink.title}
              className={cn("sidebar-group", collapsed && "md:items-center")}
            >
              <button
                onClick={() => toggleGroup(navbarLink.title)}
                className={cn(
                  "sidebar-group-title flex items-center justify-between w-full text-left",
                  collapsed && "md:w-[45px]"
                )}
              >
                <span>{navbarLink.title}</span>
                {!collapsed && (
                  isExpanded ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )
                )}
              </button>
              {isExpanded &&
                navbarLink.links.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    className={cn("sidebar-item", collapsed && "md:w-[4px]")}
                  >
                    <link.icon size={22} className="flex-shrink-0" />
                    {!collapsed && (
                      <p className="whitespace-nowrap">{link.label}</p>
                    )}
                  </NavLink>
                ))}
            </nav>
          );
        })}
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
};
