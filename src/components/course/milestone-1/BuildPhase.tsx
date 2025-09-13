import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Code, Layout, Square, Navigation, Puzzle } from "lucide-react";

interface BuildPhaseProps {
  onBack: () => void;
}

export function BuildPhase({ onBack }: BuildPhaseProps) {
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
          <Badge variant="secondary">Build Phase</Badge>
        </div>
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl font-semibold">
                Implement Core Components
              </CardTitle>
              <p className="text-muted-foreground">
                Build phase for creating your design system components with practical implementation
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>15 minutes total</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Video 3.1: Button Component System */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Video 3.1: Button Component System</h3>
                <p className="text-sm text-muted-foreground">3 minutes • Component composition and design tokens</p>
              </div>
            </div>

            <div className="space-y-6 pl-11">
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Step-by-Step Button Component Implementation</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We start by building the most fundamental interactive element—the button component. This hands-on implementation demonstrates how design tokens create consistency while maintaining flexibility for different use cases across your entire platform.
                </p>
                
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border space-y-3">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Live Code Walkthrough (90 seconds):</p>
                  <div className="bg-slate-800 p-3 rounded text-xs font-mono text-slate-300 overflow-x-auto">
                    <div className="space-y-1">
                      <div><span className="text-blue-400">const</span> <span className="text-green-400">buttonVariants</span> = <span className="text-yellow-400">cva</span>(</div>
                      <div className="ml-2"><span className="text-orange-400">"inline-flex items-center justify-center rounded-md"</span>,</div>
                      <div className="ml-2">{'{'} variants: {'{'} variant: {'{'}</div>
                      <div className="ml-4"><span className="text-purple-400">primary</span>: <span className="text-orange-400">"bg-primary text-primary-foreground hover:bg-primary/90"</span></div>
                      <div className="ml-4"><span className="text-purple-400">secondary</span>: <span className="text-orange-400">"bg-secondary text-secondary-foreground hover:bg-secondary/80"</span></div>
                      <div className="ml-2">{'}'} {'}'} {'}'})</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Design Token Integration (45 seconds):</p>
                    <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                      <li>• Map each variant to semantic tokens: `bg-primary`, `text-primary-foreground`</li>
                      <li>• Implement hover states with opacity modifiers: `hover:bg-primary/90`</li>
                      <li>• Use consistent spacing tokens: `px-4 py-2` for default sizing</li>
                      <li>• Apply focus states with ring utilities: `focus-visible:ring-2`</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium">Variant Demonstration (45 seconds):</p>
                    <div className="flex flex-wrap gap-2 p-3 bg-muted/30 rounded border">
                      <Button size="sm" variant="default">Primary</Button>
                      <Button size="sm" variant="secondary">Secondary</Button>
                      <Button size="sm" variant="destructive">Destructive</Button>
                      <Button size="sm" variant="ghost">Ghost</Button>
                      <Button size="sm" variant="outline">Outline</Button>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg border space-y-3">
                  <p className="text-sm font-medium">Advanced Composition Patterns (30 seconds):</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• <strong>Icon Integration:</strong> Learn the `asChild` pattern for flexible composition</p>
                    <p>• <strong>Loading States:</strong> Implement spinners and disabled states seamlessly</p>
                    <p>• <strong>Size Variants:</strong> Create sm, md, lg sizes with proportional scaling</p>
                    <p>• <strong>Interactive States:</strong> Handle pressed, focus, and disabled states properly</p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">Accessibility & Testing Checkpoint:</p>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 ml-4">
                    <li>• Tab navigation test: Ensure logical focus order</li>
                    <li>• Screen reader test: Verify ARIA labels and roles</li>
                    <li>• Color contrast validation: Meet WCAG AA standards</li>
                    <li>• Touch target sizing: Minimum 44px for mobile interactions</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    <strong>Real-World Impact:</strong> This button component will be reused 50+ times across your application. The 10 minutes spent perfecting it saves hours of inconsistent implementations later.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Video 3.2: Layout Foundation */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Layout className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Video 3.2: Layout Foundation</h3>
                <p className="text-sm text-muted-foreground">3 minutes • Responsive containers and grid systems</p>
              </div>
            </div>

            <div className="space-y-6 pl-11">
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Interactive Layout System Construction</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building the structural foundation that every component will rely on. We create adaptive layout systems that handle content gracefully across all device sizes while maintaining professional spacing and visual hierarchy.
                </p>
                
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border space-y-3">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Container Component Demo (60 seconds):</p>
                  <div className="bg-slate-800 p-3 rounded text-xs font-mono text-slate-300 overflow-x-auto">
                    <div className="space-y-1">
                      <div><span className="text-blue-400">const</span> <span className="text-green-400">Container</span> = {"({ variant = \"default\", children }) => {"}</div>
                      <div className="ml-2"><span className="text-blue-400">const</span> <span className="text-green-400">variants</span> = {"{"}</div>
                      <div className="ml-4"><span className="text-purple-400">narrow</span>: <span className="text-orange-400">"max-w-4xl"</span>,</div>
                      <div className="ml-4"><span className="text-purple-400">default</span>: <span className="text-orange-400">"max-w-6xl"</span>,</div>
                      <div className="ml-4"><span className="text-purple-400">wide</span>: <span className="text-orange-400">"max-w-7xl"</span></div>
                      <div className="ml-2">{"}"}</div>
                      <div className="ml-2"><span className="text-blue-400">return</span> <span className="text-yellow-400">&lt;div</span> <span className="text-green-400">className</span>=<span className="text-orange-400">{"{\`mx-auto px-4 ${variants[variant]}\`}"}</span><span className="text-yellow-400">&gt;</span></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Responsive Breakpoints (60 seconds):</p>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between p-2 bg-muted/30 rounded text-muted-foreground">
                        <span>Mobile</span><span>320px - 768px</span>
                      </div>
                      <div className="flex justify-between p-2 bg-muted/30 rounded text-muted-foreground">
                        <span>Tablet</span><span>768px - 1024px</span>
                      </div>
                      <div className="flex justify-between p-2 bg-muted/30 rounded text-muted-foreground">
                        <span>Desktop</span><span>1024px+</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium">Grid System (45 seconds):</p>
                    <div className="grid grid-cols-12 gap-1 h-16">
                      {Array.from({ length: 12 }, (_, i) => (
                        <div key={i} className="bg-primary/20 rounded text-xs flex items-center justify-center text-primary font-mono">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium">Spacing Scale (30 seconds):</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded"></div>
                        <span className="text-muted-foreground">2px - Minimal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-primary rounded"></div>
                        <span className="text-muted-foreground">16px - Default</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-4 bg-primary rounded"></div>
                        <span className="text-muted-foreground">32px - Section</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg border space-y-3">
                  <p className="text-sm font-medium">Live Layout Validation (25 seconds):</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• <strong>Content Overflow:</strong> Test with varying text lengths and image sizes</p>
                    <p>• <strong>Responsive Behavior:</strong> Verify smooth transitions between breakpoints</p>
                    <p>• <strong>Accessibility:</strong> Ensure sufficient color contrast and touch targets</p>
                    <p>• <strong>Performance:</strong> Monitor layout shift and rendering performance</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 p-3 rounded-lg border border-indigo-200 dark:border-indigo-800">
                  <p className="text-sm text-indigo-800 dark:text-indigo-200">
                    <strong>Layout Philosophy:</strong> Every pixel serves a purpose. Consistent spacing creates rhythm, proper hierarchy guides attention, and responsive behavior ensures universal accessibility.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Video 3.3: Card Component Variants */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Square className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Video 3.3: Card Component Variants</h3>
                <p className="text-sm text-muted-foreground">3 minutes • Reusable content containers with token-based styling</p>
              </div>
            </div>

            <div className="space-y-6 pl-11">
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Comprehensive Card System Development</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cards are the workhorses of modern interfaces. We build a flexible, token-driven card system that adapts to any content type while maintaining perfect visual consistency and professional polish across your entire application.
                </p>
                
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border space-y-3">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Card Component Structure (75 seconds):</p>
                  <div className="space-y-3">
                    <Card className="max-w-sm">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm">Product Feature Card</CardTitle>
                        <p className="text-xs text-muted-foreground">Interactive demo component</p>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">React</Badge>
                          <Badge variant="outline" className="text-xs">TypeScript</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Demonstrates token-based styling with consistent spacing, typography, and interaction patterns.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Token Integration (60 seconds):</p>
                    <div className="bg-slate-800 p-3 rounded text-xs font-mono text-slate-300 overflow-x-auto">
                      <div className="space-y-1">
                        <div><span className="text-green-400">border</span>: <span className="text-orange-400">"hsl(var(--border))"</span></div>
                        <div><span className="text-green-400">background</span>: <span className="text-orange-400">"hsl(var(--card))"</span></div>
                        <div><span className="text-green-400">foreground</span>: <span className="text-orange-400">"hsl(var(--card-foreground))"</span></div>
                        <div><span className="text-green-400">shadow</span>: <span className="text-orange-400">"var(--shadow-sm)"</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium">Variant Examples (45 seconds):</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 border rounded text-xs bg-card">
                        <div className="font-medium text-card-foreground">Default</div>
                        <div className="text-muted-foreground">Standard card</div>
                      </div>
                      <div className="p-2 border-2 border-dashed rounded text-xs">
                        <div className="font-medium">Outlined</div>
                        <div className="text-muted-foreground">Emphasis variant</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg border space-y-3">
                  <p className="text-sm font-medium">Advanced Card Patterns (40 seconds):</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                    <div>
                      <p><strong>Hover Interactions:</strong> Subtle elevation changes and border effects</p>
                      <p><strong>Loading States:</strong> Skeleton placeholders and progressive content loading</p>
                    </div>
                    <div>
                      <p><strong>Action Cards:</strong> Click handlers and keyboard navigation support</p>
                      <p><strong>Media Cards:</strong> Image optimization and responsive aspect ratios</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    <strong>Card Mastery:</strong> Great cards feel effortless to users but require careful attention to spacing, typography hierarchy, and interaction feedback. Every detail matters.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Video 3.4: Navigation Structure */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Navigation className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Video 3.4: Navigation Structure</h3>
                <p className="text-sm text-muted-foreground">3 minutes • Mobile-first responsive navigation patterns</p>
              </div>
            </div>

            <div className="space-y-6 pl-11">
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Mobile-First Navigation System Build</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Navigation determines user success in your application. We build a comprehensive navigation system that seamlessly adapts from mobile hamburger patterns to desktop horizontal layouts, prioritizing usability and accessibility throughout.
                </p>
                
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border space-y-3">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Navigation Header Implementation (90 seconds):</p>
                  <div className="bg-slate-800 p-3 rounded text-xs font-mono text-slate-300 overflow-x-auto">
                    <div className="space-y-1">
                      <div><span className="text-yellow-400">&lt;nav</span> <span className="text-green-400">className</span>=<span className="text-orange-400">"flex items-center justify-between p-4"</span><span className="text-yellow-400">&gt;</span></div>
                      <div className="ml-2"><span className="text-yellow-400">&lt;Logo</span> <span className="text-green-400">className</span>=<span className="text-orange-400">"h-8 w-auto"</span> <span className="text-yellow-400">/&gt;</span></div>
                      <div className="ml-2"><span className="text-yellow-400">&lt;div</span> <span className="text-green-400">className</span>=<span className="text-orange-400">"hidden md:flex items-center space-x-6"</span><span className="text-yellow-400">&gt;</span></div>
                      <div className="ml-4"><span className="text-yellow-400">&lt;NavLinks</span> <span className="text-green-400">activeRoute</span>=<span className="text-orange-400">{"\"/{pathname}\""}</span> <span className="text-yellow-400">/&gt;</span></div>
                      <div className="ml-2"><span className="text-yellow-400">&lt;/div&gt;</span></div>
                      <div className="ml-2"><span className="text-yellow-400">&lt;MobileMenuButton</span> <span className="text-green-400">className</span>=<span className="text-orange-400">"md:hidden"</span> <span className="text-yellow-400">/&gt;</span></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Mobile Menu Animation (60 seconds):</p>
                    <div className="bg-muted/30 p-3 rounded border">
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between items-center p-2 bg-background rounded">
                          <span>☰ Menu</span>
                          <span className="text-muted-foreground">Closed State</span>
                        </div>
                        <div className="h-px bg-border"></div>
                        <div className="space-y-1 pl-4 text-muted-foreground">
                          <div>→ Home</div>
                          <div>→ Products</div>
                          <div>→ About</div>
                          <div>→ Contact</div>
                        </div>
                        <p className="text-xs text-muted-foreground">Slide-in animation with backdrop blur</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium">Active State Indicators (30 seconds):</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 bg-primary/10 rounded text-xs border-l-2 border-primary">
                        <span className="font-medium text-primary">Home</span>
                        <span className="text-muted-foreground">Current</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded text-xs">
                        <span>Products</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded text-xs">
                        <span>About</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg border space-y-3">
                  <p className="text-sm font-medium">Accessibility Implementation (30 seconds):</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                    <div>
                      <p>• <strong>Keyboard Navigation:</strong> Tab order and Enter/Space handling</p>
                      <p>• <strong>Screen Readers:</strong> ARIA labels and landmarks</p>
                    </div>
                    <div>
                      <p>• <strong>Focus Management:</strong> Visible focus indicators</p>
                      <p>• <strong>Mobile Touch:</strong> 44px minimum touch targets</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 p-3 rounded-lg border border-orange-200 dark:border-orange-800">
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    <strong>Navigation Truth:</strong> Users form their first impression of your app's usability within 3 seconds. Clear, predictable navigation is the foundation of user confidence and engagement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Video 3.5: Component Integration */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Puzzle className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Video 3.5: Component Integration</h3>
                <p className="text-sm text-muted-foreground">3 minutes • Cohesive interface assembly and design system validation</p>
              </div>
            </div>

            <div className="space-y-6 pl-11">
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Complete System Integration & Validation</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The moment of truth—bringing all components together into a cohesive, professional interface. We systematically integrate buttons, layouts, cards, and navigation into real page compositions while validating design system consistency.
                </p>
                
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border space-y-3">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Live Page Composition (120 seconds):</p>
                  <div className="space-y-3">
                    <div className="bg-background border rounded p-3 space-y-2">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div className="h-4 w-16 bg-primary rounded"></div>
                        <div className="flex gap-2">
                          <div className="h-3 w-12 bg-muted rounded"></div>
                          <div className="h-3 w-12 bg-muted rounded"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded flex items-center justify-center text-xs text-muted-foreground">
                          Hero Section
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-16 bg-card border rounded flex items-center justify-center text-xs">Card 1</div>
                          <div className="h-16 bg-card border rounded flex items-center justify-center text-xs">Card 2</div>
                          <div className="h-16 bg-card border rounded flex items-center justify-center text-xs">Card 3</div>
                        </div>
                        <div className="flex gap-2 justify-center">
                          <Button size="sm" variant="default">Primary</Button>
                          <Button size="sm" variant="outline">Secondary</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Component Validation Checklist (75 seconds):</p>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                        <span>✓ Components render correctly</span><span>Pass</span>
                      </div>
                      <div className="flex justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                        <span>✓ Design tokens applied</span><span>Pass</span>
                      </div>
                      <div className="flex justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                        <span>✓ Interactive states work</span><span>Pass</span>
                      </div>
                      <div className="flex justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                        <span>✓ Responsive on all devices</span><span>Pass</span>
                      </div>
                      <div className="flex justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                        <span>✓ Basic accessibility compliance</span><span>Pass</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg border space-y-3">
                  <p className="text-sm font-medium">Advanced Integration Patterns (25 seconds):</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• <strong>Compound Components:</strong> Button groups, form sections, card collections</p>
                    <p>• <strong>Theme Integration:</strong> Dark/light mode switching with consistent tokens</p>
                    <p>• <strong>State Management:</strong> Loading states, error boundaries, data validation</p>
                    <p>• <strong>Animation Choreography:</strong> Coordinated transitions between components</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <p className="text-sm text-emerald-800 dark:text-emerald-200">
                    <strong>Integration Success:</strong> When components feel like they belong together naturally, you've achieved true design system maturity. Users should never question the interface—only accomplish their goals.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Phase Completion Summary */}
          <section className="border-t pt-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Phase Completion</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Upon completing this build phase, you will have implemented a complete component system with buttons, layouts, cards, navigation, and proper integration patterns. Your design system foundation is now ready for real-world application development, with all components following consistent patterns and accessibility standards.
              </p>
              
              <div className="bg-muted/30 p-4 rounded-lg border">
                <p className="text-sm font-medium mb-2">Ready for Next Phase:</p>
                <p className="text-sm text-muted-foreground">
                  With your core components implemented, you're prepared to move into the validation phase where we'll test component behavior, gather user feedback, and refine the system based on real usage patterns.
                </p>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}