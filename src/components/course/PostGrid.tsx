import { useState } from "react";
import { PostCard } from "./PostCard";
import { PlanningPhase, SetupPhase, BuildPhase, TestPhase, ReleasePhase } from "./milestone-1";
import { PlanningPhase as M2PlanningPhase, SetupPhase as M2SetupPhase } from "./milestone-2";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PostGridProps {
  selectedMilestone: string;
  selectedPhase: string;
}

// Content for the unified planning phase post
const planningPhasePost = {
  id: "m1-plan-unified",
  milestone: "m1",
  phase: "plan", 
  title: "Define the Platform Signature",
  duration: "12 min",
  type: "main" as const,
  description: "Complete planning phase covering design system foundation, color strategy, design tokens, and semantic architecture"
};

// Setup phase post
const setupPhasePost = {
  id: "m1-setup-unified",
  milestone: "m1",
  phase: "setup", 
  title: "Configure Design System",
  duration: "15 min",
  type: "main" as const,
  description: "Setup Vite + Tailwind and integrate design tokens into your development environment"
};

// Build phase post
const buildPhasePost = {
  id: "m1-build-unified",
  milestone: "m1",
  phase: "build", 
  title: "Implement Core Components",
  duration: "15 min",
  type: "main" as const,
  description: "Build button systems, layouts, cards, navigation, and integrate components into cohesive interface"
};

// Test phase post
const testPhasePost = {
  id: "m1-test-unified",
  milestone: "m1",
  phase: "test", 
  title: "Validate Design Consistency",
  duration: "9 min",
  type: "main" as const,
  description: "Test component validation, design system integration, and accessibility compliance"
};

// Release phase post
const releasePhasePost = {
  id: "m1-release-unified",
  milestone: "m1",
  phase: "release", 
  title: "Deploy Foundation",
  duration: "12 min",
  type: "main" as const,
  description: "Production build, drag-and-drop deployment, design system documentation, and milestone completion"
};

// M2 Posts - User Interface Complete
const m2PlanningPost = {
  id: "m2-plan-unified",
  milestone: "m2",
  phase: "plan", 
  title: "Design User Experience Flow",
  duration: "10 min",
  type: "main" as const,
  description: "Map user journeys, define component hierarchy, and plan routing structure within the existing design system"
};

const m2SetupPost = {
  id: "m2-setup-unified",
  milestone: "m2",
  phase: "setup", 
  title: "Configure Application Architecture",
  duration: "15 min",
  type: "main" as const,
  description: "Set up React fundamentals, component patterns, and development tooling for interactive features"
};

const m2BuildPost = {
  id: "m2-build-unified",
  milestone: "m2",
  phase: "build", 
  title: "Develop Interactive Features",
  duration: "25 min",
  type: "main" as const,
  description: "Build notification badges, task managers, forms, and dynamic components using React hooks and patterns"
};

const m2TestPost = {
  id: "m2-test-unified",
  milestone: "m2",
  phase: "test", 
  title: "User Experience Validation",
  duration: "8 min",
  type: "main" as const,
  description: "Test interactive components, validate user flows, and ensure responsive behavior"
};

const m2ReleasePost = {
  id: "m2-release-unified",
  milestone: "m2",
  phase: "release", 
  title: "Interactive UI Deployment",
  duration: "5 min",
  type: "main" as const,
  description: "Deploy enhanced application with interactive features and document component patterns"
};

// All mock posts
const mockPosts = [
  planningPhasePost,
  setupPhasePost,
  buildPhasePost,
  testPhasePost,
  releasePhasePost,
  m2PlanningPost,
  m2SetupPost,
  m2BuildPost,
  m2TestPost,
  m2ReleasePost,
];

export function PostGrid({ selectedMilestone, selectedPhase }: PostGridProps) {
  const [viewingPost, setViewingPost] = useState<string | null>(null);
  
  const filteredPosts = mockPosts.filter(post => {
    const milestoneMatch = selectedMilestone === "all" || post.milestone === selectedMilestone;
    const phaseMatch = selectedPhase === "all" || post.phase === selectedPhase;
    return milestoneMatch && phaseMatch;
  });

  
  // Show detailed content for planning phase
  if (viewingPost === "m1-plan-unified") {
    return <PlanningPhase onBack={() => setViewingPost(null)} />;
  }

  // Show detailed content for setup phase
  if (viewingPost === "m1-setup-unified") {
    return <SetupPhase onBack={() => setViewingPost(null)} />;
  }

  // Show detailed content for build phase
  if (viewingPost === "m1-build-unified") {
    return <BuildPhase onBack={() => setViewingPost(null)} />;
  }

  // Show detailed content for test phase
  if (viewingPost === "m1-test-unified") {
    return <TestPhase onBack={() => setViewingPost(null)} />;
  }

  // Show detailed content for release phase
  if (viewingPost === "m1-release-unified") {
    return <ReleasePhase onBack={() => setViewingPost(null)} />;
  }

  // M2 Phase Views
  if (viewingPost === "m2-plan-unified") {
    return <M2PlanningPhase onBack={() => setViewingPost(null)} />;
  }

  if (viewingPost === "m2-setup-unified") {
    return <M2SetupPhase onBack={() => setViewingPost(null)} />;
  }

  // Placeholder for other M2 phases
  if (viewingPost?.startsWith("m2-")) {
    return (
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => setViewingPost(null)}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Posts
        </Button>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            This phase content is currently in development and will be available soon.
          </p>
        </div>
      </div>
    );
  }

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">
          No posts found for the selected filters
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Try adjusting your milestone or phase selection
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPosts.map((post) => (
        <PostCard 
          key={post.id} 
          post={post} 
          onView={() => setViewingPost(post.id)}
        />
      ))}
    </div>
  );
}