import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Target, TrendingUp, Plus, Heart, MessageCircle, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import ShootingMap from "@/components/ShootingMap"; // map component for progress
import logo from "@/assets/logo.png";

const Dashboard = () => {
  const upcomingEvents = [
    { id: 1, date: "Mar 15", title: "Local Range Competition", location: "Springfield Range" },
    { id: 2, date: "Mar 22", title: "Training Workshop", location: "Online" },
    { id: 3, date: "Apr 5", title: "State Championship", location: "Capital City Range" },
  ];

  const topShooters = [
    { id: 1, name: "Alex R.", avatar: "AR", score: 987 },
    { id: 2, name: "Jordan K.", avatar: "JK", score: 945 },
    { id: 3, name: "Sam W.", avatar: "SW", score: 923 },
  ];

  const hotGear = [
    { id: 1, title: "Precision Shooting Rest", price: 129.99, image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=300" },
    { id: 2, title: "Tactical Range Bag", price: 89.99, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300" },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="bg-gradient-card border-b border-border/50 shadow-soft">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Shooting Star Logo" className="w-12 h-12 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Shooting Star</h1>
              <p className="text-xs text-muted-foreground">Track your progress & connect</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-primary shadow-soft flex items-center justify-center text-primary-foreground font-semibold">
            JD
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Hero / Map + Progress */}
        <Card className="bg-gradient-primary border-0 shadow-card animate-slide-up">
          <CardContent className="p-6 flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary-foreground mb-2">
                Welcome back, John! 👋
              </h2>
              <p className="text-primary-foreground/80 mb-4">
                Here's your shooting progress and upcoming activities.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary rounded-lg p-4 text-center shadow-soft">
                  <p className="text-xs text-muted-foreground">Weekly Accuracy</p>
                  <p className="text-xl font-bold text-foreground">87%</p>
                </div>
                <div className="bg-secondary rounded-lg p-4 text-center shadow-soft">
                  <p className="text-xs text-muted-foreground">Personal Best</p>
                  <p className="text-xl font-bold text-foreground">95%</p>
                </div>
              </div>
            </div>

            <div className="flex-1 h-64 md:h-48 rounded-lg overflow-hidden shadow-soft">
              <ShootingMap />
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <section>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Upcoming Events
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {upcomingEvents.map(event => (
              <Card key={event.id} className="min-w-[240px] bg-secondary border-0 shadow-soft">
                <CardContent className="p-4">
                  <p className="text-xs font-semibold text-primary mb-1">{event.date}</p>
                  <h4 className="font-semibold text-foreground mb-1">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                  <Button size="sm" variant="outline" className="mt-2 w-full">Register</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Top Shooters */}
        <section>
          <h3 className="text-lg font-semibold text-foreground mb-4">Top Shooters This Week 🏆</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {topShooters.map((shooter, idx) => (
              <div key={shooter.id} className="flex flex-col items-center min-w-[80px]">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold mb-2">
                  {shooter.avatar}
                </div>
                <p className="text-sm font-semibold text-foreground">{shooter.name}</p>
                <p className="text-xs text-primary font-semibold">{shooter.score}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hot Gear */}
        <section>
          <h3 className="text-lg font-semibold text-foreground mb-4">Hot Gear 🔥</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {hotGear.map(item => (
              <Card key={item.id} className="min-w-[160px] bg-secondary border-0 shadow-soft">
                <CardContent className="p-0">
                  <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-t-lg" />
                  <div className="p-3">
                    <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm font-bold text-primary">${item.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Explore Marketplace CTA */}
        <Link to="/marketplace">
          <Card className="bg-gradient-primary border-0 shadow-card hover:opacity-90 transition-all cursor-pointer">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-primary-foreground mb-1">Explore More Gears</h3>
                <p className="text-sm text-primary-foreground/80">Discover the latest equipment</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary-foreground" />
            </CardContent>
          </Card>
        </Link>
      </main>

      {/* Floating Action Button */}
      <Button
        size="lg"
        className="fixed bottom-24 right-6 w-14 h-14 rounded-full shadow-card bg-gradient-primary hover:opacity-90 z-20"
      >
        <Plus className="w-6 h-6" />
      </Button>

      <BottomNav active="home" />
    </div>
  );
};

export default Dashboard;
