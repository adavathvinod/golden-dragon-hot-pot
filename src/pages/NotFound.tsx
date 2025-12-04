import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24">
      <div className="text-center px-4">
        <h1 className="text-8xl md:text-9xl font-chinese font-bold text-gold-gradient mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-serif text-foreground mb-4">Page Not Found</p>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back to something delicious.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
