import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, MessageCircle, Calendar, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-soft pb-24">
      {/* Header */}
      <header className="bg-gradient-card border-b border-border/50 shadow-soft">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="bg-gradient-primary rounded-xl p-2 shadow-soft">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Community</h1>
          </div>

          <div className="w-10 h-10" /> {/* Spacer for centering */}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Hero Banner */}
        <Card className="bg-gradient-primary border-0 shadow-card animate-fade-in">
          <CardContent className="p-8 text-center">
            <Users className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-primary-foreground mb-2">
              Join the Shooting Community
            </h2>
            <p className="text-primary-foreground/90 mb-6">
              Connect with thousands of sport shooters, share experiences, and learn together
            </p>
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Join Discord Channel
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <div className="animate-slide-up">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Upcoming Events
          </h3>
          
          <div className="space-y-4">
            {[
              {
                title: "Local Range Competition",
                date: "March 15, 2025",
                location: "Springfield Range",
                participants: 24,
              },
              {
                title: "Training Workshop",
                date: "March 22, 2025",
                location: "Online",
                participants: 156,
              },
              {
                title: "State Championship",
                date: "April 5, 2025",
                location: "Capital City Range",
                participants: 89,
              },
            ].map((event, index) => (
              <Card
                key={event.title}
                className="bg-gradient-card border-0 shadow-card hover:shadow-soft transition-all cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">
                        {event.title}
                      </h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </p>
                        <p className="flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          {event.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-secondary rounded-lg px-3 py-1">
                        <p className="text-sm font-semibold text-primary">
                          {event.participants} joined
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Training Groups */}
        <div className="animate-slide-up">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Training Groups
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Beginners Circle",
                members: 234,
                description: "Perfect for those starting their shooting journey",
              },
              {
                name: "Competition Prep",
                members: 89,
                description: "Focused on competitive shooting techniques",
              },
              {
                name: "Long Range Masters",
                members: 156,
                description: "Advanced long-range shooting strategies",
              },
              {
                name: "Safety First",
                members: 445,
                description: "Dedicated to safe shooting practices",
              },
            ].map((group) => (
              <Card
                key={group.name}
                className="bg-gradient-card border-0 shadow-card hover:shadow-soft transition-all cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-foreground">{group.name}</h4>
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {group.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {group.members} members
                    </span>
                    <Button size="sm" variant="outline">
                      Join
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;
