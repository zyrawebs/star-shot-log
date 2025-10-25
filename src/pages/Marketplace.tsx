import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Plus, Eye, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const Marketplace = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"new" | "used">("new");

  const listings = [
    {
      id: 1,
      title: "Precision Shooting Rest",
      price: 129.99,
      condition: "new",
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=400",
      location: "Los Angeles, CA",
      views: 234,
      seller: "ProShooter88",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Tactical Range Bag",
      price: 89.99,
      condition: "used",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      location: "Austin, TX",
      views: 156,
      seller: "RangeGear",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Competition Timer Set",
      price: 199.99,
      condition: "new",
      image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400",
      location: "Phoenix, AZ",
      views: 312,
      seller: "CompShooter",
      rating: 5.0,
    },
    {
      id: 4,
      title: "Shooting Gloves Premium",
      price: 45.00,
      condition: "used",
      image: "https://images.unsplash.com/photo-1605733513597-a82b2e6df5d8?w=400",
      location: "Denver, CO",
      views: 89,
      seller: "GearDeals",
      rating: 4.6,
    },
  ];

  const filteredListings = listings.filter(item => item.condition === activeTab);

  return (
    <div className="min-h-screen bg-gradient-soft pb-24">
      {/* Header */}
      <header className="bg-gradient-card border-b border-border/50 shadow-soft sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-foreground mb-4">Marketplace</h1>
          
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search gear..."
              className="pl-10 bg-background"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <Filter className="w-5 h-5" />
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            <Button
              variant={activeTab === "new" ? "default" : "outline"}
              onClick={() => setActiveTab("new")}
              className="flex-1"
            >
              New Equipment
            </Button>
            <Button
              variant={activeTab === "used" ? "default" : "outline"}
              onClick={() => setActiveTab("used")}
              className="flex-1"
            >
              Used Equipment
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6">
        {/* Listings Grid */}
        <div className="grid grid-cols-2 gap-4">
          {filteredListings.map((item, index) => (
            <Card
              key={item.id}
              className="bg-gradient-card border-0 shadow-card hover:shadow-soft transition-all cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square rounded-t-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-secondary/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold">
                    {item.condition === "new" ? "New" : "Used"}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-lg font-bold text-primary mb-2">
                    ${item.price}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span className="line-clamp-1">{item.location.split(',')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Prohibited Items Notice */}
        <div className="mt-8 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-sm text-destructive text-center">
            ⚠️ Prohibited: Live ammo, firearms, illegal items. Listings will be removed.
          </p>
        </div>
      </main>

      {/* FAB */}
      <Button
        size="lg"
        className="fixed bottom-24 right-6 w-14 h-14 rounded-full shadow-card bg-gradient-primary hover:opacity-90 z-20"
      >
        <Plus className="w-6 h-6" />
      </Button>

      <BottomNav active="marketplace" />
    </div>
  );
};

export default Marketplace;
