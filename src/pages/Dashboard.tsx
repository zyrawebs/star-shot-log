import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Heart, MessageCircle, Eye, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { supabase } from "@/lib/supabaseClient";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
}

interface Highlight {
  id: number;
  user: string;
  avatar: string;
  preview: string;
  likes: number;
  comments: number;
}

interface Shooter {
  id: number;
  name: string;
  avatar: string;
  score: number;
}

interface Gear {
  id: number;
  title: string;
  price: number;
  views: number;
  image: string;
}

interface Podcast {
  id: number;
  title: string;
  duration: string;
  image: string;
}

interface Question {
  id: number;
  user: string;
  avatar: string;
  question: string;
  answers: number;
}

const Dashboard = () => {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [communityHighlights, setCommunityHighlights] = useState<Highlight[]>([]);
  const [topShooters, setTopShooters] = useState<Shooter[]>([]);
  const [hotGear, setHotGear] = useState<Gear[]>([]);
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [hotQuestions, setHotQuestions] = useState<Question[]>([]);

  const [loading, setLoading] = useState(true);

  // Fetch data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [events, highlights, shooters, gear, pods, questions] = await Promise.all([
        supabase.from("upcoming_events").select("*"),
        supabase.from("community_highlights").select("*"),
        supabase.from("top_shooters").select("*"),
        supabase.from("hot_gear").select("*"),
        supabase.from("podcasts").select("*"),
        supabase.from("hot_questions").select("*"),
      ]);

      if (events.data) setUpcomingEvents(events.data);
      if (highlights.data) setCommunityHighlights(highlights.data);
      if (shooters.data) setTopShooters(shooters.data);
      if (gear.data) setHotGear(gear.data);
      if (pods.data) setPodcasts(pods.data);
      if (questions.data) setHotQuestions(questions.data);

      setLoading(false);
    };

    fetchData();
  }, []);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) newSet.delete(postId);
      else newSet.add(postId);
      return newSet;
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        Loading dashboard data...
      </div>
    );
  }

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

        {/* Section 1: Upcoming Events 🎯 */}
        <Card className="bg-card border-0 shadow-md rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-foreground mb-3">Upcoming Events 🎯</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {upcomingEvents.map(event => (
                <div key={event.id} className="min-w-[280px] border border-border rounded-xl p-3 bg-card">
                  <h4 className="text-sm font-bold mb-1">{event.title}</h4>
                  <p className="text-xs text-gray-600 mb-2">{event.date} • {event.location}</p>
                  <Button size="sm" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg text-sm font-medium">
                    Register
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Community Highlights ⭐ */}
        <Card className="bg-card border-0 shadow-md rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-foreground mb-3">Community Highlights ⭐</h3>
            <div className="space-y-3">
              {communityHighlights.map(post => (
                <div key={post.id} className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-purple flex items-center justify-center text-white font-semibold">{post.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold">{post.user}</p>
                    <p className="text-sm text-gray-700 line-clamp-2 mb-1">{post.preview}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <button onClick={() => toggleLike(post.id)} className="flex items-center gap-1 hover:text-red-500">
                        <Heart className={`w-3 h-3 ${likedPosts.has(post.id) ? 'fill-red-500 text-red-500' : ''}`} />
                        {likedPosts.has(post.id) ? post.likes + 1 : post.likes}
                      </button>
                      <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> {post.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Top Shooters Wall 🏆 */}
        <Card className="bg-card border-0 shadow-md rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold text-foreground mb-3">Top Shooters Wall 🏆</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {topShooters.map((shooter, index) => (
                <div key={shooter.id} className="text-center min-w-[100px]">
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
                  <p className="text-sm font-semibold">{shooter.name}</p>
                  <p className="text-xs text-gray-600">{shooter.score} pts</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Hot Gear 🔥 */}
        <Card className="bg-card border-0 shadow-md rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-3">Hot Gear This Week 🔥</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {hotGear.map(item => (
                <div key={item.id} className="min-w-[160px] cursor-pointer">
                  <img src={item.image} alt={item.title} className="h-32 w-full object-cover rounded-xl mb-2" />
                  <h4 className="text-sm font-semibold line-clamp-2 mb-1">{item.title}</h4>
                  <p className="text-lg font-bold text-secondary mb-1">${item.price}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1"><Eye className="w-3 h-3" /> {item.views} views</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Trending Podcasts 🎙️ */}
        <Card className="bg-card border-0 shadow-md rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-3">Trending Podcasts 🎙️</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {podcasts.map(podcast => (
                <div key={podcast.id} className="min-w-[200px] cursor-pointer">
                  <img src={podcast.image} alt={podcast.title} className="h-28 w-full object-cover rounded-xl mb-2" />
                  <h4 className="text-sm font-semibold mb-1">{podcast.title}</h4>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">🔥 Trending</span>
                    <span className="text-gray-600">{podcast.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Hot Asks This Week ❓ */}
        <Card className="bg-card border-0 shadow-md rounded-2xl">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-3">Hot Asks This Week 🔥❓</h3>
            <div className="space-y-3">
              {hotQuestions.map(q => (
                <div key={q.id} className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-purple flex items-center justify-center text-white font-semibold">{q.avatar}</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{q.user}</p>
                    <p className="text-sm text-gray-700 line-clamp-2 mb-1">{q.question}</p>
                    <p className="text-xs text-gray-500">{q.answers} answers</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Explore More */}
        <Link to="/marketplace">
          <Card className="bg-gradient-purple border-0 shadow-lg hover:opacity-90 transition-all cursor-pointer rounded-2xl mb-6">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white">Explore More Gears</h3>
                <p className="text-sm text-white/80">Discover the latest equipment</p>
              </div>
              <ArrowRight className="w-6 h-6 text-white" />
            </CardContent>
          </Card>
        </Link>
      </main>

      {/* Floating Action Button */}
      <Button size="lg" className="fixed bottom-24 right-6 w-14 h-14 rounded-full shadow-2xl bg-gradient-purple hover:scale-110 transition-transform z-20 p-0">
        <Plus className="w-6 h-6 text-white" />
      </Button>

      <BottomNav active="home" />
    </div>
  );
};

export default Dashboard;
