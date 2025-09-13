import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Settings, Palette, Code, CheckCircle } from "lucide-react";

interface SetupPhaseProps {
  onBack: () => void;
}

export function SetupPhase({ onBack }: SetupPhaseProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Course
        </Button>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline">M1 — Platform Signature Ready</Badge>
          <Badge variant="secondary">Setup Phase</Badge>
        </div>
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl font-semibold">
                Configure Design System
              </CardTitle>
              <p className="text-muted-foreground">
                Transform your planning decisions into technical implementation
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>12 minutes total</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-12">
          {/* Video 2.1: Vite + Tailwind Foundation (3 min) */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Settings className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Video 2.1: Vite + Tailwind Foundation</h3>
                <p className="text-sm text-muted-foreground">Install and configure the development environment</p>
              </div>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>
            
            <div className="pl-13 space-y-8">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  Welcome to the technical implementation of your design system. In this video, we'll build the foundational 
                  infrastructure that transforms your design decisions into working code. Think of this as constructing the 
                  engine that will power your entire application's visual consistency.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-5 space-y-4">
                    <h4 className="font-semibold text-primary">Why Vite + Tailwind is the Perfect Foundation</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h5 className="font-medium">Development Speed</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>Hot Module Replacement in under 50ms</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>TypeScript compilation without bundling</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>Instant server startup regardless of project size</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h5 className="font-medium">Production Optimization</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>Automatic tree-shaking and dead code elimination</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>CSS purging removes unused Tailwind classes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>Optimized chunk splitting for faster loading</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-5 space-y-4">
                    <h4 className="font-semibold">Step-by-Step Installation Process</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">1. Create New Vite Project</h5>
                        <div className="bg-muted/50 rounded p-3 font-mono text-sm">
                          npm create vite@latest my-design-system -- --template react-ts
                        </div>
                        <p className="text-xs text-muted-foreground">
                          This creates a React + TypeScript project with optimized build configuration
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">2. Install Tailwind CSS</h5>
                        <div className="bg-muted/50 rounded p-3 font-mono text-sm">
                          npm install -D tailwindcss postcss autoprefixer
                        </div>
                        <p className="text-xs text-muted-foreground">
                          PostCSS enables advanced CSS processing and future-proofing
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">3. Generate Configuration Files</h5>
                        <div className="bg-muted/50 rounded p-3 font-mono text-sm">
                          npx tailwindcss init -p
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Creates tailwind.config.js and postcss.config.js with sensible defaults
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-5 space-y-4">
                    <h4 className="font-semibold">Expected Project Structure</h4>
                    <div className="bg-muted/50 rounded p-4">
                      <pre className="font-mono text-sm text-muted-foreground">
{`my-design-system/
├── public/
├── src/
│   ├── components/
│   │   └── ui/           # Reusable UI components
│   ├── lib/
│   │   └── utils.ts      # Helper functions
│   ├── styles/
│   │   └── globals.css   # Design tokens & global styles
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.ts    # Design system configuration
├── vite.config.ts        # Build optimization
└── package.json`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 space-y-4">
                <h4 className="font-semibold text-accent-foreground">Pro Tips for Success</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h5 className="font-medium text-sm">Development Workflow</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Use <code className="bg-muted px-1 rounded text-xs">npm run dev</code> for development</li>
                      <li>• Enable VS Code Tailwind IntelliSense extension</li>
                      <li>• Install Prettier Tailwind plugin for consistent formatting</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium text-sm">Common Pitfalls to Avoid</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Don't skip the TypeScript template</li>
                      <li>• Always use the <code className="bg-muted px-1 rounded text-xs">-p</code> flag with Tailwind init</li>
                      <li>• Ensure Node.js version 16+ for optimal performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Transition */}
            <div className="border-l-2 border-dashed border-primary/30 pl-6 ml-5">
              <p className="text-sm text-muted-foreground italic">
                Foundation complete. Next, we'll configure Tailwind to understand our design tokens...
              </p>
            </div>
          </section>

          {/* Video 2.2: Design Tokens in tailwind.config.ts (3 min) */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Code className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Video 2.2: Design Tokens in tailwind.config.ts</h3>
                <p className="text-sm text-muted-foreground">Set up your semantic color palette and theme extensions</p>
              </div>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>
            
            <div className="pl-13 space-y-8">
              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-lg p-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  This is the bridge between your design decisions and working code. We're transforming Tailwind from a 
                  utility framework into a semantic design system that speaks your application's language. No more 
                  guessing which blue to use—your tokens will tell the story.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-5 space-y-4">
                    <h4 className="font-semibold text-secondary-foreground">Understanding the Token Architecture</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h5 className="font-medium">Semantic Naming Strategy</h5>
                        <div className="bg-muted/50 rounded p-3 space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Instead of:</span>
                            <code className="text-red-600">bg-blue-500</code>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">We use:</span>
                            <code className="text-green-600">bg-primary</code>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Instead of:</span>
                            <code className="text-red-600">text-gray-600</code>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">We use:</span>
                            <code className="text-green-600">text-muted-foreground</code>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h5 className="font-medium">Benefits of This Approach</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                            <span>Consistent design decisions across teams</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                            <span>Instant theme switching capability</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                            <span>Self-documenting component code</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                            <span>Easy brand updates without code changes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-5 space-y-4">
                    <h4 className="font-semibold">Complete tailwind.config.ts Setup</h4>
                    <div className="bg-muted/50 rounded p-4 overflow-x-auto">
                      <pre className="text-xs font-mono text-muted-foreground">
{`import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Core brand colors
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        
        // Secondary actions and backgrounds
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        
        // Accent colors for highlights
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        
        // Neutral colors for text and backgrounds
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        
        // Interface colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        
        // State colors
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}

export default config`}
                      </pre>
                    </div>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-5 space-y-4">
                    <h4 className="font-semibold">Key Configuration Decisions</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">HSL with CSS Variables</h5>
                        <p className="text-sm text-muted-foreground">
                          Using <code className="bg-muted px-1 rounded text-xs">hsl(var(--primary))</code> instead of direct HSL values 
                          allows us to change colors dynamically and apply opacity modifiers like <code className="bg-muted px-1 rounded text-xs">bg-primary/20</code>.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Class-based Dark Mode</h5>
                        <p className="text-sm text-muted-foreground">
                          <code className="bg-muted px-1 rounded text-xs">darkMode: "class"</code> enables manual control over theme switching, 
                          perfect for user preference toggles rather than system-dependent switching.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Foreground Pairing</h5>
                        <p className="text-sm text-muted-foreground">
                          Every color has a corresponding <code className="bg-muted px-1 rounded text-xs">-foreground</code> variant ensuring 
                          proper contrast ratios and accessibility compliance across all color combinations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 space-y-4">
                <h4 className="font-semibold text-accent-foreground">Validation Checkpoint</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  After saving your configuration, test these classes to ensure everything is working:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-card border rounded p-3 space-y-2">
                    <h5 className="font-medium text-xs">Test Commands</h5>
                    <div className="space-y-1 text-xs font-mono">
                      <div><code>bg-primary text-primary-foreground</code></div>
                      <div><code>bg-secondary/50 text-foreground</code></div>
                      <div><code>border-border rounded-lg</code></div>
                    </div>
                  </div>
                  <div className="bg-card border rounded p-3 space-y-2">
                    <h5 className="font-medium text-xs">Expected Result</h5>
                    <p className="text-xs text-muted-foreground">
                      VS Code should show IntelliSense suggestions for your custom colors, 
                      and the development server should restart without errors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transition */}
            <div className="border-l-2 border-dashed border-secondary/30 pl-6 ml-5">
              <p className="text-sm text-muted-foreground italic">
                Tailwind configuration complete. Now we'll define the actual color values that bring our tokens to life...
              </p>
            </div>
          </section>

          {/* Video 2.3: Semantic Variables in index.css (3 min) */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Palette className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Video 2.3: Semantic Variables in index.css</h3>
                <p className="text-sm text-muted-foreground">Create your CSS custom properties and dark mode support</p>
              </div>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>
            
            <div className="pl-13 space-y-8">
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg p-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  This is where your design system comes to life. We're creating the CSS custom properties that serve as the 
                  single source of truth for your entire application. Think of this as the DNA of your design—change these 
                  values, and every component across your application automatically inherits the updates.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-5 space-y-4">
                    <h4 className="font-semibold text-accent-foreground">CSS Custom Properties Strategy</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Unlike traditional CSS variables, our approach uses HSL color space without the wrapper function. 
                      This architectural decision unlocks powerful capabilities like automatic opacity handling and 
                      mathematical color manipulations.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h5 className="font-medium">Why HSL Format?</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Intuitive color relationships (hue wheel)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Easy lightness adjustments for variations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Automatic opacity modifier support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span>Better accessibility calculations</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h5 className="font-medium">Variable Naming Convention</h5>
                        <div className="bg-muted/50 rounded p-3 space-y-2 text-sm">
                          <div><code>--primary</code> → Brand color</div>
                          <div><code>--primary-foreground</code> → Text on primary</div>
                          <div><code>--muted</code> → Subtle backgrounds</div>
                          <div><code>--muted-foreground</code> → Secondary text</div>
                          <div><code>--destructive</code> → Error states</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-5 space-y-4">
                    <h4 className="font-semibold">Complete index.css Implementation</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Light Mode Foundation</h5>
                        <div className="bg-muted/50 rounded p-4 overflow-x-auto">
                          <pre className="text-xs font-mono">
{`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Core colors */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    
    /* Brand colors */
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    
    /* Secondary colors */
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    
    /* Accent colors */
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    
    /* Neutral colors */
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    
    /* Interface colors */
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    
    /* Component colors */
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    
    /* State colors */
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    
    /* Border radius */
    --radius: 0.5rem;
  }
}`}
                          </pre>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Dark Mode Overrides</h5>
                        <div className="bg-muted/50 rounded p-4 overflow-x-auto">
                          <pre className="text-xs font-mono">
{`  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 84% 4.9%;
    
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
  }
}

/* Global styles */
* {
  border-color: hsl(var(--border));
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-5 space-y-4">
                    <h4 className="font-semibold">Understanding Color Relationships</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Color Anatomy</h5>
                        <div className="bg-muted/50 rounded p-3 text-xs">
                          <div><strong>221.2</strong> → Hue (blue family)</div>
                          <div><strong>83.2%</strong> → Saturation (vibrant)</div>
                          <div><strong>53.3%</strong> → Lightness (medium)</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Contrast Pairing</h5>
                        <div className="bg-muted/50 rounded p-3 text-xs">
                          <div>Primary: 53.3% lightness</div>
                          <div>Primary-fg: 98% lightness</div>
                          <div><strong>Ratio:</strong> High contrast</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Usage Examples</h5>
                        <div className="bg-muted/50 rounded p-3 text-xs">
                          <div><code>bg-primary/20</code></div>
                          <div><code>border-primary/50</code></div>
                          <div><code>text-primary</code></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
                <h4 className="font-semibold text-primary">Color Psychology & Accessibility</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h5 className="font-medium">Accessibility Considerations</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Minimum 4.5:1 contrast ratio for normal text</li>
                      <li>• 3:1 ratio for large text and UI components</li>
                      <li>• Foreground pairs ensure automatic compliance</li>
                      <li>• HSL format enables programmatic contrast checking</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h5 className="font-medium">Testing Your Variables</h5>
                    <div className="bg-card border rounded p-3 space-y-2 text-sm">
                      <div>1. Save your index.css file</div>
                      <div>2. Check browser dev tools for CSS variables</div>
                      <div>3. Toggle dark mode in your app</div>
                      <div>4. Verify smooth color transitions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transition */}
            <div className="border-l-2 border-dashed border-accent/30 pl-6 ml-5">
              <p className="text-sm text-muted-foreground italic">
                Color foundation established. Time to validate our complete design system implementation...
              </p>
            </div>
          </section>

          {/* Video 2.4: Design System Testing (3 min) */}
          <section className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Video 2.4: Design System Testing</h3>
                <p className="text-sm text-muted-foreground">Validate your setup and create a component preview</p>
              </div>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>
            
            <div className="pl-13 space-y-8">
              <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-lg p-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  Testing is where confidence meets reality. Before we build complex components, we need to validate that 
                  our design system foundation is bulletproof. This systematic validation approach saves countless hours 
                  of debugging and ensures that every component we build will inherit our design decisions flawlessly.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-card border rounded-lg p-5 space-y-4">
                    <h4 className="font-semibold text-green-600">Comprehensive Validation Strategy</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll create a systematic test component that exercises every aspect of our design system, 
                      from basic color tokens to complex interactive states. This component serves as both a validation 
                      tool and living documentation.
                    </p>
                    
                    <div className="bg-muted/50 rounded p-4 overflow-x-auto">
                      <pre className="text-xs font-mono">
{`// src/components/DesignSystemTest.tsx
import { useState } from 'react'

export function DesignSystemTest() {
  const [isDark, setIsDark] = useState(false)
  
  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-8 space-y-8">
      {/* Theme Toggle */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Design System Test</h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg 
                     hover:bg-primary/90 transition-colors duration-200"
        >
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Color Palette Test */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Color Tokens</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-primary text-primary-foreground p-4 rounded-lg">
            <h3 className="font-semibold">Primary</h3>
            <p className="text-sm opacity-90">Brand color</p>
          </div>
          <div className="bg-secondary text-secondary-foreground p-4 rounded-lg">
            <h3 className="font-semibold">Secondary</h3>
            <p className="text-sm opacity-90">Supporting color</p>
          </div>
          <div className="bg-accent text-accent-foreground p-4 rounded-lg">
            <h3 className="font-semibold">Accent</h3>
            <p className="text-sm opacity-90">Highlight color</p>
          </div>
          <div className="bg-muted text-muted-foreground p-4 rounded-lg">
            <h3 className="font-semibold">Muted</h3>
            <p className="text-sm">Subtle backgrounds</p>
          </div>
        </div>
      </section>

      {/* Opacity Variations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Opacity Modifiers</h2>
        <div className="space-y-2">
          {[100, 80, 60, 40, 20, 10].map(opacity => (
            <div
              key={opacity}
              className={\`bg-primary/\${opacity} text-foreground p-3 rounded\`}
            >
              bg-primary/\${opacity} - {opacity}% opacity
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}`}
                      </pre>
                    </div>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-5 space-y-4">
                    <h4 className="font-semibold">Validation Checklist & Metrics</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h5 className="font-medium text-green-600">Functional Validation</h5>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>All CSS custom properties resolve correctly</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>Dark mode transitions are smooth (&lt;300ms)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>Opacity modifiers work across all tokens</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>TypeScript IntelliSense shows custom classes</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>Hot reload maintains theme state</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h5 className="font-medium">Performance Benchmarks</h5>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span>Development server startup:</span>
                            <span className="text-green-600 font-medium">&lt; 2 seconds</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Hot Module Replacement:</span>
                            <span className="text-green-600 font-medium">&lt; 100ms</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Theme toggle response:</span>
                            <span className="text-green-600 font-medium">&lt; 50ms</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>CSS compilation:</span>
                            <span className="text-green-600 font-medium">&lt; 500ms</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Initial bundle size:</span>
                            <span className="text-green-600 font-medium">&lt; 150kb</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-5 space-y-4">
                    <h4 className="font-semibold">Accessibility Validation</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h5 className="font-medium">Contrast Ratio Testing</h5>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div>• Primary on Primary-foreground: 7.2:1 ✓</div>
                          <div>• Secondary on Secondary-foreground: 6.8:1 ✓</div>
                          <div>• Muted-foreground on Background: 4.7:1 ✓</div>
                          <div>• All combinations exceed WCAG AA standards</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h5 className="font-medium">Browser Compatibility</h5>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div>• Chrome/Edge: Full CSS variables support</div>
                          <div>• Firefox: Native HSL opacity handling</div>
                          <div>• Safari: CSS custom properties work</div>
                          <div>• Mobile browsers: Responsive design ready</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-5 space-y-4">
                    <h4 className="font-semibold">Developer Experience Validation</h4>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">IDE Integration</h5>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>✓ Tailwind IntelliSense autocomplete</li>
                            <li>✓ CSS variable hover previews</li>
                            <li>✓ Error highlighting for invalid classes</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">Build Process</h5>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>✓ Unused CSS automatic purging</li>
                            <li>✓ Production optimization</li>
                            <li>✓ Source map generation</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">Documentation</h5>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>✓ Token usage examples</li>
                            <li>✓ Component composition patterns</li>
                            <li>✓ Best practices guide</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-6">
                <h4 className="font-semibold text-primary text-lg">Setup Phase Complete: Foundation Validated</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Outstanding work! You've successfully built and validated a production-ready design system foundation. 
                  Your development environment is optimized, your design tokens are working flawlessly, and you have the 
                  infrastructure to build scalable, consistent user interfaces. Every component you create from this point 
                  forward will automatically inherit your design decisions.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border rounded-lg p-4 space-y-3">
                    <h5 className="font-semibold text-sm">Technical Achievements</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>✓ Vite + Tailwind CSS configured for optimal performance</li>
                      <li>✓ Semantic design tokens with HSL color space</li>
                      <li>✓ Dark mode architecture ready for implementation</li>
                      <li>✓ Type-safe development with IntelliSense support</li>
                      <li>✓ Production build pipeline optimized</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-4 space-y-3">
                    <h5 className="font-semibold text-sm">What's Next</h5>
                    <p className="text-sm text-muted-foreground">
                      In the Build phase, we'll create your core component library using this foundation. 
                      Every button, card, and layout component will automatically use your design tokens, 
                      ensuring perfect consistency across your application.
                    </p>
                    <div className="bg-muted/50 rounded p-2 text-xs">
                      <strong>Next:</strong> Build Phase - Core Component Library
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}