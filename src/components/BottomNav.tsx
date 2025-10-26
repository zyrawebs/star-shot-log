import { Home, Users, ShoppingBag, ScrollText, Map } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BottomNavProps {
  active: "home" | "feed" | "marketplace" | "community" | "map";
}

const BottomNav = ({ active }: BottomNavProps) => {
  const navigate = useNavigate();

  const navItems = [
    { id: "home", icon: Home, label: "Home", path: "/dashboard" },
    { id: "feed", icon: ScrollText, label: "Feed", path: "/feed" },
    { id: "marketplace", icon: ShoppingBag, label: "Marketplace", path: "/marketplace" },
    { id: "community", icon: Users, label: "Community", path: "/community" },
    { id: "map", icon: Map, label: "Shooting Map", path: "/map" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-card z-50">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 p-2 transition-colors ${
                  isActive ? "text-secondary" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className={`text-xs ${isActive ? "font-semibold text-gray-600" : "text-gray-600"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
