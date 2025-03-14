
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 bg-gradient-to-b from-white to-gray-50">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-scoop-100 opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-scoop-100 opacity-30 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-block mb-6">
          </div>

          <h1 className="heading-1 text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-scoop-600 to-scoop-500 bg-clip-text text-transparent">
              ScoopLearn
            </span>{" "}
            - A New Way to Learn, Share and Grow
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            A learning platform that develops skills through community
            interaction, expert guidance, and structured learning paths powered
            by a unique time-based currency system.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button className="text-white bg-scoop-500 hover:bg-scoop-600 h-12 px-8 text-base font-medium">
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="h-12 px-8 text-base font-medium">
                View Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
