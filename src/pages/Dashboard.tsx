import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Calendar, Heart, MessageCircle, Eye, Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const Dashboard = () => {
  const upcomingEvents = [
    { id: 1, date: "Mar 15", title: "Local Range Competition", location: "Springfield Range", registered: 24 },
    { id: 2, date: "Mar 22", title: "Training Workshop", location: "Online", registered: 156 },
    { id: 3, date: "Apr 5", title: "State Championship", location: "Capital City Range", registered: 89 },
  ];

  const communityHighlights = [
    { id: 1, user: "Sarah M.", avatar: "SM", preview: "Just hit 95% accuracy at 50 yards! Consistency is key 🎯", likes: 142, comments: 23 },
    { id: 2, user: "Mike C.", avatar: "MC", preview: "New personal best today! 250 rounds, zero malfunctions...", likes: 89, comments: 12 },
  ];

  const topShooters = [
    { id: 1, name: "Alex R.", avatar: "AR", score: 987 },
    { id: 2, name: "Jordan K.", avatar: "JK", score: 945 },
    { id: 3, name: "Sam W.", avatar: "SW", score: 923 },
    { id: 4, name: "Chris P.", avatar: "CP", score: 901 },
  ];

  const hotGear = [
    { id: 1, title: "Precision Shooting Rest", price: 129.99, views: 234, image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=300" },
    { id: 2, title: "Tactical Range Bag", price: 89.99, views: 156, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300" },
    { id: 3, title: "Competition Timer", price: 199.99, views: 312, image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=300" },
  ];

  const podcasts = [
    { id: 1, title: "Advanced Shooting Techniques", duration: "45 min", thumbnail: "🎙️" },
    { id: 2, title: "Competition Mindset", duration: "32 min", thumbnail: "🎙️" },
  ];

  const hotQuestions = [
    { id: 1, user: "Taylor M.", avatar: "TM", question: "Best drills for improving trigger control?", answers: 12 },
    { id: 2, user: "Jamie L.", avatar: "JL", question: "Recommended ammo for competition shooting?", answers: 8 },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="bg-gradient-card border-b border-border/50 shadow-soft">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-primary rounded-xl p-2 shadow-soft">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">My Shooting Star</h1>
              <p className="text-xs text-muted-foreground">Your Partner in Shooting</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-primary shadow-soft flex items-center justify-center text-primary-foreground font-semibold">
            JD
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Welcome */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-2">Hi, John! 👋</h2>
          <p className="text-muted-foreground">Welcome back to the range!</p>
        </div>

        {/* Upcoming Events */}
        <Card className="bg-gradient-card border-0 shadow-card animate-slide-up">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-primary" /> Upcoming Events 🎯
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {upcomingEvents.map(event => (
                <Card key={event.id} className="bg-secondary border-0 min-w-[280px] flex-shrink-0">
                  <CardContent className="p-4">
                    <div className="text-xs font-semibold text-primary mb-2">{event.date}</div>
                    <h4 className="font-semibold text-foreground mb-1">{event.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{event.location}</p>
                    <Button size="sm" variant="outline" className="w-full">Register</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Community Highlights */}
        <Card className="bg-gradient-card border-0 shadow-card animate-slide-up">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">Community Highlights ⭐</h3>
            <div className="space-y-4">
              {communityHighlights.map(post => (
                <div key={post.id} className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-semibold flex-shrink-0">{post.avatar}</div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm mb-1">{post.user}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{post.preview}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {post.likes}</span>
                      <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> {post.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Shooters */}
        <Card className="bg-gradient-card border-0 shadow-card animate-slide-up">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Top Shooters This Week 🏆</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {topShooters.map((shooter, index) => (
                <div key={shooter.id} className="text-center min-w-[80px] flex-shrink-0">
                  <div className="relative mb-2">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold mx-auto">{shooter.avatar}</div>
                    {index < 3 && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">{index + 1}</div>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-foreground">{shooter.name}</p>
                  <p className="text-xs text-primary font-semibold">{shooter.score}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hot Gear */}
        <Card className="bg-gradient-card border-0 shadow-card animate-slide-up">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Hot Gear This Week 🔥</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {hotGear.map(item => (
                <Card key={item.id} className="bg-secondary border-0 min-w-[160px] flex-shrink-0 overflow-hidden">
                  <CardContent className="p-0">
                    <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-t-lg" />
                    <div className="p-3">
                      <h4 className="text-sm font-semibold text-foreground line-clamp-1 mb-1">{item.title}</h4>
                      <p className="text-sm font-bold text-primary mb-1">${item.price}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1"><Eye className="w-3 h-3" /> {item.views} views</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Explore More CTA */}
        <Link to="/marketplace">
          <Card className="bg-gradient-primary border-0 shadow-card hover:opacity-90 transition-all cursor-pointer animate-slide-up">
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

      {/* FAB */}
      <Button size="lg" className="fixed bottom-24 right-6 w-14 h-14 rounded-full shadow-card bg-gradient-primary hover:opacity-90 z-20">
        <Plus className="w-6 h-6" />
      </Button>

      <BottomNav active="home" />
    </div>
  );
};

export default Dashboard;
