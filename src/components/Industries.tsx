
import { Monitor, Coffee, Shirt, Car, Dices, Gamepad2, Film, Building, Plane, Dumbbell, ShoppingCart, GraduationCap } from "lucide-react";

export const Industries = () => {
  const industries = [
    { icon: Monitor, name: "Tech & Electronics", color: "from-blue-500 to-cyan-500" },
    { icon: Coffee, name: "Food & Beverages", color: "from-orange-500 to-red-500" },
    { icon: Shirt, name: "Clothing & Fashion", color: "from-pink-500 to-purple-500" },
    { icon: Car, name: "Automobiles", color: "from-gray-600 to-gray-800" },
    { icon: Dices, name: "Online Casinos", color: "from-yellow-500 to-orange-600" },
    { icon: Gamepad2, name: "Gaming", color: "from-green-500 to-blue-500" },
    { icon: Film, name: "Movies & Media", color: "from-purple-600 to-pink-600" },
    { icon: Building, name: "Real Estate", color: "from-blue-600 to-indigo-600" },
    { icon: Plane, name: "Travel & Hospitality", color: "from-teal-500 to-cyan-500" },
    { icon: Dumbbell, name: "Fitness & Wellness", color: "from-green-600 to-lime-600" },
    { icon: ShoppingCart, name: "E-commerce & Startups", color: "from-indigo-500 to-purple-500" },
    { icon: GraduationCap, name: "Education & EdTech", color: "from-blue-500 to-purple-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From tech giants to local restaurants, we've successfully promoted brands across every major industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-center font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Don't see your industry? We work with businesses of all types!</p>
          <button 
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Discuss Your Industry
          </button>
        </div>
      </div>
    </section>
  );
};
