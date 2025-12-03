"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, Users, ShoppingBag } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Accueil", href: "/", icon: LayoutDashboard },
    { name: "Stock", href: "/stock", icon: Package },
    { name: "Clients", href: "/clients", icon: Users },
    { name: "Commandes", href: "/orders", icon: ShoppingBag },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 pb-safe z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href} className="flex flex-col items-center justify-center w-full h-full">
              <Icon size={24} className={isActive ? "text-primary" : "text-gray-400"} />
              <span className={`text-xs mt-1 ${isActive ? "text-primary font-medium" : "text-gray-400"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}