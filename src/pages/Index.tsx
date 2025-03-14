
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, MessageSquare, Play, Book } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">
              How ScoopLearn Works
            </h2>
            <p className="text-lg text-gray-600">
              Our revolutionary platform transforms the way you learn and share
              knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center animate-slide-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <div className="w-16 h-16 bg-scoop-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-scoop-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Learn & Earn
              </h3>
              <p className="text-gray-600 mb-4">
                Learn from courses and earn Scoop coins as you complete lessons and contribute content.
              </p>
              <span className="inline-block w-8 h-1 bg-scoop-500 rounded"></span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <div className="w-16 h-16 bg-scoop-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-scoop-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Create & Share
              </h3>
              <p className="text-gray-600 mb-4">
                Create your own educational content and share your expertise with the community.
              </p>
              <span className="inline-block w-8 h-1 bg-scoop-500 rounded"></span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center animate-slide-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <div className="w-16 h-16 bg-scoop-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-scoop-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Connect & Grow
              </h3>
              <p className="text-gray-600 mb-4">
                Connect with experts for one-on-one sessions using your earned coins.
              </p>
              <span className="inline-block w-8 h-1 bg-scoop-500 rounded"></span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-scoop-500 to-scoop-600 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4 max-w-2xl mx-auto">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
            Join our community today and discover a new way to learn, share knowledge, and grow your skills.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button className="bg-white text-scoop-600 hover:bg-gray-100 border-white h-12 px-8 text-base font-medium">
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button className="bg-white text-scoop-600 hover:bg-gray-100 border-white h-12 px-8 text-base font-medium">
                View Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
