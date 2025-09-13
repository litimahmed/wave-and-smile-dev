import { Play, Clock, CheckCircle, AlertTriangle, Users, Target, Zap, Eye, Palette, Monitor, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TestPhaseProps {
  onBack?: () => void;
}

export function TestPhase({ onBack }: TestPhaseProps) {
  return (
    <div className="space-y-8">
      {/* Back Button */}
      {onBack && (
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Course
        </Button>
      )}

      {/* Phase Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-950/20 flex items-center justify-center border border-orange-200 dark:border-orange-800">
            <CheckCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-foreground">Test: Validate Design Consistency</h1>
            <p className="text-lg text-muted-foreground">Ensure your design system works perfectly across all components</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            9 minutes total
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Play className="h-3 w-3" />
            3 videos
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Target className="h-3 w-3" />
            Design Validation
          </Badge>
        </div>
      </div>

      {/* Video 4.1: Component Validation Testing */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-950/20 flex items-center justify-center border border-orange-200 dark:border-orange-800">
                <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">4.1</span>
              </div>
              <div>
                <CardTitle className="text-xl">Component Validation Testing</CardTitle>
                <CardDescription>Systematically test every component we've built</CardDescription>
              </div>
            </div>
            <Badge variant="secondary">3 min</Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to the testing phase! Now that we've built our design system foundation, it's time to validate everything works perfectly. 
              Think of this as a quality control checkpoint - we want to catch any inconsistencies before they become problems in future development.
            </p>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Why Component Testing Matters</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                A single broken component can cascade problems throughout your entire application. By testing systematically now, 
                we ensure our foundation is rock-solid for the features we'll build in upcoming milestones.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium flex items-center gap-2">
                <Zap className="h-4 w-4 text-orange-500" />
                Our Testing Strategy
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Step 1: Button Variants</strong> - We'll test each button variant (default, outline, secondary) in different contexts. 
                  Pay attention to hover states, focus rings, and how they look against different backgrounds.
                </p>
                <p>
                  <strong>Step 2: Card Consistency</strong> - Cards are the building blocks of our interface. We'll verify spacing, 
                  borders, and shadows are consistent across all implementations.
                </p>
                <p>
                  <strong>Step 3: Responsive Navigation</strong> - Test the navigation at different screen sizes. Mobile navigation 
                  should be intuitive and accessible.
                </p>
                <p>
                  <strong>Step 4: Grid System</strong> - Verify our layout foundation handles content gracefully at all breakpoints.
                </p>
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-3">Quick Testing Checklist</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded border">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Button hover effects work</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded border">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Cards maintain spacing</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded border">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Navigation collapses properly</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded border">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Interactive states clear</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                <strong>Pro Tip:</strong> Open your browser's developer tools and simulate different devices. 
                This gives you a quick way to test responsive behavior without physically resizing your browser window.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Begin Component Testing
            </Button>
            <Button variant="outline">
              Download Test Checklist
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Video 4.2: Design System Integration Test */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-950/20 flex items-center justify-center border border-orange-200 dark:border-orange-800">
                <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">4.2</span>
              </div>
              <div>
                <CardTitle className="text-xl">Design System Integration Test</CardTitle>
                <CardDescription>Verify our tokens work harmoniously across components</CardDescription>
              </div>
            </div>
            <Badge variant="secondary">3 min</Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Now let's dive deeper into the heart of our design system. This is where we validate that our design tokens - those CSS variables 
              we set up in index.css and tailwind.config.ts - are actually working together to create a cohesive visual experience.
            </p>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">The Token Integration Challenge</h4>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Design tokens are only as good as their implementation. We need to ensure that when a component uses 
                'primary' color, it gets the same value whether it's a button, card border, or text highlight.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium flex items-center gap-2">
                <Palette className="h-4 w-4 text-orange-500" />
                What We're Validating
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Semantic Color Consistency</strong> - Every component should use semantic tokens like 'primary', 'secondary', 
                  'muted' rather than hard-coded colors. We'll inspect elements to ensure no rogue hex codes are hiding in our CSS.
                </p>
                <p>
                  <strong>Typography Hierarchy</strong> - Text sizes, line heights, and font weights should follow our established scale. 
                  A heading level should look the same whether it's in a card, modal, or sidebar.
                </p>
                <p>
                  <strong>Spacing Rhythm</strong> - Our 8px base grid should be evident in margins, padding, and gaps throughout the interface. 
                  This creates the visual rhythm that makes interfaces feel polished.
                </p>
                <p>
                  <strong>Theme Switching Sanity Check</strong> - Toggle between dark and light modes to verify semantic tokens 
                  update colors across buttons, cards, text, and backgrounds. Confirm focus rings and hover states remain 
                  visible in both themes, and that contrast remains WCAG AA compliant.
                </p>
                <p>
                  <strong>Visual Consistency</strong> - Border radius, shadows, and other visual properties should follow our system rules, 
                  creating a cohesive aesthetic that users subconsciously recognize.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-3">Integration Checkpoints</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded border">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>CSS variables properly inherited</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded border">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>No hard-coded colors found</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded border">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Spacing follows 8px grid</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded border">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Typography scale consistent</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-950/20 rounded-lg border border-gray-200 dark:border-gray-800">
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Testing Approach</h4>
                <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <p>1. <strong>Inspect Elements:</strong> Use browser dev tools to check computed CSS values</p>
                  <p>2. <strong>Token Tracing:</strong> Verify CSS variables resolve to expected values</p>
                  <p>3. <strong>Visual Comparison:</strong> Spot inconsistencies by comparing similar elements</p>
                  <p>4. <strong>Cross-Component Testing:</strong> Check token usage across different components</p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Pro Tip:</strong> In your browser's dev tools, search for 'var(' in the styles panel. 
                This quickly shows you which elements are using CSS variables vs hard-coded values.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Start Token Validation
            </Button>
            <Button variant="outline">
              Open Token Inspector Guide
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Video 4.3: Accessibility & Standards Compliance */}
      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-950/20 flex items-center justify-center border border-orange-200 dark:border-orange-800">
                <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">4.3</span>
              </div>
              <div>
                <CardTitle className="text-xl">Accessibility & Standards Compliance</CardTitle>
                <CardDescription>Build inclusively from the foundation up</CardDescription>
              </div>
            </div>
            <Badge variant="secondary">3 min</Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Accessibility isn't an afterthought - it's a fundamental requirement. When we build accessible design systems from the start, 
              we create applications that work for everyone, including users with disabilities. Let's ensure our foundation meets WCAG 2.1 AA standards.
            </p>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Why Accessibility Matters</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                Over 1 billion people worldwide have disabilities. Building accessible interfaces isn't just the right thing to do - 
                it improves usability for everyone and is required by law in many jurisdictions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium flex items-center gap-2">
                <Users className="h-4 w-4 text-orange-500" />
                Our Accessibility Testing Strategy
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Color Contrast Testing</strong> - We'll verify all text meets the 4.5:1 contrast ratio for normal text 
                  and 3:1 for large text. This ensures readability for users with visual impairments.
                </p>
                <p>
                  <strong>Keyboard Navigation</strong> - Every interactive element must be reachable and usable with just a keyboard. 
                  We'll test tab order, focus indicators, and keyboard shortcuts.
                </p>
                <p>
                  <strong>Screen Reader Compatibility</strong> - Proper semantic HTML and ARIA labels ensure screen readers 
                  can understand and navigate our interface effectively.
                </p>
                <p>
                  <strong>Touch Targets</strong> - Interactive elements need to be at least 44px in size to be easily tappable 
                  on mobile devices, especially for users with motor impairments.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-3">WCAG 2.1 AA Checklist</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded border">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Color contrast ≥ 4.5:1</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded border">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Keyboard navigation complete</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded border">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Focus indicators visible</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded border">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Touch targets ≥ 44px</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-950/20 rounded-lg border border-gray-200 dark:border-gray-800">
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Testing Tools</h4>
                <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <p>• <strong>Browser Dev Tools:</strong> Built-in accessibility auditing</p>
                  <p>• <strong>WAVE Extension:</strong> Visual accessibility evaluation</p>
                  <p>• <strong>Contrast Checker:</strong> Color contrast validation</p>
                  <p>• <strong>Screen Reader:</strong> Test with actual assistive technology</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium flex items-center gap-2">
                <Monitor className="h-4 w-4 text-orange-500" />
                Quick Accessibility Tests You Can Do Right Now
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="p-3 bg-white dark:bg-gray-900 rounded border">
                  <p><strong>Keyboard Test:</strong> Press Tab to navigate through all interactive elements. Can you reach everything?</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded border">
                  <p><strong>Zoom Test:</strong> Increase browser zoom to 200%. Does everything still work and look good?</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded border">
                  <p><strong>Color Test:</strong> Use a contrast checker tool to verify text meets contrast requirements.</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded border">
                  <p><strong>Mobile Test:</strong> Check that buttons and links are easy to tap on a mobile device.</p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                <AlertTriangle className="h-3 w-3 inline mr-1" />
                <strong>Remember:</strong> Accessibility testing should be ongoing, not a one-time check. 
                As we add features in future milestones, we'll test each new component for accessibility compliance.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Start Accessibility Audit
            </Button>
            <Button variant="outline">
              Download Testing Tools
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Phase Summary */}
      <Card className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-950/40 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Test Phase Complete</h3>
              <p className="text-sm text-orange-700 dark:text-orange-300 mb-4">
                You've validated that your design system is working consistently across all components, meets accessibility standards, and provides a solid foundation for future development.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300">
                  Components Validated
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300">
                  Tokens Verified
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300">
                  Accessibility Compliant
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}