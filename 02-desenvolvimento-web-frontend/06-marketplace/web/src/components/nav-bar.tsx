import { NavLink } from "./nav-link";

export function NavBar() {
  return (
    <nav className="flex items-center gap-2">
      <NavLink to="/" icon="LayoutDashboard">Dashboard</NavLink>
      <NavLink to="/products" icon="ShoppingBag">Produtos</NavLink>
    </nav>
  )
}