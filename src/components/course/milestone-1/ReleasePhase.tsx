import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Rocket, Users, Target, Settings, Upload, Book, CheckCircle } from "lucide-react";

interface ReleasePhaseProps {
  onBack?: () => void;
}

export function ReleasePhase({ onBack }: ReleasePhaseProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        {onBack && (
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Course
          </Button>
        )}
        
        <div className="flex items-center gap-2">
          <Badge variant="outline">M1 — Platform Signature Ready</Badge>
          <Badge variant="secondary">Release Phase</Badge>
        </div>
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl font-semibold">
                Deploy Foundation
              </CardTitle>
              <p className="text-muted-foreground">
                Release phase for taking your design system live
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>12 minutes total • 4 videos</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Section 1: Production Build */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Settings className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">1. Production Build Optimization</h3>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>
            
            <div className="pl-11 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                The moment of truth has arrived. We've crafted a beautiful design system in development mode, 
                but now we need to transform it into production-ready code that loads lightning fast for 
                real users. This isn't just about running a build command—it's about understanding how 
                modern build tools optimize your code for the real world.
              </p>
              
              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">The Magic of Build Optimization</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Think of your development code as a rough diamond—beautiful and functional, but not 
                  yet optimized for maximum brilliance. The build process is like cutting and polishing 
                  that diamond, removing excess material and creating perfect facets that catch the light.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 dark:bg-orange-950/20 dark:border-orange-800">
                    <h5 className="font-medium text-orange-700 dark:text-orange-300 mb-2">Development Mode</h5>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• Readable, unminified code</li>
                      <li>• Individual CSS files for each component</li>
                      <li>• Source maps for debugging</li>
                      <li>• Hot reload capabilities</li>
                      <li>• Larger bundle sizes for developer experience</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 dark:bg-green-950/20 dark:border-green-800">
                    <h5 className="font-medium text-green-700 dark:text-green-300 mb-2">Production Build</h5>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• Minified, compressed code</li>
                      <li>• Single optimized CSS bundle</li>
                      <li>• Tree-shaken unused code removal</li>
                      <li>• Asset optimization and compression</li>
                      <li>• Minimal bundle sizes for fast loading</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">What Happens During the Build</h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-300 pl-4 space-y-2">
                    <h5 className="font-medium">Code Bundling & Minification</h5>
                    <p className="text-sm text-muted-foreground">
                      Vite analyzes your entire application, starting from your entry point, and creates 
                      a dependency graph. It then bundles related code together and removes whitespace, 
                      comments, and unused variables. Your 2MB development bundle might become 200KB in production.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4 space-y-2">
                    <h5 className="font-medium">Tree Shaking</h5>
                    <p className="text-sm text-muted-foreground">
                      Modern build tools are smart enough to detect unused code. If you import a utility 
                      library but only use one function, tree shaking removes the rest. This is why your 
                      production bundle is so much smaller—you're only shipping what users actually need.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-300 pl-4 space-y-2">
                    <h5 className="font-medium">Asset Optimization</h5>
                    <p className="text-sm text-muted-foreground">
                      Images get compressed, fonts get subset to only include characters you use, and CSS 
                      gets purged of unused styles. Your design tokens get compiled into their final values, 
                      removing the CSS custom property overhead where possible.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border rounded-lg p-4 space-y-3">
                <h4 className="font-medium">Build Performance Metrics</h4>
                <p className="text-sm text-muted-foreground">
                  A well-optimized build should achieve: Bundle sizes under 100KB for initial load, 
                  First Contentful Paint under 1.5 seconds, and Lighthouse scores above 90. These 
                  aren't just numbers—they represent real user experience improvements.
                </p>
              </div>
              
              <p className="text-sm italic text-muted-foreground border-l-2 border-primary/20 pl-4">
                💡 <strong>Transition Point:</strong> Now that we understand how our code gets optimized 
                for production, let's get it live on the web using the simplest deployment method available—perfect 
                for our foundation milestone before we dive into advanced CI/CD in later milestones.
              </p>
            </div>
          </section>

          {/* Section 2: Deployment Setup */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <Upload className="h-4 w-4 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">2. Drag-and-Drop Deployment</h3>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>

            <div className="pl-11 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Deployment used to be a nightmare of server configurations, SSH keys, and complex build 
                pipelines. Today, we can go from local development to live website in under 5 minutes 
                using modern hosting platforms. This isn't just convenient—it's revolutionizing how 
                developers work and learn.
              </p>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Why Netlify for Your First Deployment</h4>
                  <p className="text-sm text-muted-foreground">
                    Netlify's drag-and-drop interface removes all the complexity while still giving you 
                    professional-grade hosting features. Behind that simple interface is a global CDN, 
                    automatic HTTPS, and intelligent build optimization.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 dark:bg-blue-950/20 dark:border-blue-800">
                    <h5 className="font-medium text-blue-700 dark:text-blue-300 mb-3">The Deployment Process</h5>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                        <div>
                          <span className="font-medium">Build Locally: </span>
                          <span className="text-muted-foreground">Run <code className="bg-muted px-1 rounded">npm run build</code> to create your optimized dist folder</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <div>
                          <span className="font-medium">Drag & Drop: </span>
                          <span className="text-muted-foreground">Simply drag your dist folder onto Netlify's deploy zone</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                        <div>
                          <span className="font-medium">Live in Seconds: </span>
                          <span className="text-muted-foreground">Your site is deployed to a global CDN with HTTPS enabled automatically</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">What's Happening Behind the Scenes</h4>
                  
                  <div className="space-y-3">
                    <div className="bg-muted/20 rounded-lg p-4 space-y-2">
                      <h5 className="font-medium text-sm">Global Content Distribution</h5>
                      <p className="text-xs text-muted-foreground">
                        Your files get copied to servers worldwide. A user in Tokyo gets your site from 
                        a server in Asia, while someone in New York gets it from a server in the US. 
                        This is why your site loads fast everywhere, not just near your original server.
                      </p>
                    </div>
                    
                    <div className="bg-muted/20 rounded-lg p-4 space-y-2">
                      <h5 className="font-medium text-sm">Automatic HTTPS & Security</h5>
                      <p className="text-xs text-muted-foreground">
                        Netlify automatically provisions SSL certificates and enforces HTTPS. This isn't 
                        just about security—search engines rank HTTPS sites higher, and modern web APIs 
                        require secure contexts to function.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 dark:bg-amber-950/20 dark:border-amber-800">
                  <h4 className="font-medium text-amber-800 dark:text-amber-300 mb-2">Pro Deployment Tips</h4>
                  <ul className="space-y-1 text-sm text-amber-700 dark:text-amber-400">
                    <li>• Always test your build locally first with <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">npm run preview</code></li>
                    <li>• Create a <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">public/_redirects</code> file with <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">/* /index.html 200</code> for SPA routing</li>
                    <li>• Use custom domains for professional credibility (we'll cover this)</li>
                    <li>• Set up form handling and redirects through Netlify's dashboard</li>
                    <li>• Monitor your site's performance with built-in analytics</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm italic text-muted-foreground border-l-2 border-primary/20 pl-4">
                💡 <strong>Transition Point:</strong> Your design system is now live on the web! But a 
                professional project needs more than just deployed code—it needs documentation that helps 
                other developers (and future you) understand and extend your system effectively.
              </p>
            </div>
          </section>

          {/* Section 3: Design System Documentation */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <Book className="h-4 w-4 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold">3. Design System Documentation</h3>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>

            <div className="pl-11 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Documentation isn't just about explaining what you built—it's about creating a living guide 
                that grows with your system. Good documentation prevents confusion, speeds up development, 
                and ensures consistency as your team grows. Think of it as the instruction manual for 
                your design system's DNA.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">The Documentation Ecosystem</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your design system documentation should be like a well-organized library—everything 
                  has its place, and anyone can find what they need quickly. We'll create multiple 
                  types of documentation, each serving a specific purpose in your development workflow.
                </p>
                
                <div className="grid gap-3 mt-4">
                  <div className="bg-card border rounded-lg p-3 space-y-2">
                    <h5 className="font-medium text-sm">Component Catalog</h5>
                    <p className="text-xs text-muted-foreground">
                      Visual examples of every component with usage guidelines, props documentation, 
                      and code snippets. This becomes your team's quick reference guide.
                    </p>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-3 space-y-2">
                    <h5 className="font-medium text-sm">Design Token Reference</h5>
                    <p className="text-xs text-muted-foreground">
                      Complete color palettes, typography scales, spacing values, and semantic meanings. 
                      This ensures consistent implementation across all components.
                    </p>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-3 space-y-2">
                    <h5 className="font-medium text-sm">Implementation Guide</h5>
                    <p className="text-xs text-muted-foreground">
                      Step-by-step instructions for adding new components, extending existing ones, 
                      and maintaining consistency as the system evolves.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">Creating Living Documentation</h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-green-300 pl-4 space-y-2">
                    <h5 className="font-medium">Start Simple, Scale Smart</h5>
                    <p className="text-sm text-muted-foreground">
                      Begin with a simple README that explains your color system and component structure. 
                      As your system grows, you can add Storybook or dedicated documentation sites. 
                      The key is making sure someone new to your project can understand your decisions.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-300 pl-4 space-y-2">
                    <h5 className="font-medium">Document the "Why," Not Just the "What"</h5>
                    <p className="text-sm text-muted-foreground">
                      Explain why you chose specific colors, spacing values, or component patterns. 
                      Future developers (including yourself six months from now) will thank you for 
                      explaining the reasoning behind design decisions.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-300 pl-4 space-y-2">
                    <h5 className="font-medium">Make It Visual and Interactive</h5>
                    <p className="text-sm text-muted-foreground">
                      Use color swatches, typography samples, and component previews. Documentation 
                      should be as beautiful and usable as the system it describes. If it's not 
                      pleasant to use, developers won't use it.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card border rounded-lg p-4 space-y-3">
                <h4 className="font-medium">Documentation Tools Progression</h4>
                <div className="grid gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Milestone 1:</span>
                    <span className="text-muted-foreground">README with component examples and token reference</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">Milestone 2:</span>
                    <span className="text-muted-foreground">Interactive documentation with live examples</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-medium">Milestone 3:</span>
                    <span className="text-muted-foreground">Full Storybook integration with automated testing</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm italic text-muted-foreground border-l-2 border-primary/20 pl-4">
                💡 <strong>Transition Point:</strong> With our foundation documented and deployed, it's time 
                to celebrate what we've accomplished and look ahead to the exciting interactive features 
                we'll build in Milestone 2. This foundation will support everything we create next.
              </p>
            </div>
          </section>

          {/* Section 4: Milestone Wrap & M2 Preview */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                <Rocket className="h-4 w-4 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">4. Foundation Complete + M2 Preview</h3>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>

            <div className="pl-11 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Take a moment to appreciate what you've accomplished. You now have a live, professional 
                design system that serves as the foundation for any modern web application. But more 
                importantly, you've learned the systematic thinking that separates good developers from 
                great ones. Let's review your achievements and preview the exciting journey ahead.
              </p>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 space-y-4 dark:from-green-950/20 dark:to-blue-950/20 dark:border-green-800">
                <h4 className="font-medium text-lg text-green-800 dark:text-green-300">🎉 Milestone 1: Complete</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h5 className="font-medium">Technical Achievements</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>✓ Production-ready React + TypeScript setup</li>
                      <li>✓ Systematic design token architecture</li>
                      <li>✓ Reusable component library</li>
                      <li>✓ Optimized build pipeline</li>
                      <li>✓ Live deployment with global CDN</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-medium">Professional Skills Gained</h5>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>✓ Design system thinking</li>
                      <li>✓ Scalable architecture patterns</li>
                      <li>✓ Modern deployment workflows</li>
                      <li>✓ Documentation best practices</li>
                      <li>✓ Performance optimization basics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">The Foundation You've Built</h4>
                  <p className="text-sm text-muted-foreground">
                    Your design system isn't just a collection of components—it's a living framework that 
                    will adapt and grow with every feature you add. The systematic approach you've learned 
                    will serve you throughout your entire development career.
                  </p>

                  <div className="bg-muted/20 rounded-lg p-4 space-y-3">
                    <h5 className="font-medium text-sm">What Makes This Professional-Grade</h5>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• Semantic tokens that adapt to light/dark themes automatically</li>
                      <li>• Component variants that handle all use cases without custom CSS</li>
                      <li>• Accessible markup with proper ARIA attributes and keyboard navigation</li>
                      <li>• Responsive design that works perfectly on all devices</li>
                      <li>• Documentation that enables team collaboration and knowledge transfer</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">🚀 What's Coming in Milestone 2</h4>
                  
                  <div className="grid gap-3">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 dark:bg-blue-950/20 dark:border-blue-800">
                      <h5 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Interactive Components & State Management</h5>
                      <p className="text-sm text-blue-700 dark:text-blue-400">
                        Transform your static components into dynamic, interactive experiences. Learn React 
                        hooks, state management patterns, and how to handle user interactions professionally.
                      </p>
                    </div>
                    
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 dark:bg-purple-950/20 dark:border-purple-800">
                      <h5 className="font-medium text-purple-800 dark:text-purple-300 mb-2">Real Data Integration</h5>
                      <p className="text-sm text-purple-700 dark:text-purple-400">
                        Connect your interface to APIs, handle loading states, manage errors gracefully, 
                        and create seamless user experiences that feel responsive and professional.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 dark:bg-green-950/20 dark:border-green-800">
                      <h5 className="font-medium text-green-800 dark:text-green-300 mb-2">Advanced React Patterns</h5>
                      <p className="text-sm text-green-700 dark:text-green-400">
                        Master context providers, custom hooks, performance optimization, and the patterns 
                        that make React applications maintainable and scalable at enterprise level.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 space-y-3">
                <h4 className="font-medium text-lg flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Ready for the Next Challenge?
                </h4>
                <p className="text-sm text-blue-100">
                  You've proven you can think systematically and build professional foundations. 
                  Milestone 2 will challenge you to bring your components to life with interactions, 
                  animations, and real-world data integration. The systematic thinking you've developed 
                  here will make those advanced concepts much easier to master.
                </p>
              </div>

              <p className="text-sm italic text-muted-foreground border-l-2 border-primary/20 pl-4">
                🎯 <strong>Achievement Unlocked:</strong> You're no longer just following tutorials—you're 
                building production-ready applications with professional development practices. The foundation 
                is complete, and the real fun is just beginning!
              </p>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}