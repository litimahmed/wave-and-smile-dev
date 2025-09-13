import { ArrowLeft, Settings, Zap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface SetupPhaseProps {
  onBack: () => void;
}

export function SetupPhase({ onBack }: SetupPhaseProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Posts
        </Button>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Configure Application Architecture</h1>
          <p className="text-xl text-muted-foreground">
            Set up React fundamentals for interactive component development
          </p>
        </div>
      </div>

      <Alert className="mb-6">
        <BookOpen className="h-4 w-4" />
        <AlertDescription>
          <strong>React Primer:</strong> This milestone assumes basic React knowledge (components, JSX, props). 
          If you're new to React, we recommend completing our React fundamentals primer first.
        </AlertDescription>
      </Alert>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Development Environment
            </CardTitle>
            <CardDescription>
              Configure your workspace for interactive development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• React Developer Tools setup</li>
              <li>• Hot reloading configuration</li>
              <li>• Component debugging tools</li>
              <li>• State inspection utilities</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              React Fundamentals Review
            </CardTitle>
            <CardDescription>
              Quick review of essential React concepts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• useState and useEffect hooks</li>
              <li>• Event handling patterns</li>
              <li>• Props drilling and lifting state</li>
              <li>• Component composition patterns</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Project Structure Enhancement</CardTitle>
            <CardDescription>
              Organize your codebase for interactive component development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              <div>src/</div>
              <div>├── components/</div>
              <div>│   ├── ui/ (M1 design system)</div>
              <div>│   └── interactive/ (M2 components)</div>
              <div>├── hooks/ (custom React hooks)</div>
              <div>├── utils/ (helper functions)</div>
              <div>└── types/ (TypeScript definitions)</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}