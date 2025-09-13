import { ArrowLeft, Clock, Play, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const milestone1 = {
  title: "M1 — Platform Signature Ready",
  outcome: "A foundational React application shell (e.g., dashboard layout) with a semantic design system, responsive components (buttons, grids, nav), and basic prop variations, ready for prototyping.",
  duration: "45-50 minutes",
  architecture: "React + Vite + TypeScript + Tailwind CSS",
  technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "Semantic Tokens", "Props"],
  deliverable: "Styled shell with semantic styling (e.g., CSS variables for colors)",
  animation: "Token Flow Visualization - Animate tokens cascading to components for visual clarity",
  engagement: "Prop challenges for quick wins",
  phases: [
    {
      title: "Plan: Define Semantic Design Foundation",
      duration: "10 min",
      videoCount: 3,
      videos: [
        { title: "Visual Identity & Semantic Strategy", duration: "4 min", type: "Main teaching" },
        { title: "Component Hierarchy Planning", duration: "3 min", type: "Main teaching" },
        { title: "Token Flow Visualization", duration: "3 min", type: "Storytelling animation" }
      ]
    },
    {
      title: "Setup: Semantic Tooling Config",
      duration: "10 min",
      videoCount: 3,
      videos: [
        { title: "Vite & Tailwind Base", duration: "3 min", type: "Main teaching" },
        { title: "Token & Prop Extensions", duration: "4 min", type: "Main teaching" },
        { title: "Quick Validation", duration: "3 min", type: "Main teaching" }
      ]
    },
    {
      title: "Build: Semantic Components",
      duration: "15 min",
      videoCount: 4,
      videos: [
        { title: "Semantic Buttons with Props", duration: "4 min", type: "Main teaching" },
        { title: "Grid & Container Layouts", duration: "3 min", type: "Main teaching" },
        { title: "Nav & Card Semantics", duration: "4 min", type: "Main teaching" },
        { title: "Shell Assembly", duration: "4 min", type: "Main teaching" }
      ]
    },
    {
      title: "Test: Semantic Validation",
      duration: "6 min",
      videoCount: 2,
      videos: [
        { title: "Layout & Token Checks", duration: "3 min", type: "Main teaching" },
        { title: "Prototype-Ready Audit", duration: "3 min", type: "Main teaching" }
      ]
    },
    {
      title: "Release: Prototype Foundation",
      duration: "9 min",
      videoCount: 3,
      videos: [
        { title: "Build Optimization", duration: "3 min", type: "Main teaching" },
        { title: "Deploy & Token Docs", duration: "3 min", type: "Main teaching + Supplement" },
        { title: "Wrap & Prototype Tease", duration: "3 min", type: "Main teaching" }
      ]
    }
  ]
};

const milestone2 = {
  title: "M2 — UI Architecture & Prototype",
  outcome: "A high-level UI prototype in Figma for static pages (e.g., homepage, About sketches) with placeholder blocks, plus code conversion tips to guide M3 implementation.",
  duration: "50 minutes",
  architecture: "Figma + Chrome Extensions + Design Conversion",
  technologies: ["Figma", "Chrome extensions (html.to.design)", "Behance inspiration", "Tailwind specs"],
  deliverable: "Figma file with 2-3 page prototypes, annotated for code",
  animation: "Prototype to Code Journey",
  engagement: "Extension demo, conversion checklist challenge",
  transition: "Demos styled shell, hints at Figma prototyping for UI vision",
  phases: [
    {
      title: "Plan: Blueprint UI Flows",
      duration: "12 min",
      videoCount: 3,
      videos: [
        { title: "M1 Transition & Architecture Vision", duration: "4 min", type: "Main teaching" },
        { title: "Inspiration Sourcing", duration: "4 min", type: "Main teaching" },
        { title: "Flow Mapping Exercise", duration: "4 min", type: "Main teaching" }
      ]
    },
    {
      title: "Setup: Prototyping Toolkit",
      duration: "8 min",
      videoCount: 2,
      videos: [
        { title: "Figma & Extension Install", duration: "4 min", type: "Main teaching" },
        { title: "Workspace Prep", duration: "4 min", type: "Main teaching" }
      ]
    },
    {
      title: "Build: Prototype Pages",
      duration: "18 min",
      videoCount: 4,
      videos: [
        { title: "Homepage Skeleton Sketch", duration: "5 min", type: "Main teaching" },
        { title: "About Page Blocks", duration: "4 min", type: "Main teaching" },
        { title: "Conversion Specs", duration: "5 min", type: "Main teaching" },
        { title: "Prototype Polish", duration: "4 min", type: "Main teaching" }
      ]
    },
    {
      title: "Test: Prototype Review",
      duration: "8 min",
      videoCount: 2,
      videos: [
        { title: "Flow & Modularity Check", duration: "4 min", type: "Main teaching" },
        { title: "Code-Ready Audit", duration: "4 min", type: "Main teaching" }
      ]
    },
    {
      title: "Release: Shareable Prototype",
      duration: "4 min",
      videoCount: 1,
      videos: [
        { title: "Export & Handoff", duration: "4 min", type: "Main teaching" }
      ]
    }
  ]
};

const milestone3 = {
  title: "M3 — Advanced UI with Design Libraries",
  outcome: "A themed homepage coded from M2's prototype using Radix primitives (e.g., Dialog, Tabs) and Shadcn/UI, with light/dark mode via next-themes, layered on M1's semantic design.",
  duration: "55 minutes",
  architecture: "Radix + Shadcn/UI + Next Themes",
  technologies: ["Radix Primitives", "Shadcn/UI", "Next Themes"],
  deliverable: "Interactive, themed homepage with Radix components",
  animation: "Library Integration Flow",
  engagement: "Primitive swap challenge, theme variant explorer",
  transition: "Demos Figma prototype, sets up coding with Radix/next-themes",
  phases: [
    {
      title: "Plan: Library & Theme Blueprint",
      duration: "10 min",
      videoCount: 2,
      videos: [
        { title: "Prototype Handoff Strategy", duration: "5 min", type: "Main teaching" },
        { title: "Theme Integration Map", duration: "5 min", type: "Main teaching" }
      ]
    },
    {
      title: "Setup: Primitive & Theme Foundations",
      duration: "12 min",
      videoCount: 3,
      videos: [
        { title: "Radix Primitive CLI", duration: "4 min", type: "Main teaching" },
        { title: "Next-Themes Wrapper", duration: "4 min", type: "Main teaching" },
        { title: "Spec Alignment Test", duration: "4 min", type: "Main teaching" }
      ]
    },
    {
      title: "Build: Primitive Implementation",
      duration: "20 min",
      videoCount: 4,
      videos: [
        { title: "Radix Dialog from Prototype", duration: "5 min", type: "Main teaching" },
        { title: "Tabs & Navigation Primitives", duration: "5 min", type: "Main teaching" },
        { title: "Theme Toggle Primitive", duration: "5 min", type: "Main teaching" },
        { title: "Page Assembly", duration: "5 min", type: "Main teaching" }
      ]
    },
    {
      title: "Test: Library & Theme Harmony",
      duration: "8 min",
      videoCount: 2,
      videos: [
        { title: "Primitive Behaviors", duration: "4 min", type: "Main teaching" },
        { title: "Theme & Accessibility Scan", duration: "4 min", type: "Main teaching" }
      ]
    },
    {
      title: "Release: Themed Library Build",
      duration: "5 min",
      videoCount: 2,
      videos: [
        { title: "Optimization & Export", duration: "3 min", type: "Main teaching" },
        { title: "Handoff & M4 Preview", duration: "2 min", type: "Main teaching" }
      ]
    }
  ]
};

const milestone4 = {
  title: "M4 — Project Architecture & Clean Code Structure",
  outcome: "A well-structured multi-page application with proper routing, organized file architecture, and clean code principles, demonstrating separation of concerns and scalable project organization.",
  duration: "50 minutes",
  architecture: "React Router + Project Structure + Design Principles",
  technologies: ["React Router", "File Organization", "Separation of Concerns", "Clean Architecture"],
  deliverable: "Multi-page application with Homepage, About, Contact pages and clean file structure",
  animation: "Architecture Flow Visualization",
  engagement: "File organization challenge, routing exploration",
  transition: "Shows how single components scale to full applications with proper structure",
  phases: [
    {
      title: "Plan: Application Architecture Blueprint",
      duration: "10 min",
      videoCount: 3,
      videos: [
        { title: "From Components to Applications", duration: "3 min", type: "Main teaching" },
        { title: "File Structure Principles", duration: "4 min", type: "Main teaching" },
        { title: "Separation of Concerns Strategy", duration: "3 min", type: "Main teaching" }
      ]
    },
    {
      title: "Setup: Multi-Page Foundation",
      duration: "12 min",
      videoCount: 3,
      videos: [
        { title: "React Router Setup & App.tsx Hub", duration: "4 min", type: "Main teaching" },
        { title: "Page Structure Planning", duration: "4 min", type: "Main teaching" },
        { title: "Component Organization", duration: "4 min", type: "Main teaching" }
      ]
    },
    {
      title: "Build: Pages & Clean Structure",
      duration: "18 min",
      videoCount: 4,
      videos: [
        { title: "Homepage Implementation", duration: "5 min", type: "Main teaching" },
        { title: "About & Contact Pages", duration: "4 min", type: "Main teaching" },
        { title: "Navigation & Layout Components", duration: "5 min", type: "Main teaching" },
        { title: "File Organization Cleanup", duration: "4 min", type: "Main teaching" }
      ]
    },
    {
      title: "Test: Architecture Validation",
      duration: "6 min",
      videoCount: 2,
      videos: [
        { title: "Routing & Navigation Testing", duration: "3 min", type: "Main teaching" },
        { title: "Code Organization Audit", duration: "3 min", type: "Main teaching" }
      ]
    },
    {
      title: "Release: Scalable Architecture",
      duration: "4 min",
      videoCount: 1,
      videos: [
        { title: "Architecture Documentation & M5 Preview", duration: "4 min", type: "Main teaching" }
      ]
    }
  ]
};

const milestones = [milestone1, milestone2, milestone3, milestone4];

export default function CourseStructure() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Course
              </Link>
            </Button>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground">
                Course Structure
              </h1>
              <p className="text-lg text-muted-foreground">
                Detailed breakdown of milestones, phases, and learning objectives
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="space-y-12">
          {milestones.map((milestone, milestoneIndex) => (
            <div key={milestoneIndex} className="space-y-8">
              {/* Milestone Overview */}
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl text-primary">{milestone.title}</CardTitle>
                      <CardDescription className="text-base mt-2 max-w-3xl">
                        {milestone.outcome}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {milestone.duration}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                          <Target className="h-4 w-4 text-primary" />
                          Architecture
                        </h4>
                        <p className="text-sm text-muted-foreground">{milestone.architecture}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {milestone.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Deliverable</h4>
                        <p className="text-sm text-muted-foreground">{milestone.deliverable}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Featured Animation</h4>
                        <p className="text-sm text-muted-foreground">{milestone.animation}</p>
                      </div>
                    </div>
                  </div>
                  
                  {(milestone as any).primer && (
                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">What you'll learn</h4>
                      <p className="text-sm text-muted-foreground">{(milestone as any).primer}</p>
                    </div>
                  )}
                  
                  {(milestone as any).prerequisites && (
                    <div className="mt-4 p-4 border border-primary/10 rounded-lg bg-primary/5">
                      <h4 className="font-medium text-foreground mb-2">Prerequisites</h4>
                      <p className="text-sm text-muted-foreground">{(milestone as any).prerequisites}</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Phases Breakdown */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Phase Breakdown</h2>
                
                <div className="grid gap-6">
                  {milestone.phases.map((phase, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg">
                              {index + 1}. {phase.title}
                            </CardTitle>
                            <div className="flex items-center gap-4 mt-2">
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {phase.duration}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Play className="h-3 w-3" />
                                {phase.videoCount} videos
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="grid gap-3">
                          {phase.videos.map((video, videoIndex) => (
                            <div 
                              key={videoIndex}
                              className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                  <span className="text-xs font-medium text-primary">
                                    {videoIndex + 1}
                                  </span>
                                </div>
                                <div>
                                  <h4 className="font-medium text-sm text-foreground">
                                    {video.title}
                                  </h4>
                                  <p className="text-xs text-muted-foreground">{video.type}</p>
                                </div>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {video.duration}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {milestoneIndex < milestones.length - 1 && (
                <div className="border-b border-border/50 pb-8" />
              )}
            </div>
          ))}

          {/* Prerequisites & Next Milestone */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• HTML, CSS, and JavaScript fundamentals</li>
                  <li>• Basic Git version control</li>
                  <li>• Development environment setup (Node.js, code editor)</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Next Milestone</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">M5 — Full-Stack Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Backend APIs, database integration, and production deployment workflow.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}