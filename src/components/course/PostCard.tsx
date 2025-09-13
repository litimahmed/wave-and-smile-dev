import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, BookOpen, ExternalLink } from "lucide-react";

interface Post {
  id: string;
  milestone: string;
  phase: string;
  title: string;
  duration: string;
  type: "main" | "animation" | "supplement" | "workshop";
  description: string;
}

interface PostCardProps {
  post: Post;
  onView?: () => void;
}

const typeConfig = {
  main: {
    icon: Play,
    badge: "Main Teaching",
    badgeVariant: "default" as const,
    iconClass: "text-primary"
  },
  animation: {
    icon: Sparkles,
    badge: "Storytelling Animation", 
    badgeVariant: "secondary" as const,
    iconClass: "text-accent"
  },
  supplement: {
    icon: BookOpen,
    badge: "Side Supplement",
    badgeVariant: "outline" as const,
    iconClass: "text-muted-foreground"
  },
  workshop: {
    icon: ExternalLink,
    badge: "Workshop",
    badgeVariant: "destructive" as const,
    iconClass: "text-destructive"
  }
};

export function PostCard({ post, onView }: PostCardProps) {
  const config = typeConfig[post.type];
  const Icon = config.icon;

  const getMilestoneLabel = (milestone: string) => {
    const labels = {
      m1: "M1 — Platform Signature Ready",
      m2: "M2 — User Interface Complete", 
      m3: "M3 — Production Deployment Ready"
    };
    return labels[milestone as keyof typeof labels] || milestone;
  };

  const getPhaseLabel = (phase: string) => {
    const labels = {
      plan: "Plan",
      setup: "Setup", 
      build: "Build",
      test: "Test",
      release: "Release"
    };
    return labels[phase as keyof typeof labels] || phase;
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Icon className={`h-5 w-5 ${config.iconClass}`} />
            <Badge variant={config.badgeVariant} className="text-xs font-medium">
              {config.badge}
            </Badge>
          </div>
          <span className="text-sm font-medium text-muted-foreground">
            {post.duration}
          </span>
        </div>
        
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{getMilestoneLabel(post.milestone)}</span>
            <span>•</span>
            <span className="capitalize">{getPhaseLabel(post.phase)}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-sm leading-relaxed">
          {post.description}
        </CardDescription>
        
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          onClick={onView}
        >
          <Play className="h-4 w-4 mr-2" />
          View Content
        </Button>
      </CardContent>
    </Card>
  );
}