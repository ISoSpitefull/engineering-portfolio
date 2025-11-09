import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="text-center space-y-4 max-w-md">
        <p className="text-sm uppercase tracking-widest text-blue-400">Error 404</p>
        <h1 className="text-4xl font-bold text-white">Page not found</h1>
        <p className="text-gray-300">
          We couldn't find <span className="text-white font-semibold">{location.pathname}</span>. The page may
          have moved or you might have mistyped the URL.
        </p>
        <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
