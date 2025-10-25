import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Package, Users, Plus, Activity, Award, Crosshair, Home, ScrollText, ShoppingBag, Map } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    { label: "Sessions", value: "24", icon: Activity, color: "text-primary" },
    { label: "Rounds Fired", value: "3,842", icon: Crosshair, color: "text-accent" },
    { label: "Ammo Left", value: "1,250", icon: Package, color: "text-primary" },
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
              <h1 className="text-xl font-bold text-foreground">Shooting Star</h1>
              <p className="text-xs text-muted-foreground">Your Partner in Shooting</p>
            </div>
          </div>
          
          <div className="w-10 h-10 rounded-full bg-gradient-primary shadow-soft flex items-center justify-center text-primary-foreground font-semibold">
            JD
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Hi, John! 👋
          </h2>
          <p className="text-muted-foreground">
            Track your progress and keep improving
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-up">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="bg-gradient-card border-0 shadow-card hover:shadow-soft transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-xl bg-secondary ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Accuracy Card */}
        <Card className="bg-gradient-card border-0 shadow-card animate-slide-up">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  Accuracy Average
                </h3>
                <p className="text-sm text-muted-foreground">Last 30 days</p>
              </div>
              <div className="bg-gradient-primary rounded-2xl p-3 shadow-soft">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* Circular Progress - Placeholder */}
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-secondary"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={553}
                    strokeDashoffset={553 * (1 - 0.87)}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    87%
                  </span>
                  <span className="text-sm text-muted-foreground mt-1">Accuracy</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-up">
          <Card className="bg-gradient-primary border-0 shadow-card hover:shadow-soft transition-all cursor-pointer group">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-1">
                  Log Training
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  Add a new session
                </p>
              </div>
              <div className="bg-primary-foreground/20 rounded-full p-3 group-hover:scale-110 transition-transform">
                <Plus className="w-6 h-6 text-primary-foreground" />
              </div>
            </CardContent>
          </Card>

          <Link to="/community">
            <Card className="bg-gradient-card border border-primary/20 shadow-card hover:shadow-soft transition-all cursor-pointer group h-full">
              <CardContent className="p-6 flex items-center justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    Community
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with shooters
                  </p>
                </div>
                <div className="bg-secondary rounded-full p-3 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-around">
            <button className="flex flex-col items-center gap-1 text-primary">
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <ScrollText className="w-6 h-6" />
              <span className="text-xs">Feed</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <ShoppingBag className="w-6 h-6" />
              <span className="text-xs">Marketplace</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <Users className="w-6 h-6" />
              <span className="text-xs">Community</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <Map className="w-6 h-6" />
              <span className="text-xs">Shooting Map</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
