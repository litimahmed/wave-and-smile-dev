import { useState } from "react";
import { CourseHeader } from "./CourseHeader";
import { CourseFilters } from "./CourseFilters";
import { PostGrid } from "./PostGrid";

export function CourseLayout() {
  const [selectedMilestone, setSelectedMilestone] = useState<string>("all");
  const [selectedPhase, setSelectedPhase] = useState<string>("all");

  return (
    <div className="min-h-screen bg-background">
      <CourseHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <CourseFilters
            selectedMilestone={selectedMilestone}
            selectedPhase={selectedPhase}
            onMilestoneChange={setSelectedMilestone}
            onPhaseChange={setSelectedPhase}
          />
          
          <PostGrid
            selectedMilestone={selectedMilestone}
            selectedPhase={selectedPhase}
          />
        </div>
      </main>
    </div>
  );
}