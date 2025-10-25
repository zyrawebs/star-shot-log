import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Target, Users, MessageCircle, Calendar, Search, Heart, Share2, Trophy, HelpCircle } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const Community = () => {
  const [activeTab, setActiveTab] = useState<"feed" | "questions" | "events" | "leaderboard">("feed");
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const posts = [
    {
      id: 1,
      user: { name: "Sarah Miller", avatar: "SM" },
      content: "Finally hit 95% accuracy at 50 yards! Consistency is key 🎯 Been working on my breathing technique and it's really paying off.",
      timestamp: "2h ago",
      likes: 142,
      comments: 23,
      image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600",
    },
    {
      id: 2,
      user: { name: "Mike Chen", avatar: "MC" },
      content: "New personal best today! 250 rounds, zero malfunctions. This range is amazing 💪",
      timestamp: "5h ago",
      likes: 89,
      comments: 12,
    },
  ];

  const questions = [
    { id: 1, user: "Taylor Morgan", avatar: "TM", question: "Best drills for improving trigger control?", answers: 12, views: 234 },
    { id: 2, user: "Jamie Lee", avatar: "JL", question: "Recommended ammo for competition shooting?", answers: 8, views: 156 },
  ];

  const events = [
    { id: 1, title: "Local Range Competition", date: "March 15, 2025", location: "Springfield Range", interested: 24, image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=600" },
    { id: 2, title: "Training Workshop", date: "March 22, 2025", location: "Online", interested: 156, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
  ];

  const leaderboard = [
    { rank: 1, name: "Alex Rodriguez", avatar: "AR", score: 987 },
    { rank: 2, name: "Jordan Kim", avatar: "JK", score: 945 },
    { rank: 3, name: "Sam Wilson", avatar: "SW", score: 923 },
    { rank: 4, name: "Chris Parker", avatar: "CP", score: 901 },
  ];

  const toggleLike = (postId: number) => {
    setLikedPosts(prev =>
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-soft pb-24">
      {/* Header */}
      <header className="bg-gradient-card border-b border-border/50 shadow-soft sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-foreground">Community</h1>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search users, posts..."
              className="pl-10 bg-background"
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Button
              variant={activeTab === "feed" ? "default" : "outline"}
              onClick={() => setActiveTab("feed")}
              size="sm"
            >
              Feed
            </Button>
            <Button
              variant={activeTab === "questions" ? "default" : "outline"}
              onClick={() => setActiveTab("questions")}
              size="sm"
            >
              Questions
            </Button>
            <Button
              variant={activeTab === "events" ? "default" : "outline"}
              onClick={() => setActiveTab("events")}
              size="sm"
            >
              Events
            </Button>
            <Button
              variant={activeTab === "leaderboard" ? "default" : "outline"}
              onClick={() => setActiveTab("leaderboard")}
              size="sm"
            >
              Leaderboard
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto">
        {/* Post Composer (Feed Tab Only) */}
        {activeTab === "feed" && (
          <div className="px-6 py-4 bg-gradient-card border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                JD
              </div>
              <div className="flex-1 bg-background rounded-full px-4 py-2 text-muted-foreground cursor-pointer">
                What's on your mind?
              </div>
            </div>
          </div>
        )}

        {/* Feed Tab */}
        {activeTab === "feed" && (
          <div className="divide-y divide-border/50">
            {posts.map((post) => (
              <Card key={post.id} className="bg-gradient-card border-0 rounded-none shadow-none">
                <CardContent className="p-6">
                  {/* User Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      {post.user.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{post.user.name}</p>
                      <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-foreground mb-4">{post.content}</p>

                  {/* Image */}
                  {post.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img src={post.image} alt="Post" className="w-full" />
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          likedPosts.includes(post.id) ? "fill-primary text-primary" : ""
                        }`}
                      />
                      <span className="text-sm">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Questions Tab */}
        {activeTab === "questions" && (
          <div className="p-6 space-y-4">
            {questions.map((q) => (
              <Card key={q.id} className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground text-sm font-semibold flex-shrink-0">
                      {q.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground mb-1">{q.user}</p>
                      <p className="text-foreground mb-3">{q.question}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{q.answers} answers</span>
                        <span>{q.views} views</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    Answer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Events Tab */}
        {activeTab === "events" && (
          <div className="p-6 space-y-4">
            {events.map((event) => (
              <Card key={event.id} className="bg-gradient-card border-0 shadow-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-40">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground text-lg mb-2">{event.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground mb-4">
                      <p className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        {event.location}
                      </p>
                      <p>{event.interested} people interested</p>
                    </div>
                    <Button className="w-full">Register</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === "leaderboard" && (
          <div className="p-6 space-y-3">
            <div className="flex gap-2 mb-4">
              <Button size="sm" variant="default" className="flex-1">Weekly</Button>
              <Button size="sm" variant="outline" className="flex-1">Monthly</Button>
              <Button size="sm" variant="outline" className="flex-1">All-Time</Button>
            </div>
            {leaderboard.map((entry) => (
              <Card key={entry.rank} className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    entry.rank <= 3 ? "bg-gradient-primary text-primary-foreground" : "bg-secondary text-foreground"
                  }`}>
                    {entry.rank}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    {entry.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{entry.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary">{entry.score}</p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <BottomNav active="community" />
    </div>
  );
};

export default Community;
