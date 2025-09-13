import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Brain, Play, Users, Code } from "lucide-react";

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
          <Badge variant="outline">M2 — User Interface Complete</Badge>
          <Badge variant="secondary">Plan Phase</Badge>
        </div>
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl font-semibold">
                Map React Concepts
              </CardTitle>
              <p className="text-muted-foreground">
                Planning phase for understanding React state, effects, and component architecture
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>12 minutes total • 4 videos</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Video 1: Understanding React State */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Brain className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">1. Understanding React State</h3>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>
            
            <div className="pl-11 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Welcome to our deep dive into React state—the cornerstone of interactive user interfaces. State is fundamentally different from regular JavaScript variables because it has superpowers: it can trigger React to re-render your component and update the DOM automatically. This isn't just theory—this is the mechanism that powers every interactive element in modern web applications, from simple buttons to complex data visualizations.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">The useState Hook: Your First React Superpower</h4>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Let's start with the most fundamental state hook. When you call useState, you're essentially asking React to "watch" a value and re-render your component whenever that value changes.
                </p>
                
                <div className="bg-card border rounded-lg p-4 space-y-3">
                  <h5 className="font-medium text-sm">Basic useState Pattern</h5>
                  <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`const [isToastVisible, setIsToastVisible] = useState(false);

// React gives you two things:
// 1. isToastVisible - the current value
// 2. setIsToastVisible - function to update it`}
                  </pre>
                </div>

                <div className="bg-card border rounded-lg p-4 space-y-3">
                  <h5 className="font-medium text-sm">Real Toast Component Example</h5>
                  <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`function Toast() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const showToast = (text) => {
    setMessage(text);
    setIsVisible(true);
  };

  return (
    <div>
      <button onClick={() => showToast('Success!')}>
        Show Toast
      </button>
      {isVisible && (
        <div className="toast">{message}</div>
      )}
    </div>
  );
}`}
                  </pre>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">The Three Critical State Principles</h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary/30 pl-4 space-y-3">
                    <h5 className="font-medium">1. State Is Immutable - Never Mutate Directly</h5>
                    <p className="text-sm text-muted-foreground">
                      This is where many developers make their first mistake. You cannot directly modify state variables. React uses Object.is() comparison to detect changes, so mutating an object or array won't trigger a re-render.
                    </p>
                    <div className="bg-card border rounded p-3 space-y-2">
                      <div className="text-xs">
                        <span className="text-red-500 font-medium">❌ Wrong:</span>
                        <pre className="text-xs bg-muted p-2 rounded mt-1">
{`const [items, setItems] = useState(['apple']);
items.push('banana'); // React won't detect this!`}
                        </pre>
                      </div>
                      <div className="text-xs">
                        <span className="text-green-500 font-medium">✅ Correct:</span>
                        <pre className="text-xs bg-muted p-2 rounded mt-1">
{`const [items, setItems] = useState(['apple']);
setItems([...items, 'banana']); // New array, React detects it!`}
                        </pre>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-secondary/30 pl-4 space-y-3">
                    <h5 className="font-medium">2. State Updates Are Asynchronous</h5>
                    <p className="text-sm text-muted-foreground">
                      When you call setState, the change doesn't happen immediately. React batches updates for performance. This means you can't rely on the state value immediately after calling setState.
                    </p>
                    <div className="bg-card border rounded p-3">
                      <pre className="text-xs bg-muted p-2 rounded">
{`const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  console.log(count); // Still 0! Update is async
  
  // Use functional updates for reliable increments:
  setCount(prev => prev + 1);
}`}
                      </pre>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-accent/30 pl-4 space-y-3">
                    <h5 className="font-medium">3. Each Component Instance Has Independent State</h5>
                    <p className="text-sm text-muted-foreground">
                      This is powerful for building reusable components. Each Dialog, Toast, or Dropdown you create maintains its own state completely independent of other instances.
                    </p>
                    <div className="bg-card border rounded p-3">
                      <pre className="text-xs bg-muted p-2 rounded">
{`// Three independent dialogs
<Dialog title="Settings" />    // Has its own open/closed state
<Dialog title="Profile" />     // Completely separate state
<Dialog title="Help" />        // Independent of the others`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-6 space-y-3">
                <h4 className="font-medium text-primary">State Design Philosophy</h4>
                <p className="text-sm text-muted-foreground">
                  The key to excellent React applications is thinking in terms of "what should the UI look like for this state?" rather than "how do I manipulate the DOM?" State describes the current situation, and React automatically creates the correct UI representation. This declarative approach is what makes React so powerful and predictable.
                </p>
              </div>
              
              <p className="text-sm italic text-muted-foreground border-l-2 border-primary/20 pl-4">
                💡 <strong>Transition Point:</strong> Now that we've mastered how state controls what users see, we need to understand useEffect—the hook that lets us respond to state changes and handle side effects like automatically hiding our toast notification after 3 seconds, making API calls when data changes, and cleaning up resources when components unmount.
              </p>
            </div>
          </section>

          {/* Video 2: useEffect for Side Effects */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                <Play className="h-4 w-4 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">2. useEffect for Side Effects</h3>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>

            <div className="pl-11 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                If useState is React's memory, then useEffect is React's connection to the outside world. Think of useEffect as your component's way of saying "when something specific happens, I need to do something outside of rendering." This could be starting a timer, making an API call, subscribing to events, or even just logging to the console. useEffect bridges the gap between React's pure, predictable rendering world and the messy, unpredictable real world of side effects.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">The Complete useEffect Pattern</h4>
                
                <p className="text-sm text-muted-foreground mb-4">
                  useEffect takes two arguments: a function (your effect) and a dependency array (what React should "watch" for changes). The dependency array determines when your effect runs.
                </p>

                <div className="space-y-4">
                  <div className="bg-card border rounded-lg p-4 space-y-3">
                    <h5 className="font-medium text-sm">Basic useEffect Syntax</h5>
                    <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`useEffect(() => {
  // Your side effect code here
  console.log('Effect ran!');
  
  // Optional cleanup function
  return () => {
    console.log('Cleanup ran!');
  };
}, [dependency1, dependency2]); // Dependencies array`}
                    </pre>
                  </div>

                  <div className="bg-card border rounded-lg p-4 space-y-3">
                    <h5 className="font-medium text-sm">Toast Auto-Hide Implementation</h5>
                    <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`function Toast({ message, isVisible, onHide }) {
  useEffect(() => {
    if (!isVisible) return; // Don't set timer if not visible
    
    console.log('Setting up auto-hide timer');
    const timeoutId = setTimeout(() => {
      onHide();
    }, 3000); // Hide after 3 seconds
    
    // Cleanup: Clear timeout if component unmounts
    // or if dependencies change
    return () => {
      console.log('Cleaning up timer');
      clearTimeout(timeoutId);
    };
  }, [isVisible, onHide]); // Re-run when these change
  
  if (!isVisible) return null;
  
  return <div className="toast">{message}</div>;
}`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">The Three Types of useEffect</h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500/30 pl-4 space-y-3">
                    <h5 className="font-medium">1. Run on Every Render (No Dependencies)</h5>
                    <p className="text-sm text-muted-foreground">
                      When you omit the dependency array, the effect runs after every render. This is rarely what you want and can cause performance issues, but it's useful for debugging.
                    </p>
                    <div className="bg-card border rounded p-3">
                      <pre className="text-xs bg-muted p-2 rounded">
{`useEffect(() => {
  console.log('I run after every render!');
  // No return statement needed if no cleanup
}); // No dependency array = runs every time`}
                      </pre>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-blue-500/30 pl-4 space-y-3">
                    <h5 className="font-medium">2. Run Once (Empty Dependencies)</h5>
                    <p className="text-sm text-muted-foreground">
                      With an empty dependency array, the effect runs only once after the component mounts. Perfect for setup code, API calls, or subscribing to events.
                    </p>
                    <div className="bg-card border rounded p-3">
                      <pre className="text-xs bg-muted p-2 rounded">
{`useEffect(() => {
  // Setup code - runs once when component mounts
  console.log('Component mounted!');
  
  return () => {
    // Cleanup - runs once when component unmounts
    console.log('Component unmounting!');
  };
}, []); // Empty array = run once`}
                      </pre>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500/30 pl-4 space-y-3">
                    <h5 className="font-medium">3. Run When Dependencies Change (Conditional)</h5>
                    <p className="text-sm text-muted-foreground">
                      This is the most common pattern. The effect runs when specific values change. React compares each dependency using Object.is() to determine if the effect should run.
                    </p>
                    <div className="bg-card border rounded p-3">
                      <pre className="text-xs bg-muted p-2 rounded">
{`const [userId, setUserId] = useState(null);
const [userData, setUserData] = useState(null);

useEffect(() => {
  if (!userId) return;
  
  // Runs when userId changes
  fetch(\`/api/users/\${userId}\`)
    .then(res => res.json())
    .then(data => setUserData(data));
}, [userId]); // Runs when userId changes`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">Common useEffect Patterns You'll Use</h4>
                
                <div className="space-y-4">
                  <div className="bg-card border rounded-lg p-4 space-y-3">
                    <h5 className="font-medium text-sm">Event Listeners (Dialog Outside Click)</h5>
                    <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`useEffect(() => {
  function handleClickOutside(event) {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  if (isOpen) {
    document.addEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [isOpen]);`}
                    </pre>
                  </div>

                  <div className="bg-card border rounded-lg p-4 space-y-3">
                    <h5 className="font-medium text-sm">Focus Management (Accessibility)</h5>
                    <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`useEffect(() => {
  if (isDialogOpen && dialogRef.current) {
    // Save current focus
    const previousFocus = document.activeElement;
    
    // Focus the dialog
    dialogRef.current.focus();
    
    return () => {
      // Restore focus when dialog closes
      if (previousFocus) {
        previousFocus.focus();
      }
    };
  }
}, [isDialogOpen]);`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-6 space-y-3">
                <h4 className="font-medium text-primary">The Golden Rule of useEffect</h4>
                <p className="text-sm text-muted-foreground">
                  If your effect uses any value from component scope (props, state, or derived values), it must be in the dependencies array. React's ESLint plugin will help you catch missing dependencies. When in doubt, include it—React is smart enough to optimize unnecessary re-runs, but missing dependencies can cause subtle bugs.
                </p>
              </div>
              
              <p className="text-sm italic text-muted-foreground border-l-2 border-primary/20 pl-4">
                💡 <strong>Transition Point:</strong> With state and effects mastered, we need to make a crucial architectural decision: when should data live in state versus when should it come from props? This decision shapes how data flows through your component tree and determines where your "source of truth" lives. It's the difference between tightly-coupled components and beautifully reusable ones.
              </p>
            </div>
          </section>

          {/* Video 3: Props vs State Decisions */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="h-4 w-4 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold">3. Props vs State Decisions</h3>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>

            <div className="pl-11 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Here's where React development becomes an art form. The decision of what should be state versus what should be props isn't just about technical correctness—it's about creating maintainable, reusable, and predictable component hierarchies. This single decision determines whether your components become rigid, tightly-coupled pieces or flexible, reusable building blocks that can adapt to any situation. Let's master this fundamental architectural choice.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">The State vs Props Decision Framework</h4>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Think of this as React's version of "separation of concerns." Each piece of data in your application should have one clear home and one clear source of truth.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-primary/30 pl-4 space-y-3">
                    <h5 className="font-medium text-primary">Choose State When:</h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>The component needs to remember and change the value</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>Only this component (and its children) care about it</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>User interactions directly modify this value</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>The value triggers UI updates when it changes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-secondary/30 pl-4 space-y-3">
                    <h5 className="font-medium text-secondary-foreground">Choose Props When:</h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span>Data comes from a parent component</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span>Multiple components need to share this data</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span>The component displays but doesn't own the data</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">✓</span>
                        <span>You want maximum component reusability</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">Real-World Examples from Our Components</h4>
                
                <div className="space-y-4">
                  <div className="bg-card border rounded-lg p-4 space-y-3">
                    <h5 className="font-medium text-sm">Toast Component: State vs Props Example</h5>
                    <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`// ❌ Bad: Everything as state (not reusable)
function Toast() {
  const [message, setMessage] = useState('Success!');
  const [isVisible, setIsVisible] = useState(false);
  const [type, setType] = useState('success');
  
  // Hard to reuse with different messages
  return isVisible ? <div>{message}</div> : null;
}

// ✅ Good: Props for data, state for behavior
function Toast({ message, type, onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);
  
  return isVisible ? (
    <div className={\`toast toast-\${type}\`}>{message}</div>
  ) : null;
}`}
                    </pre>
                  </div>

                  <div className="bg-card border rounded-lg p-4 space-y-3">
                    <h5 className="font-medium text-sm">Tabs Component: Perfect Props/State Balance</h5>
                    <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`function Tabs({ items, defaultTab = 0, onChange }) {
  // State: Which tab is currently active (component's responsibility)
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  const handleTabChange = (index) => {
    setActiveTab(index);
    onChange?.(index); // Notify parent if they care
  };
  
  return (
    <div>
      {/* Props: The actual tab data comes from parent */}
      {items.map((item, index) => (
        <button 
          key={index}
          onClick={() => handleTabChange(index)}
          className={activeTab === index ? 'active' : ''}
        >
          {item.label}
        </button>
      ))}
      
      {/* Props: Content comes from parent */}
      <div>{items[activeTab]?.content}</div>
    </div>
  );
}

// Usage: Perfect separation of concerns
<Tabs 
  items={[
    { label: 'Profile', content: <ProfileForm /> },
    { label: 'Settings', content: <SettingsPanel /> }
  ]}
  onChange={(tabIndex) => console.log('Tab changed:', tabIndex)}
/>`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">The "Lifting State Up" Pattern</h4>
                
                <p className="text-sm text-muted-foreground mb-4">
                  When multiple components need to share the same state, you "lift" the state up to their closest common parent. This is one of React's most important patterns.
                </p>

                <div className="bg-card border rounded-lg p-4 space-y-3">
                  <h5 className="font-medium text-sm">Dialog + Toast Coordination Example</h5>
                  <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`// Parent component manages shared state
function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  
  const handleDialogSave = (data) => {
    // Close dialog
    setIsDialogOpen(false);
    
    // Show success toast
    setToastMessage('Settings saved successfully!');
    setShowToast(true);
  };
  
  return (
    <div>
      <button onClick={() => setIsDialogOpen(true)}>
        Open Settings
      </button>
      
      {/* Each component gets only what it needs */}
      <Dialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSave={handleDialogSave}
      />
      
      <Toast 
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}`}
                  </pre>
                </div>
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-6 space-y-3">
                <h4 className="font-medium text-primary">The Props vs State Mental Model</h4>
                <p className="text-sm text-muted-foreground">
                  Think of props as "function parameters" and state as "local variables." Props configure how the component behaves, while state tracks what the component is currently doing. A well-designed component has a clear API (props) that makes it predictable and reusable, while keeping its internal behavior (state) encapsulated and focused.
                </p>
              </div>
              
              <p className="text-sm italic text-muted-foreground border-l-2 border-primary/20 pl-4">
                💡 <strong>Transition Point:</strong> Now that we understand how to architect data flow between components, let's design the actual component structure for our Toast, Dialog, Dropdown, and Tabs. We'll explore composition patterns, API design, and how to create components that feel like natural extensions of our M1 design system while demonstrating these React fundamentals in practice.
              </p>
            </div>
          </section>

          {/* Video 4: Component Architecture */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-muted/10 flex items-center justify-center">
                <Code className="h-4 w-4 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold">4. Component Architecture</h3>
              <Badge variant="outline" className="text-xs">3 min</Badge>
            </div>

            <div className="pl-11 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Component architecture is where React development transforms from coding to engineering. We're not just building features—we're designing systems that will scale, adapt, and evolve. Our goal is to create Toast, Dialog, Dropdown, and Tabs components that demonstrate React mastery while building upon our M1 design foundation. Each component will showcase different architectural patterns, teaching you the art of building components that are both powerful and elegant.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">The M2 Component Architecture Strategy</h4>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Each component we build serves dual purposes: teaching core React concepts and demonstrating real-world patterns you'll use throughout your React career. Let's architect components that are educational masterpieces and production-ready tools.
                </p>

                <div className="space-y-4">
                  <div className="bg-card border rounded-lg p-4 space-y-3">
                    <h5 className="font-medium">Toast: The State & Effect Master</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      Our Toast component will be the perfect introduction to React's reactive nature. It demonstrates useState for visibility control and useEffect for auto-hide timers.
                    </p>
                    <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`// Toast API Design
<Toast 
  message="Settings saved!"
  type="success"
  duration={3000}
  onClose={() => console.log('Toast closed')}
/>

// Key Patterns It Teaches:
// - useState for visibility state
// - useEffect with cleanup for timers
// - Props for configuration
// - Conditional rendering
// - Event handler props`}
                    </pre>
                  </div>

                  <div className="bg-card border rounded-lg p-4 space-y-3">
                    <h5 className="font-medium">Dialog: The State Lifting Champion</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      Dialog showcases advanced patterns: focus management, accessibility, state lifting, and compound component patterns. It's where controlled vs uncontrolled components shine.
                    </p>
                    <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`// Dialog Component Composition
<Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Dialog.Header>
    <Dialog.Title>Confirm Action</Dialog.Title>
  </Dialog.Header>
  <Dialog.Content>
    Are you sure you want to delete this item?
  </Dialog.Content>
  <Dialog.Footer>
    <Dialog.CancelButton />
    <Dialog.ConfirmButton />
  </Dialog.Footer>
</Dialog>

// Key Patterns It Teaches:
// - State lifting (parent controls open/close)
// - Compound components pattern
// - Focus management with refs
// - Event delegation (click outside)
// - Accessibility (ARIA attributes)`}
                    </pre>
                  </div>

                  <div className="bg-card border rounded-lg p-4 space-y-3">
                    <h5 className="font-medium">Dropdown: The Event Master</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      Dropdown is our event handling showcase. It demonstrates keyboard navigation, click-outside detection, and complex state management with arrays and objects.
                    </p>
                    <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`// Dropdown with Rich API
<Dropdown 
  items={[
    { id: 'profile', label: 'View Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'logout', label: 'Logout', icon: LogOut, variant: 'destructive' }
  ]}
  onSelect={(item) => console.log('Selected:', item)}
  placeholder="Choose an action..."
  searchable
/>

// Key Patterns It Teaches:
// - Complex state (selected item, open state, search)
// - Array manipulation and filtering
// - Keyboard event handling (arrows, enter, escape)
// - Click outside detection
// - Dynamic content rendering`}
                    </pre>
                  </div>

                  <div className="bg-card border rounded-lg p-4 space-y-3">
                    <h5 className="font-medium">Tabs: The Composition Expert</h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      Tabs demonstrates advanced composition patterns, flexible content rendering, and the beauty of controlled components. It's our masterclass in component API design.
                    </p>
                    <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`// Tabs with Flexible Content
<Tabs defaultValue="profile" onValueChange={handleTabChange}>
  <Tabs.List>
    <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="password">Password</Tabs.Trigger>
  </Tabs.List>
  
  <Tabs.Content value="profile">
    <ProfileForm />
  </Tabs.Content>
  <Tabs.Content value="account">
    <AccountSettings />
  </Tabs.Content>
  <Tabs.Content value="password">
    <PasswordChange />
  </Tabs.Content>
</Tabs>

// Key Patterns It Teaches:
// - Compound component architecture
// - Context for internal state sharing
// - Controlled vs uncontrolled patterns
// - Dynamic content rendering
// - Flexible composition patterns`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">Design System Integration Philosophy</h4>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Our components won't exist in isolation—they'll be natural extensions of our M1 design system. This means consistent styling, predictable behavior, and seamless integration with existing patterns.
                </p>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary/30 pl-4 space-y-2">
                    <h5 className="font-medium">Consistent Visual Language</h5>
                    <p className="text-sm text-muted-foreground">
                      Every component will use our established color tokens, typography scale, spacing system, and interaction patterns. They'll feel like they've always been part of the system.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-secondary/30 pl-4 space-y-2">
                    <h5 className="font-medium">Predictable API Patterns</h5>
                    <p className="text-sm text-muted-foreground">
                      Similar props across components (variant, size, disabled), consistent event naming (onClose, onSelect, onChange), and familiar composition patterns throughout.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent/30 pl-4 space-y-2">
                    <h5 className="font-medium">Accessibility First</h5>
                    <p className="text-sm text-muted-foreground">
                      Every component will include proper ARIA attributes, keyboard navigation, focus management, and screen reader support. Accessibility isn't an afterthought—it's fundamental.
                    </p>
                  </div>
                </div>

                <div className="bg-card border rounded p-4 space-y-2">
                  <h5 className="font-medium text-sm">Design System Extensions Pattern</h5>
                  <pre className="text-xs bg-muted p-3 rounded">
{`// All components extend our base design system
const baseComponentStyles = {
  // Use design system tokens
  colors: 'from CSS variables',
  spacing: 'from spacing scale',
  typography: 'from type scale',
  shadows: 'from shadow system',
  
  // Consistent variant patterns
  variants: ['default', 'secondary', 'outline', 'ghost'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'hover', 'active', 'disabled']
};`}
                  </pre>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-medium text-lg">Implementation Architecture</h4>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Our implementation strategy balances learning objectives with professional practices. Each component will showcase specific React patterns while maintaining production-quality code standards.
                </p>

                <div className="space-y-3">
                  <div className="bg-card border rounded p-4 space-y-2">
                    <h5 className="font-medium text-sm">File Organization Strategy</h5>
                    <pre className="text-xs bg-muted p-3 rounded">
{`src/components/ui/
├── toast/
│   ├── Toast.tsx           # Main component
│   ├── ToastProvider.tsx   # Context provider
│   ├── useToast.ts        # Custom hook
│   └── index.ts           # Public exports
├── dialog/
│   ├── Dialog.tsx         # Compound component
│   ├── DialogParts.tsx    # Header, Content, Footer
│   └── index.ts
├── dropdown/
│   └── ...
└── tabs/
    └── ...`}
                    </pre>
                  </div>

                  <div className="bg-card border rounded p-4 space-y-2">
                    <h5 className="font-medium text-sm">Hook-Based Architecture</h5>
                    <pre className="text-xs bg-muted p-3 rounded">
{`// Custom hooks encapsulate complex logic
useToast()     // Toast state management
useDialog()    // Dialog focus & accessibility
useDropdown()  // Keyboard navigation & filtering
useTabs()      // Tab state & content management

// Each hook demonstrates different React patterns
// while keeping components clean and focused`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-6 space-y-3">
                <h4 className="font-medium text-primary">Our Architecture Principles</h4>
                <p className="text-sm text-muted-foreground">
                  We're building components that teach React fundamentals while demonstrating professional patterns. Each component showcases specific concepts—useState, useEffect, composition, state lifting—within a cohesive, production-ready design system. By the end of M2, you'll have both deep React knowledge and a toolkit of reusable components that exemplify best practices in modern React development.
                </p>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}