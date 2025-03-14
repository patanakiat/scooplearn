import { useEffect } from "react";
import tedLogo from "../img/ted.png";
import nectecLogo from "../img/nectec.png";
import quizletLogo from "../img/quizlet.png";
import skillaneLogo from "../img/skillane.png";
import trueDigitalLogo from "../img/trueDigital.png";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-scoop-600 to-scoop-500 bg-clip-text text-transparent">
                ScoopLearn
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Revolutionizing education through community-driven learning and a unique time-based currency system.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div
              className="text-center mb-12 animate-slide-up opacity-0"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <h2 className="heading-3 text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-4">
                Creating platforms that connect people through skill and knowledge exchange, promoting learning and building sustainable learning communities through technology.
              </p>
            </div>

            <div
              className="text-center animate-slide-up opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <h2 className="heading-3 text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600">
                Developing educational platforms for the digital era with quality content accessible anytime and anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div
            className="max-w-3xl mx-auto text-center animate-slide-up opacity-0"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <h2 className="heading-3 text-gray-900 mb-6">Product Description</h2>
            <p className="text-lg text-gray-600">
              SCOOP LEARN is a learning app that develops skills through community features including teacher reviews, one-on-one learning, video lessons, student-teacher matching, structured learning paths, and interactive tools. It uses a time-based currency system where users accumulate "time" by uploading clips or subscribing, which can be exchanged for video lessons or communication.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-3 text-gray-900 mb-8 text-center">Key Features</h2>
            <div
              className="prose prose-lg max-w-none text-gray-600 animate-fade-in opacity-0"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-scoop-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-scoop-600 font-semibold text-sm">1</span>
                  </span>
                  <div>
                    <strong className="text-gray-900">Time-for-Value Exchange:</strong> Transform time into value instead of money
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-scoop-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-scoop-600 font-semibold text-sm">2</span>
                  </span>
                  <div>
                    <strong className="text-gray-900">Skill Ecosystem:</strong> Learn and share skills within the community
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-scoop-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-scoop-600 font-semibold text-sm">3</span>
                  </span>
                  <div>
                    <strong className="text-gray-900">Creative Teaching:</strong> Everyone can teach or create content freely
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-scoop-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-scoop-600 font-semibold text-sm">4</span>
                  </span>
                  <div>
                    <strong className="text-gray-900">Reducing Educational Inequality:</strong> Using time and skills instead of money
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-scoop-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-scoop-600 font-semibold text-sm">5</span>
                  </span>
                  <div>
                    <strong className="text-gray-900">Active Participation:</strong> Users must learn or create content to stay engaged
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-gray-900 mb-12 text-center">App Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-slide-up opacity-0"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Review System</h3>
              <p className="text-gray-600">
                Finding relatable teachers through our comprehensive teacher review system.
              </p>
            </div>
            <div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-slide-up opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2-Way Communication</h3>
              <p className="text-gray-600">
                One-on-one sessions with experts and teachers through personalized video calls.
              </p>
            </div>
            <div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-slide-up opacity-0"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1-Way Communication</h3>
              <p className="text-gray-600">
                Watch shared videos and educational content created by community members.
              </p>
            </div>
            <div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-slide-up opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Profile System</h3>
              <p className="text-gray-600">
                Display your skills and expertise to build credibility within the community.
              </p>
            </div>
            <div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-slide-up opacity-0"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Structured Learning Path</h3>
              <p className="text-gray-600">
                Follow organized learning progression for effective skill development.
              </p>
            </div>
            <div
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 animate-slide-up opacity-0"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interactive Tools</h3>
              <p className="text-gray-600">
                Engage with exercises, games, and Q&A to enhance your learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-gray-900 mb-12 text-center">Achievements & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-gray-50 rounded-xl p-6 animate-slide-up opacity-0"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Statistics</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-scoop-500 rounded-full"></span>
                  <span className="text-gray-700">5+ million downloads in first month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-scoop-500 rounded-full"></span>
                  <span className="text-gray-700">
                    Ranked #1 in Education category on both Play Store and App Store
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-scoop-500 rounded-full"></span>
                  <span className="text-gray-700">5-star reviews from users globally</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-scoop-500 rounded-full"></span>
                  <span className="text-gray-700">Nominated for Google Play Award 2025</span>
                </li>
              </ul>
            </div>
            <div
              className="bg-gray-50 rounded-xl p-6 animate-slide-up opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Awards</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-scoop-500 rounded-full"></span>
                  <span className="text-gray-700">EdTech Excellence Award by DEPA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-scoop-500 rounded-full"></span>
                  <span className="text-gray-700">
                    "ผู้นำเทรนด์อนาคตด้านเทคโนโลยีแห่งปี" สาขา Leader of Technology
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-scoop-500 rounded-full"></span>
                  <span className="text-gray-700">CEO of the Year in EdTech Leadership</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-scoop-500 rounded-full"></span>
                  <span className="text-gray-700">EdTech Innovation of the Year</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="heading-3 text-gray-900 mb-12">Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-48 h-24 flex items-center justify-center">
              <img src={tedLogo} alt="TED Logo" className="w-32 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-48 h-24 flex items-center justify-center">
              <img src={nectecLogo} alt="NECTEC Logo" className="w-32 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-48 h-24 flex items-center justify-center">
              <img src={quizletLogo} alt="QUIZLET Logo" className="w-32 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-48 h-24 flex items-center justify-center">
              <img src={skillaneLogo} alt="SKILLANE Logo" className="w-32 object-contain" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-48 h-24 flex items-center justify-center">
              <img src={trueDigitalLogo} alt="TRUE DIGITAL Logo" className="w-32 object-contain" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
