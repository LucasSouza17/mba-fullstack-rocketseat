import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { icons } from "lucide-react";
import Icon from "./icon";

interface NavLinkProps {
  children: React.ReactNode
  to: string
  icon?: keyof typeof icons
}

export function NavLink({ to, icon, children }: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link className={cn("flex items-center gap-2 text-action-sm h-10 font-poppins rounded-[10px] px-4", {
      "bg-shape-shape text-orange-base": pathname === to,
      "bg-transparent text-grayscale-300 hover:bg-shape-shape": pathname !== to
    })} to={to}>
      {icon && <Icon name={icon} size={20} />}
      {children}
    </Link>
  )
}