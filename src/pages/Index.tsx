import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Activity, Package, Users, TrendingUp, Award } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Activity,
      title: "Track Training",
      description: "Log sessions, rounds fired, and accuracy",
    },
    {
      icon: Package,
      title: "Manage Ammo",
      description: "Keep inventory of your ammunition",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with fellow sport shooters",
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      description: "Monitor your progress over time",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-primary rounded-3xl p-6 shadow-card animate-float">
              <Target className="w-16 h-16 text-primary-foreground" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Shooting Star
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              Your Partner in Shooting
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The modern app for sport shooters to track training, manage ammunition,
              and connect with the shooting community.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up">
            <Button
              size="lg"
              variant="gradient"
              onClick={() => navigate("/auth")}
              className="w-full sm:w-auto"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/dashboard")}
              className="w-full sm:w-auto"
            >
              View Demo
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-16 animate-scale-in">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-gradient-card border-0 rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-secondary rounded-xl p-3">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Badge */}
          <div className="flex items-center justify-center gap-8 pt-8 text-center animate-fade-in">
            <div>
              <div className="text-3xl font-bold text-foreground">10k+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-foreground">50k+</div>
              <div className="text-sm text-muted-foreground">Sessions Logged</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-foreground">4.8★</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
