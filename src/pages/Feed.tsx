import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Search, Target } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const Feed = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const posts = [
    {
      id: 1,
      user: { name: "Sarah Miller", avatar: "SM", username: "@sarahm" },
      location: "Springfield Range",
      images: ["https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800"],
      likes: 142,
      comments: 23,
      caption: "Finally hit 95% accuracy at 50 yards! Consistency is key 🎯",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      user: { name: "Mike Chen", avatar: "MC", username: "@mikechen" },
      location: "Urban Shooting Club",
      images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800"],
      likes: 89,
      comments: 12,
      caption: "New personal best today! 250 rounds, zero malfunctions. This range is amazing 💪",
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      user: { name: "Alex Rodriguez", avatar: "AR", username: "@alexr" },
      location: "Mountain View Range",
      images: ["https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800"],
      likes: 203,
      comments: 34,
      caption: "Competition day was incredible! Placed 3rd in my division. Can't wait for the next one 🏆",
      timestamp: "1 day ago",
    },
  ];

  const toggleLike = (postId: number) => {
    setLikedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-soft pb-24">
      {/* Header */}
      <header className="bg-gradient-card border-b border-border/50 shadow-soft sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary rounded-lg p-1.5">
              <Target className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Shooting Star</h1>
          </div>
          <Button size="icon" variant="ghost">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto">
        {/* Post Composer */}
        <div className="px-6 py-4 bg-gradient-card border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
              JD
            </div>
            <div className="flex-1 bg-background rounded-full px-4 py-2 text-muted-foreground cursor-pointer">
              Share your training...
            </div>
          </div>
        </div>

        {/* Feed */}
        <div className="divide-y divide-border/50">
          {posts.map((post, index) => (
            <Card
              key={post.id}
              className="bg-gradient-card border-0 rounded-none shadow-none animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Post Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                      {post.user.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{post.user.name}</p>
                      {post.location && (
                        <p className="text-xs text-muted-foreground">{post.location}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Post Image */}
                <div className="w-full aspect-square bg-secondary">
                  <img
                    src={post.images[0]}
                    alt="Post"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Actions */}
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="transition-transform active:scale-90"
                    >
                      <Heart
                        className={`w-6 h-6 ${
                          likedPosts.includes(post.id)
                            ? "fill-primary text-primary"
                            : "text-foreground"
                        }`}
                      />
                    </button>
                    <button>
                      <MessageCircle className="w-6 h-6 text-foreground" />
                    </button>
                    <button>
                      <Share2 className="w-6 h-6 text-foreground" />
                    </button>
                  </div>

                  {/* Likes */}
                  <p className="font-semibold text-sm text-foreground mb-2">
                    {post.likes + (likedPosts.includes(post.id) ? 1 : 0)} likes
                  </p>

                  {/* Caption */}
                  <p className="text-sm text-foreground">
                    <span className="font-semibold">{post.user.username}</span>{" "}
                    {post.caption}
                  </p>

                  {/* Comments */}
                  {post.comments > 0 && (
                    <button className="text-sm text-muted-foreground mt-2">
                      View all {post.comments} comments
                    </button>
                  )}

                  {/* Timestamp */}
                  <p className="text-xs text-muted-foreground mt-2">{post.timestamp}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <BottomNav active="feed" />
    </div>
  );
};

export default Feed;
