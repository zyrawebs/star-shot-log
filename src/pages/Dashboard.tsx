import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Heart, MessageCircle, Eye, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";

const Dashboard = () => {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const upcomingEvents = [
    { id: 1, title: "Monthly IPSC Competition", date: "Nov 5", location: "Oakwood Range" },
    { id: 2, title: "Beginner Training Day", date: "Nov 12", location: "Metro Shooting" },
    { id: 3, title: "3-Gun Challenge", date: "Nov 18", location: "Desert Range" },
    { id: 4, title: "Precision Rifle Workshop", date: "Nov 22", location: "Mountain Range" },
    { id: 5, title: "Speed Shooting Finals", date: "Nov 28", location: "Victory Range" },
  ];

  const communityHighlights = [
    { id: 1, user: "tactical_sarah", avatar: "TS", preview: "Just hit my personal best! 95% accuracy 🎯", likes: 234, comments: 45 },
    { id: 2, user: "range_master", avatar: "RM", preview: "New training drill for improving speed. Who wants to try?", likes: 189, comments: 67 },
    { id: 3, user: "precision_pro", avatar: "PP", preview: "Beautiful day at the range. Check out this grouping!", likes: 312, comments: 89 },
  ];

  const topShooters = [
    { id: 1, name: "eagle_eye", avatar: "EE", score: 2450 },
    { id: 2, name: "tactical_sarah", avatar: "TS", score: 2380 },
    { id: 3, name: "precision_pro", avatar: "PP", score: 2290 },
    { id: 4, name: "range_master", avatar: "RM", score: 2156 },
    { id: 5, name: "steady_aim", avatar: "SA", score: 2089 },
  ];

  const hotGear = [
    { id: 1, title: "Tactical Holster IWB", price: 45, views: 156, image: "https://picsum.photos/seed/gear1/400/300" },
    { id: 2, title: "Range Bag Deluxe", price: 89, views: 234, image: "https://picsum.photos/seed/gear2/400/300" },
    { id: 3, title: "Electronic Ear Protection", price: 120, views: 189, image: "https://picsum.photos/seed/gear3/400/300" },
    { id: 4, title: "Speed Loader Kit", price: 35, views: 145, image: "https://picsum.photos/seed/gear4/400/300" },
    { id: 5, title: "Cleaning Mat Pro", price: 28, views: 98, image: "https://picsum.photos/seed/gear5/400/300" },
    { id: 6, title: "Target Stand Adjustable", price: 65, views: 178, image: "https://picsum.photos/seed/gear6/400/300" },
  ];

  const podcasts = [
    { id: 1, title: "Advanced Pistol Techniques", duration: "45 min", image: "https://picsum.photos/seed/podcast1/400/300" },
    { id: 2, title: "Competition Mindset", duration: "38 min", image: "https://picsum.photos/seed/podcast2/400/300" },
    { id: 3, title: "Firearms Safety Deep Dive", duration: "52 min", image: "https://picsum.photos/seed/podcast3/400/300" },
    { id: 4, title: "Top Shooters Interview Series", duration: "41 min", image: "https://picsum.photos/seed/podcast4/400/300" },
  ];

  const hotQuestions = [
    { id: 1, user: "newbie_shooter", avatar: "NS", question: "Best way to improve trigger control?", answers: 12 },
    { id: 2, user: "competition_joe", avatar: "CJ", question: "Drills for USPSA preparation?", answers: 18 },
    { id: 3, user: "range_buddy", avatar: "RB", question: "How often to clean firearms?", answers: 23 },
    { id: 4, user: "learning_fast", avatar: "LF", question: "Best stance for rapid fire?", answers: 15 },
  ];

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-24">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-soft sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl">
                <span className="font-black uppercase tracking-tight text-foreground">SHOOTING</span>{" "}
                <span className="font-normal italic text-primary" style={{ fontFamily: 'cursive' }}>Community</span>
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">Your sport shooting platform</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-primary shadow-soft flex items-center justify-center text-primary-foreground font-semibold">
              JD
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Welcome */}
        <div className="animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground">Hi, John! 👋</h2>
          <p className="text-muted-foreground text-sm">Welcome back to the range!</p>
        </div>

        {/* Section 1: Upcoming Events */}
        <Card className="bg-card border-0 shadow-md rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-foreground mb-3">Upcoming Events 🎯</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {upcomingEvents.map(event => (
                <div key={event.id} className="min-w-[280px] flex-shrink-0 border border-border rounded-xl p-3 bg-card">
                  <h4 className="text-sm font-bold text-gray-800 mb-1">{event.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">{event.date} • {event.location}</p>
                  <Button size="sm" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg text-sm font-medium">
                    Register
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Community Highlights */}
        <Card className="bg-card border-0 shadow-md rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-foreground mb-3">Community Highlights ⭐</h3>
            <div className="space-y-3">
              {communityHighlights.map(post => (
                <div 
                  key={post.id} 
                  className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-purple flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                    {post.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800">{post.user}</p>
                    <p className="text-sm text-gray-700 line-clamp-2 mb-1">{post.preview}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <button 
                        onClick={() => toggleLike(post.id)}
                        className="flex items-center gap-1 hover:text-red-500 transition-colors"
                      >
                        <Heart className={`w-3 h-3 ${likedPosts.has(post.id) ? 'fill-red-500 text-red-500' : ''}`} />
                        {likedPosts.has(post.id) ? post.likes + 1 : post.likes}
                      </button>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" /> {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Top Shooters Wall */}
        <Card className="bg-card border-0 shadow-md rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-foreground mb-3">Top Shooters Wall 🏆</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {topShooters.map((shooter, index) => (
                <div key={shooter.id} className="text-center min-w-[100px] flex-shrink-0">
                  <div className="relative mb-2 inline-block">
                    <div className="w-16 h-16 rounded-full bg-gradient-purple flex items-center justify-center text-white font-semibold">
                      {shooter.avatar}
                    </div>
                    {index < 3 && (
                      <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-secondary text-white text-xs flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-gray-800">{shooter.name}</p>
                  <p className="text-xs text-gray-600">{shooter.score} pts</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Hot Gear */}
        <Card className="bg-card border-0 shadow-md rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-foreground mb-3">Hot Gear This Week 🔥</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {hotGear.map(item => (
                <div key={item.id} className="min-w-[160px] flex-shrink-0 cursor-pointer">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-32 w-full object-cover rounded-xl mb-2"
                  />
                  <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">{item.title}</h4>
                  <p className="text-lg font-bold text-secondary mb-1">${item.price}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {item.views} views
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Your Performance */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="bg-gradient-purple border-0 shadow-md rounded-xl overflow-hidden">
            <CardContent className="p-4 text-white">
              <p className="text-sm opacity-90 mb-1">Weekly Average</p>
              <p className="text-4xl font-bold mb-1">87</p>
              <p className="text-xs opacity-80 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> ↑8% from last week
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-purple border-0 shadow-md rounded-xl overflow-hidden">
            <CardContent className="p-4 text-white">
              <p className="text-sm opacity-90 mb-1">Personal Best</p>
              <p className="text-4xl font-bold mb-1">95</p>
              <p className="text-xs opacity-80">Oct 15, 2025</p>
            </CardContent>
          </Card>
        </div>

        {/* Section 6: Trending Podcasts */}
        <Card className="bg-card border-0 shadow-md rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-foreground mb-3">Trending Podcasts 🎙️</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {podcasts.map(podcast => (
                <div key={podcast.id} className="min-w-[200px] flex-shrink-0 cursor-pointer">
                  <img 
                    src={podcast.image} 
                    alt={podcast.title} 
                    className="h-28 w-full object-cover rounded-xl mb-2"
                  />
                  <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">{podcast.title}</h4>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">🔥 Trending</span>
                    <span className="text-gray-600">{podcast.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Hot Asks This Week */}
        <Card className="bg-card border-0 shadow-md rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-foreground mb-3">Hot Asks This Week 🔥❓</h3>
            <div className="space-y-3">
              {hotQuestions.map(question => (
                <div 
                  key={question.id} 
                  className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-purple flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                    {question.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800">{question.user}</p>
                    <p className="text-sm text-gray-700 line-clamp-2 mb-1">{question.question}</p>
                    <p className="text-xs text-gray-500">{question.answers} answers</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 8: Explore More Gears CTA */}
        <Link to="/marketplace">
          <Card className="bg-gradient-purple border-0 shadow-lg hover:opacity-90 transition-all cursor-pointer rounded-2xl mb-6">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">Explore More Gears</h3>
                <p className="text-sm text-white/80">Discover the latest equipment</p>
              </div>
              <ArrowRight className="w-6 h-6 text-white flex-shrink-0" />
            </CardContent>
          </Card>
        </Link>
      </main>

      {/* FAB */}
      <Button 
        size="lg" 
        className="fixed bottom-24 right-6 w-14 h-14 rounded-full shadow-2xl bg-gradient-purple hover:scale-110 transition-transform z-20 p-0"
      >
        <Plus className="w-6 h-6 text-white" />
      </Button>

      <BottomNav active="home" />
    </div>
  );
};

export default Dashboard;
