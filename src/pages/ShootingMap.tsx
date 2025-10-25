import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, Navigation, List, Map as MapIcon } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const ShootingMap = () => {
  const [viewMode, setViewMode] = useState<"map" | "list">("map");

  const ranges = [
    {
      id: 1,
      name: "Springfield Shooting Range",
      address: "123 Range Road, Springfield, CA 90210",
      distance: "2.3 miles",
      rating: 4.8,
      reviews: 156,
      amenities: ["Indoor", "Rentals", "Classes"],
    },
    {
      id: 2,
      name: "Urban Precision Sports",
      address: "456 Target Ave, Springfield, CA 90211",
      distance: "4.1 miles",
      rating: 4.9,
      reviews: 203,
      amenities: ["Outdoor", "Competition", "Pro Shop"],
    },
    {
      id: 3,
      name: "Mountain View Range",
      address: "789 Vista Drive, Springfield, CA 90212",
      distance: "6.8 miles",
      rating: 4.7,
      reviews: 98,
      amenities: ["Outdoor", "Long Range", "Camping"],
    },
    {
      id: 4,
      name: "Elite Shooting Center",
      address: "321 Marksman St, Springfield, CA 90213",
      distance: "8.2 miles",
      rating: 4.9,
      reviews: 267,
      amenities: ["Indoor", "Rentals", "Training"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft pb-24">
      {/* Header */}
      <header className="bg-gradient-card border-b border-border/50 shadow-soft sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-foreground mb-4">Shooting Ranges</h1>
          
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Find ranges..."
              className="pl-10 bg-background"
            />
          </div>

          {/* View Toggle */}
          <div className="flex gap-2">
            <Button
              variant={viewMode === "map" ? "default" : "outline"}
              onClick={() => setViewMode("map")}
              className="flex-1"
            >
              <MapIcon className="w-4 h-4 mr-2" />
              Map View
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              onClick={() => setViewMode("list")}
              className="flex-1"
            >
              <List className="w-4 h-4 mr-2" />
              List View
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6">
        {viewMode === "map" ? (
          // Map View
          <Card className="bg-gradient-card border-0 shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full h-[500px] bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map coming soon</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    View ranges in list mode below
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          // List View
          <div className="space-y-4">
            {ranges.map((range, index) => (
              <Card
                key={range.id}
                className="bg-gradient-card border-0 shadow-card hover:shadow-soft transition-all animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg mb-1">
                        {range.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-primary text-primary" />
                          <span className="text-sm font-semibold text-foreground">
                            {range.rating}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            ({range.reviews})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{range.address}</span>
                      </div>
                      <p className="text-sm font-semibold text-primary">{range.distance}</p>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {range.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="px-2 py-1 bg-secondary rounded-full text-xs text-foreground"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="default" className="flex-1">
                      <Navigation className="w-4 h-4 mr-2" />
                      Directions
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <BottomNav active="map" />
    </div>
  );
};

export default ShootingMap;
