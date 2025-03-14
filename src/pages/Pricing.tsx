
import { useEffect } from "react";
import SubscriptionCard from "@/components/ui/SubscriptionCard";

const Pricing = () => {
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
              Simple, Flexible{" "}
              <span className="bg-gradient-to-r from-scoop-600 to-scoop-500 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Choose the plan that works best for your learning journey
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Scoop Free Plan */}
            <SubscriptionCard
              name="Scoop"
              price="Free"
              description="Exchange with others. Earn coins by contributing content."
              features={[
                "Exchange time with other users",
                "Earn coins by teaching",
                "Access to community content",
                "2-way communication learning",
                "Basic courses"
              ]}
              className="animate-slide-up opacity-0"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            />

            {/* Mini Scoop Plan */}
            <SubscriptionCard
              name="Mini Scoop"
              price="฿300"
              yearlyPrice="฿3,000"
              description="Receive weekly currency for general courses."
              features={[
                "1,000 Mini Scoop coins weekly",
                "Exchange for general courses",
                "Access to community content",
                "Ideal for content consumers",
                "No expert-led courses access"
              ]}
              className="animate-slide-up opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            />

            {/* Scoop Plus Plan */}
            <SubscriptionCard
              name="Scoop Plus"
              price="฿300"
              yearlyPrice="฿3,000"
              description="Access expert-led courses and premium content."
              features={[
                "5,000 Scoop Plus coins",
                "Access to expert-led courses",
                "Higher quality content",
                "Premium learning materials",
                "Special features"
              ]}
              isPopular={true}
              className="animate-slide-up opacity-0"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            />

            {/* Scoop Super Plan */}
            <SubscriptionCard
              name="Scoop Super"
              price="฿500"
              yearlyPrice="฿5,000"
              description="Unlimited access to all courses and features."
              features={[
                "Unlimited Scoop Super coins",
                "Access to all courses",
                "Both general and expert content",
                "Weekly bonus coins",
                "All premium features"
              ]}
              className="animate-slide-up opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does the coin system work?
              </h3>
              <p className="text-gray-600">
                Our platform uses time-based coins as currency. You can earn coins by teaching, creating content, or subscribing to paid plans. These coins can then be used to access courses or schedule one-on-one sessions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="text-gray-600">
                Yes, you can switch between plans at any time. Changes will be applied at the start of your next billing cycle, and any unused coins will carry over according to our conversion policy.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's the difference between general and expert courses?
              </h3>
              <p className="text-gray-600">
                General courses are created by community members and cover a wide range of topics. Expert courses are taught by verified specialists with proven expertise in their fields, offering more in-depth knowledge.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How are yearly subscriptions billed?
              </h3>
              <p className="text-gray-600">
                Yearly subscriptions are billed as a single payment at the start of your subscription period. This option provides savings compared to the monthly plan and includes the same features.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I create and sell my own courses?
              </h3>
              <p className="text-gray-600">
                Yes! All users can create and share educational content. When others access your content using their coins, you receive a portion of those coins, creating a sustainable ecosystem for knowledge sharing.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is there a refund policy?
              </h3>
              <p className="text-gray-600">
                We offer a 7-day money-back guarantee for all paid plans. If you're not satisfied with your subscription, contact our support team within 7 days of purchase for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-scoop-50 to-white rounded-2xl shadow-md p-8 border border-scoop-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="heading-3 text-gray-900 mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-gray-600 mb-6">
                  For organizations, schools, and large groups, we offer custom enterprise plans tailored to your specific needs.
                </p>
                <button className="bg-scoop-500 hover:bg-scoop-600 text-white py-2 px-6 rounded-md font-medium transition-colors duration-200">
                  Contact Sales
                </button>
              </div>
              <div className="md:text-right">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-scoop-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Custom learning paths</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-scoop-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-scoop-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Volume discounts</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-scoop-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Advanced analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
