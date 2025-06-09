
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'signin' | 'signup';
  onModeChange: (mode: 'signin' | 'signup') => void;
}

export const AuthModal = ({ isOpen, onClose, mode, onModeChange }: AuthModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      toast({
        title: mode === 'signin' ? "Welcome back!" : "Account created!",
        description: mode === 'signin' 
          ? "You've successfully signed in to SkillSwap Hub." 
          : "Your account has been created. Welcome to the community!",
      });
      setIsLoading(false);
      onClose();
      // Reset form
      setEmail("");
      setPassword("");
      setFullName("");
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-poppins font-bold text-midnight-teal">
            {mode === 'signin' ? 'Welcome Back' : 'Join SkillSwap Hub'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="border-sage-green/30 focus:border-coral-orange"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-sage-green/30 focus:border-coral-orange"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-sage-green/30 focus:border-coral-orange"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-coral-orange hover:bg-coral-orange/90 text-white font-semibold"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : (mode === 'signin' ? 'Sign In' : 'Create Account')}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-off-black/60">
            {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => onModeChange(mode === 'signin' ? 'signup' : 'signin')}
              className="text-coral-orange hover:underline font-medium"
            >
              {mode === 'signin' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        <div className="text-center text-xs text-off-black/50">
          <p>
            {mode === 'signup' && 'By creating an account, you agree to our Terms of Service and Privacy Policy.'}
            {mode === 'signin' && 'Ready to connect with Supabase for full authentication!'}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
