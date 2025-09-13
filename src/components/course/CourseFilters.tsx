import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface CourseFiltersProps {
  selectedMilestone: string;
  selectedPhase: string;
  onMilestoneChange: (value: string) => void;
  onPhaseChange: (value: string) => void;
}

const milestones = [
  { value: "all", label: "All Milestones" },
  { value: "m1", label: "M1 — Platform Signature Ready" },
  { value: "m2", label: "M2 — User Interface Complete" },
  { value: "m3", label: "M3 — Production Deployment Ready" },
];

const phases = [
  { value: "all", label: "All Phases" },
  { value: "plan", label: "Plan" },
  { value: "setup", label: "Setup" },
  { value: "build", label: "Build" },
  { value: "test", label: "Test" },
  { value: "release", label: "Release" },
];

export function CourseFilters({ 
  selectedMilestone, 
  selectedPhase, 
  onMilestoneChange, 
  onPhaseChange 
}: CourseFiltersProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
      <div className="flex flex-wrap gap-3">
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">Milestone</label>
          <Select value={selectedMilestone} onValueChange={onMilestoneChange}>
            <SelectTrigger className="w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {milestones.map((milestone) => (
                <SelectItem key={milestone.value} value={milestone.value}>
                  {milestone.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">Phase</label>
          <Select value={selectedPhase} onValueChange={onPhaseChange}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {phases.map((phase) => (
                <SelectItem key={phase.value} value={phase.value}>
                  {phase.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Active filters:</span>
        {selectedMilestone !== "all" && (
          <Badge variant="secondary" className="font-medium">
            {milestones.find(m => m.value === selectedMilestone)?.label}
          </Badge>
        )}
        {selectedPhase !== "all" && (
          <Badge variant="outline" className="font-medium">
            {phases.find(p => p.value === selectedPhase)?.label}
          </Badge>
        )}
      </div>
    </div>
  );
}