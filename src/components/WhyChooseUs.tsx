
import { Clock, TrendingUp, Shield, Headphones } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Data-Driven Results",
      description: "Every campaign is backed by comprehensive analytics and continuous optimization for maximum ROI."
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "We understand business moves fast. Get your campaigns up and running in record time."
    },
    {
      icon: Shield,
      title: "Transparent Reporting",
      description: "Full visibility into your campaign performance with detailed, easy-to-understand reports."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated account managers and round-the-clock support to ensure your success."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Hauspromo?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're not just another marketing agency. We're your growth partners committed to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <reason.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-blue-100">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h3>
            <p className="text-blue-100 mb-6">
              Join hundreds of successful businesses that trust Hauspromo to maximize their marketing potential.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
