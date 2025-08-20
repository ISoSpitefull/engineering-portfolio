import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PersonalProjects from "./pages/PersonalProjects";
import TeamProjects from "./pages/TeamProjects";
import ProjectDetail from "./pages/ProjectDetail";
import AboutMe from "./pages/AboutMe";
import Test3DViewer from "./pages/Test3DViewer";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="dark">
        <BrowserRouter>
          <ScrollToTop />
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/personal-projects" element={<PersonalProjects />} />
            <Route path="/team-projects" element={<TeamProjects />} />
            <Route path="/project/:type/:id" element={<ProjectDetail />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/test-3d-viewer" element={<Test3DViewer />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
