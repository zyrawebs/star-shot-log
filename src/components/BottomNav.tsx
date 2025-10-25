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
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-card z-20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className={`text-xs ${isActive ? "font-medium" : ""}`}>
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
