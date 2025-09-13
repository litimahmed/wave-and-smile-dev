import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function CourseHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-start mb-8">
          <div className="space-y-4 flex-1">
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Building Modern Web Apps
            </h1>
            <h2 className="text-xl lg:text-2xl font-medium text-muted-foreground">
              with React and Vite
            </h2>
          </div>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Learn to build production-ready applications step by step. Each milestone takes you from concept to deployment, 
              teaching you the skills that matter in real projects.
            </p>
          </div>
          
          <div className="flex items-center gap-3 ml-6">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button asChild variant="outline">
              <Link to="/structure" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Course Structure
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}