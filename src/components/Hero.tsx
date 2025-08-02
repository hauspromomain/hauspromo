
import { ArrowRight, Play, Sparkles, Zap, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* Sophisticated dark background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-slate-800/30 to-black"></div>
      
      {/* Elegant gradient orbs - dark mode */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-600/40 via-orange-500/40 to-rose-500/40 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/40 via-indigo-500/40 to-purple-500/40 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-emerald-600/30 via-teal-500/30 to-cyan-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse delay-500"></div>
      
      {/* Floating elements with refined dark colors */}
      <div className="absolute top-20 left-20 animate-bounce delay-300">
        <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-80 shadow-2xl shadow-amber-500/50"></div>
      </div>
      <div className="absolute top-40 right-32 animate-bounce delay-700">
        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-75 shadow-2xl shadow-blue-500/50"></div>
      </div>
      <div className="absolute bottom-32 left-16 animate-bounce delay-1000">
        <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-85 shadow-2xl shadow-emerald-500/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            {/* Elegant badge - dark mode */}
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-full px-6 py-2 flex items-center space-x-2 backdrop-blur-sm border border-amber-400/30 shadow-xl shadow-amber-500/20">
                <Flame className="h-5 w-5 text-white animate-pulse" />
                <span className="text-white font-bold text-sm tracking-wide">PREMIUM MARKETING AGENCY</span>
                <Zap className="h-5 w-5 text-amber-100 animate-pulse" />
              </div>
            </div>

            {/* Main heading with sophisticated typography - dark mode */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-8">
              <span className="text-white block mb-2">We Make</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 block animate-pulse">
                Brands Go
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 block">
                VIRAL ✨
              </span>
            </h1>

            {/* Refined subtitle - dark mode */}
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              From TikTok to billboards, we create campaigns that break the internet and dominate every platform. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-semibold"> Ready to go viral?</span>
            </p>

            {/* CTA buttons with sophisticated dark styling */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="group bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 hover:from-amber-400 hover:via-orange-500 hover:to-red-500 text-white px-10 py-4 text-lg font-bold rounded-full shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/40 transition-all duration-300 border-2 border-amber-400/20"
              >
                <Sparkles className="mr-3 h-6 w-6 group-hover:animate-spin" />
                LET'S GO VIRAL
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-gray-600 text-gray-300 hover:bg-gray-800/50 px-10 py-4 text-lg font-bold rounded-full backdrop-blur-sm hover:border-gray-500 hover:shadow-lg hover:shadow-gray-500/20 transition-all duration-300"
              >
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                WATCH MAGIC
              </Button>
            </div>

            {/* Stats with sophisticated dark cards */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="group bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-gray-400 font-medium mt-2">Brands Made Viral</div>
              </div>
              
              <div className="group bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  100M+
                </div>
                <div className="text-gray-400 font-medium mt-2">Views Generated</div>
              </div>
              
              <div className="group bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <div className="text-gray-400 font-medium mt-2">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right side with elegant dark card */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 rounded-3xl p-1 transform hover:rotate-2 transition-all duration-500 shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/40">
              <div className="w-full h-full bg-gray-900/95 backdrop-blur-sm rounded-2xl flex items-center justify-center relative overflow-hidden border border-amber-400/20">
                {/* Background pattern - dark mode */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-slate-900/80"></div>
                
                <div className="text-center relative z-10 p-8">
                  <div className="text-8xl mb-6 animate-bounce">🚀</div>
                  <h3 className="text-4xl font-black text-white mb-4 animate-pulse">Ready to</h3>
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-4">BLOW UP?</h3>
                  <p className="text-gray-300 text-lg mb-6">Let's make your brand the next big thing</p>
                  
                  <div className="flex justify-center space-x-3 mb-4">
                    <div className="w-4 h-4 bg-amber-500 rounded-full animate-pulse shadow-lg shadow-amber-500/50"></div>
                    <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse delay-300 shadow-lg shadow-orange-500/50"></div>
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse delay-600 shadow-lg shadow-red-500/50"></div>
                  </div>
                  
                  <div className="text-2xl animate-bounce delay-1000">💥</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
