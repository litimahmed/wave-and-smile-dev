import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Sparkles, Users, Target, Lightbulb } from "lucide-react";

interface PlanningPhaseProps {
  onBack: () => void;
}

export function PlanningPhase({ onBack }: PlanningPhaseProps) {
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
          <Badge variant="secondary">Plan Phase</Badge>
        </div>
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl font-semibold">
                Define the Platform Signature
              </CardTitle>
              <p className="text-muted-foreground">
                Planning phase for establishing your design system foundation
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>12 minutes total • 4 videos</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Section 1: Design System Foundation */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">1. Design System Foundation</h3>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>
            
            <div className="pl-11 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Before we write a single line of code, we need to establish the visual DNA of our application. 
                Think of this as creating the personality of your app—every color, font, and spacing decision 
                will stem from the choices we make here. This isn't just about making things look pretty; 
                it's about creating a systematic approach that will save us countless hours and prevent 
                design debt as our application grows.
              </p>
              
              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">The Cost of Inconsistency</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Imagine you're six months into your project. You've built dozens of components, 
                  each with slightly different button styles, varying spacing, and inconsistent colors. 
                  A simple request like "make all buttons 2px more rounded" becomes a nightmare of 
                  find-and-replace across your entire codebase.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                    <h5 className="font-medium text-destructive mb-2">Without Design System</h5>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• 15 different shades of blue across components</li>
                      <li>• Inconsistent spacing (8px, 12px, 16px, 20px...)</li>
                      <li>• Mixed font weights and sizes</li>
                      <li>• Developers making ad-hoc design decisions</li>
                      <li>• Design changes require touching every file</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h5 className="font-medium text-primary mb-2">With Design System</h5>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• One primary blue, systematically applied</li>
                      <li>• Consistent 8px spacing scale (8, 16, 24, 32...)</li>
                      <li>• Defined typography hierarchy</li>
                      <li>• Developers use predefined tokens</li>
                      <li>• Global changes update everything instantly</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">The Three Pillars of Design Systems</h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary/30 pl-4 space-y-2">
                    <h5 className="font-medium">1. Consistency</h5>
                    <p className="text-sm text-muted-foreground">
                      When users see a blue button, they should know exactly what it does, regardless of 
                      where it appears in your app. Consistency builds trust and reduces cognitive load. 
                      Users don't have to relearn your interface with every interaction.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-secondary/30 pl-4 space-y-2">
                    <h5 className="font-medium">2. Scalability</h5>
                    <p className="text-sm text-muted-foreground">
                      Your design system should grow with your application. When you add new features, 
                      they should feel like natural extensions of your existing interface. This means 
                      planning for components you haven't built yet and tokens you haven't defined.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-accent/30 pl-4 space-y-2">
                    <h5 className="font-medium">3. Efficiency</h5>
                    <p className="text-sm text-muted-foreground">
                      A good design system acts as a shortcut. Instead of debating button styles for 
                      every new feature, you reach for your pre-built button component. Instead of 
                      picking colors from scratch, you use your semantic tokens. Time saved on 
                      decisions is time gained for building features.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border rounded-lg p-4 space-y-3">
                <h4 className="font-medium">Real-World Example</h4>
                <p className="text-sm text-muted-foreground">
                  Take Stripe's design system. Every button, form field, and piece of text follows 
                  the same visual language. Whether you're on their homepage, in the dashboard, or 
                  reading documentation, you're never confused about what's clickable, what's important, 
                  or how to complete a task. That's the power of systematic design thinking.
                </p>
              </div>
              
              <p className="text-sm italic text-muted-foreground border-l-2 border-primary/20 pl-4">
                💡 <strong>Transition Point:</strong> Now that we understand why design systems are crucial 
                for building scalable applications, let's dive into the specific color and typography 
                decisions that will form the foundation of our visual language. These choices will 
                influence every component we build.
              </p>
            </div>
          </section>

          {/* Section 2: Color & Typography Strategy */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">2. Color & Typography Strategy</h3>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>

            <div className="pl-11 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Color and typography are the twin pillars of visual communication. Together, they create 
                the personality and voice of your application. A strategic approach to both ensures 
                your interface communicates hierarchy, guides user attention, and reinforces your 
                brand identity at every touchpoint.
              </p>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Strategic Color Selection</h4>
                  <p className="text-sm text-muted-foreground">
                    Your color palette should tell a story. Each color serves a specific purpose in guiding 
                    user behavior and creating emotional connections with your interface.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h5 className="font-medium text-primary">Primary Palette</h5>
                      <p className="text-sm text-muted-foreground">
                        Your primary color should embody your brand's energy and be used sparingly for 
                        the most important actions—think call-to-action buttons and key navigation elements.
                      </p>
                      <div className="bg-primary rounded-md p-3 text-primary-foreground font-bold text-center">
                        Primary Action
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-medium text-secondary-foreground">Supporting Colors</h5>
                      <p className="text-sm text-muted-foreground">
                        Secondary and accent colors provide visual rhythm and help organize information 
                        hierarchy without competing with your primary brand color.
                      </p>
                      <div className="bg-secondary rounded-md p-3 text-secondary-foreground font-bold text-center">
                        Secondary Element
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Typography Hierarchy</h4>
                  <p className="text-sm text-muted-foreground">
                    Typography creates order in chaos. A well-designed type scale guides users through 
                    your content, making information scannable and digestible.
                  </p>

                  <div className="space-y-4 bg-muted/30 rounded-lg p-6">
                    <div className="space-y-2">
                      <h5 className="text-2xl font-bold">H1 - Page Headlines</h5>
                      <p className="text-xs text-muted-foreground">2rem / 32px - Bold - Used for main page titles</p>
                    </div>
                    <div className="space-y-2">
                      <h6 className="text-xl font-semibold">H2 - Section Headers</h6>
                      <p className="text-xs text-muted-foreground">1.5rem / 24px - Semibold - Used for major sections</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-base font-medium">H3 - Subsection Titles</p>
                      <p className="text-xs text-muted-foreground">1rem / 16px - Medium - Used for subsections</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm">Body Text - Main Content</p>
                      <p className="text-xs text-muted-foreground">0.875rem / 14px - Regular - Used for body content</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">Caption Text - Supporting Info</p>
                      <p className="text-xs text-muted-foreground">0.75rem / 12px - Regular - Used for captions and metadata</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border rounded-lg p-6 space-y-4">
                  <h4 className="font-medium">Psychology of Color</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="w-full h-4 bg-blue-500 rounded"></div>
                      <h6 className="font-medium">Blue - Trust</h6>
                      <p className="text-xs text-muted-foreground">Conveys reliability, professionalism, and security. Perfect for financial and corporate applications.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-4 bg-green-500 rounded"></div>
                      <h6 className="font-medium">Green - Success</h6>
                      <p className="text-xs text-muted-foreground">Represents growth, health, and positive actions. Ideal for confirmations and progress indicators.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-4 bg-red-500 rounded"></div>
                      <h6 className="font-medium">Red - Attention</h6>
                      <p className="text-xs text-muted-foreground">Demands immediate attention. Used for errors, warnings, and critical actions.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm italic text-muted-foreground border-l-2 border-primary/20 pl-4">
                💡 <strong>Transition Point:</strong> With our color and typography strategy established, 
                let's explore how design tokens will transform these decisions into a scalable, maintainable system.
              </p>
            </div>
          </section>

          {/* Section 3: The Design Token Journey */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <Lightbulb className="h-4 w-4 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold">3. The Design Token Journey</h3>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>

            <div className="pl-11 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Design tokens are the DNA of your design system—small, atomic decisions that combine to 
                create your entire visual language. Think of them as the building blocks that transform 
                your strategic color and typography choices into a living, breathing system that scales 
                across your entire application.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">The Storytelling Power of Tokens</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Imagine walking into a perfectly designed coffee shop. Every element—from the warm wood 
                  tones to the careful spacing between tables—tells a cohesive story. Design tokens do 
                  the same for your digital interface. They ensure every pixel speaks the same visual language, 
                  creating an experience that feels intentional rather than haphazard.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-card border border-primary/20 rounded-lg p-4 space-y-3">
                    <h5 className="font-medium text-primary">Token-Driven Design</h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-primary rounded-sm"></div>
                        <code className="text-xs">--primary: 222 47% 11%</code>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-secondary rounded-sm"></div>
                        <code className="text-xs">--secondary: 210 40% 98%</code>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-accent rounded-sm"></div>
                        <code className="text-xs">--accent: 210 40% 85%</code>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Every color decision references these foundational tokens.</p>
                  </div>
                  
                  <div className="bg-card border border-muted rounded-lg p-4 space-y-3">
                    <h5 className="font-medium">Ad-hoc Styling</h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                        <code className="text-xs">bg-blue-600</code>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-slate-200 rounded-sm"></div>
                        <code className="text-xs">bg-slate-200</code>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                        <code className="text-xs">bg-gray-300</code>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Colors chosen arbitrarily without systematic thinking.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Token Categories & Purposes</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h5 className="font-medium text-primary">Semantic Tokens</h5>
                    <p className="text-sm text-muted-foreground">
                      These tokens communicate meaning rather than specific values. They adapt to context 
                      and theme changes while maintaining their semantic purpose.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-primary/5 rounded">
                        <code className="text-xs">--color-success</code>
                        <span className="text-xs text-muted-foreground">Positive actions</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-destructive/5 rounded">
                        <code className="text-xs">--color-danger</code>
                        <span className="text-xs text-muted-foreground">Critical warnings</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted/30 rounded">
                        <code className="text-xs">--color-neutral</code>
                        <span className="text-xs text-muted-foreground">General content</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="font-medium text-secondary-foreground">System Tokens</h5>
                    <p className="text-sm text-muted-foreground">
                      These handle the mechanical aspects of your interface—spacing, sizing, and timing 
                      that create rhythm and hierarchy.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-secondary/5 rounded">
                        <code className="text-xs">--space-md</code>
                        <span className="text-xs text-muted-foreground">16px spacing</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-secondary/5 rounded">
                        <code className="text-xs">--radius-lg</code>
                        <span className="text-xs text-muted-foreground">8px border radius</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-secondary/5 rounded">
                        <code className="text-xs">--duration-quick</code>
                        <span className="text-xs text-muted-foreground">200ms transitions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border rounded-lg p-4 space-y-3">
                <h4 className="font-medium">Token Implementation Preview</h4>
                <p className="text-sm text-muted-foreground">
                  Here's how tokens create consistency across different component types:
                </p>
                <div className="bg-muted/50 rounded p-3 font-mono text-xs space-y-1">
                  <div>// Button Component</div>
                  <div><span className="text-blue-600">padding</span>: var(--space-sm) var(--space-md);</div>
                  <div><span className="text-blue-600">background</span>: hsl(var(--primary));</div>
                  <div><span className="text-blue-600">border-radius</span>: var(--radius-md);</div>
                  <div className="opacity-50">// Same tokens, different component</div>
                  <div><span className="text-blue-600">gap</span>: var(--space-md);</div>
                  <div><span className="text-blue-600">border</span>: 1px solid hsl(var(--primary));</div>
                </div>
              </div>

              <p className="text-sm italic text-muted-foreground border-l-2 border-primary/20 pl-4">
                💡 <strong>Transition Point:</strong> Now that we understand the storytelling power of design tokens, 
                let's dive into the architecture that makes them truly scalable and maintainable.
              </p>
            </div>
          </section>

          {/* Section 4: Semantic Token Architecture */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">4. Semantic Token Architecture</h3>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>

            <div className="pl-11 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Semantic token architecture is where design systems truly shine. Instead of hard-coding 
                colors like "blue-500," we create a meaningful vocabulary that describes purpose and intent. 
                This approach makes your design system future-proof and enables powerful features like 
                automatic dark mode, theme switching, and brand customization.
              </p>

              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                  <h4 className="font-medium text-lg">The Three-Layer Architecture</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional design systems use a three-layer token architecture that separates 
                    raw values from semantic meaning, creating flexibility without complexity.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary/30 pl-4 space-y-2">
                      <h5 className="font-medium">Layer 1: Reference Tokens</h5>
                      <p className="text-sm text-muted-foreground">
                        Raw color values that define your palette. These rarely change once established.
                      </p>
                      <div className="bg-card rounded p-3 font-mono text-xs">
                        --blue-500: 59 130 246;<br/>
                        --gray-100: 243 244 246;<br/>
                        --red-500: 239 68 68;
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-secondary/30 pl-4 space-y-2">
                      <h5 className="font-medium">Layer 2: System Tokens</h5>
                      <p className="text-sm text-muted-foreground">
                        Semantic assignments that map reference tokens to system-wide purposes.
                      </p>
                      <div className="bg-card rounded p-3 font-mono text-xs">
                        --color-primary: var(--blue-500);<br/>
                        --color-surface: var(--gray-100);<br/>
                        --color-danger: var(--red-500);
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-accent/30 pl-4 space-y-2">
                      <h5 className="font-medium">Layer 3: Component Tokens</h5>
                      <p className="text-sm text-muted-foreground">
                        Context-specific tokens that components use directly, providing maximum flexibility.
                      </p>
                      <div className="bg-card rounded p-3 font-mono text-xs">
                        --button-bg: var(--color-primary);<br/>
                        --card-bg: var(--color-surface);<br/>
                        --alert-error: var(--color-danger);
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Theme Switching Magic</h4>
                  <p className="text-sm text-muted-foreground">
                    The real power of semantic tokens becomes clear when you need to support multiple 
                    themes. Change a few system tokens, and your entire interface transforms seamlessly.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h5 className="font-medium">Light Theme</h5>
                      <div className="bg-white border rounded-lg p-4 space-y-2">
                        <div className="bg-blue-500 text-white p-2 rounded text-center text-sm font-medium">
                          Primary Button
                        </div>
                        <div className="bg-gray-100 text-gray-900 p-2 rounded text-center text-sm">
                          Card Background
                        </div>
                        <div className="text-gray-600 text-xs text-center">
                          --color-primary: var(--blue-500)<br/>
                          --color-surface: var(--gray-100)
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-medium">Dark Theme</h5>
                      <div className="bg-gray-900 border rounded-lg p-4 space-y-2">
                        <div className="bg-blue-400 text-gray-900 p-2 rounded text-center text-sm font-medium">
                          Primary Button
                        </div>
                        <div className="bg-gray-800 text-gray-100 p-2 rounded text-center text-sm">
                          Card Background
                        </div>
                        <div className="text-gray-400 text-xs text-center">
                          --color-primary: var(--blue-400)<br/>
                          --color-surface: var(--gray-800)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border rounded-lg p-6 space-y-4">
                  <h4 className="font-medium">Real-World Implementation</h4>
                  <p className="text-sm text-muted-foreground">
                    Here's how a professional button component leverages semantic token architecture:
                  </p>
                  
                  <div className="bg-muted/50 rounded p-4 font-mono text-xs space-y-1">
                    <div className="text-green-600">/* Component styles automatically adapt to theme */</div>
                    <div><span className="text-purple-600">.button</span> {`{`}</div>
                    <div className="ml-4"><span className="text-blue-600">background</span>: hsl(var(--button-bg));</div>
                    <div className="ml-4"><span className="text-blue-600">color</span>: hsl(var(--button-text));</div>
                    <div className="ml-4"><span className="text-blue-600">border</span>: 1px solid hsl(var(--button-border));</div>
                    <div className="ml-4"><span className="text-blue-600">padding</span>: var(--space-sm) var(--space-md);</div>
                    <div className="ml-4"><span className="text-blue-600">border-radius</span>: var(--radius-md);</div>
                    <div className="ml-4"><span className="text-blue-600">transition</span>: var(--transition-standard);</div>
                    <div>{`}`}</div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground italic">
                    Notice how every property references a semantic token. This button will automatically 
                    adapt to any theme without touching the component code.
                  </p>
                </div>
              </div>

              <p className="text-sm italic text-muted-foreground border-l-2 border-primary/20 pl-4">
                💡 <strong>Phase Complete:</strong> You now understand the strategic thinking behind 
                design systems. In the Setup Phase, we'll transform these concepts into code, configuring 
                our development environment to support this token-driven approach.
              </p>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}