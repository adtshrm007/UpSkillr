import NavBar from "../components/common/Navbar";
import { useState } from "react";

export default function GenerateRoadmap() {
  const [isFocused, setIsFocused] = useState(false);
  const [chatFocused, setChatFocused] = useState(false);

  return (
    <div className="bg-[#080808] min-h-screen w-full flex flex-col lg:flex-row font-mono text-gray-200 overflow-x-hidden selection:bg-[#FF7849]/30">
      <NavBar />
      <main className="flex-1 p-4 lg:p-10 lg:pl-32 xl:pl-44 overflow-y-auto overflow-x-hidden">
        <div className="max-w-full mx-auto space-y-12 pb-10">
          
          {/* HEADER SECTION */}
          <header className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 animate-in fade-in slide-in-from-top duration-1000">
            <div className="flex-1 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#FF7849] font-black mb-3 px-1 animate-pulse">
                  SYSTEM_MODULE: PATHWAY_GENERATOR
                </p>
                <div className="relative inline-block">
                  <h2 className="text-5xl lg:text-7xl font-black tracking-tighter italic uppercase leading-none">
                    LEARNING <span className="text-white">ROADMAP</span>
                  </h2>
                  <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#FF7849]" />
                </div>
              </div>

              {/* ACTION BAR */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button className="px-6 py-3.5 bg-white/5 border border-white/10 text-gray-400 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all active:scale-95 group">
                  <span className="mr-2">My Roadmaps</span>
                  <span className="inline-block transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </header>

          {/* MAIN CONTENT AREA */}
          <div className="flex-1 w-full flex flex-col gap-6 mt-4">
            
            {/* SEARCH / INPUT BAR */}
            <div 
              className={`w-full relative transition-all duration-500 rounded-3xl p-1 border ${
                isFocused ? "border-[#FF7849] bg-[#FF7849]/5 shadow-[0_0_20px_rgba(255,120,73,0.1)]" : "border-white/10 bg-white/2 hover:border-white/20 hover:bg-white/4"
              }`}
            >
              <div className="w-full bg-[#080808]/80 backdrop-blur-md rounded-[22px] flex flex-col md:flex-row items-center p-2 gap-4">
                <div className="flex items-center w-full md:w-auto flex-1 pl-4">
                  <div className={`transition-colors duration-300 ${isFocused ? "text-[#FF7849] animate-pulse drop-shadow-[0_0_8px_rgba(255,120,73,0.8)]" : "text-gray-600"}`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="w-full bg-transparent p-4 border-0 outline-0 text-white text-lg placeholder-gray-600 font-mono tracking-wider transition-all"
                    placeholder="ENTER_GOAL_PROMPT..."
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                </div>
                
                <div className="flex flex-wrap items-center gap-4 px-4 w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0">
                  <div className="flex items-center gap-2 border border-white/10 px-3 py-2 rounded-xl bg-black/50 focus-within:border-[#FF7849] transition-all">
                    <span className="text-[10px] uppercase font-black tracking-widest text-gray-500">HRS/WK:</span>
                    <input 
                      type="number"
                      min="1"
                      max="168"
                      placeholder="10"
                      className="bg-transparent text-white font-bold outline-0 w-12 text-center"
                    />
                  </div>
                  
                  <select className="bg-transparent text-gray-300 font-bold outline-0 cursor-pointer hover:text-white transition-colors uppercase text-[10px] tracking-widest px-2 py-2 border border-white/10 rounded-xl">
                    <option value="Beginner" className="bg-[#121212]">Lvl_0: Beginner</option>
                    <option value="Intermediate" className="bg-[#121212]">Lvl_1: Intermediate</option>
                    <option value="Advanced" className="bg-[#121212]">Lvl_2: Advanced</option>
                  </select>

                  <button className="bg-white text-black px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#FF7849] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_-10px_rgba(255,255,255,0.2)] ml-2">
                    Generate
                  </button>
                </div>
              </div>
            </div>

            {/* EMPTY STATE */}
            <div className="flex-1 w-full min-h-[400px] border border-dashed border-white/10 rounded-[2.5rem] bg-white/2 flex items-center justify-center relative overflow-hidden group hover:border-[#FF7849]/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF7849]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="text-center z-10 p-8 transform transition-transform duration-500 group-hover:scale-105">
                <div className="w-20 h-20 mx-auto bg-black/50 rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/10 group-hover:border-[#FF7849]/50 transition-colors duration-500">
                  <svg className="w-10 h-10 text-[#FF7849] animate-pulse drop-shadow-[0_0_10px_rgba(255,120,73,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="6" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black italic uppercase mb-6 text-white tracking-tighter">
                  AWAITING_SYS_<span className="text-[#FF7849]">INPUT</span>
                </h3>
                <div className="flex flex-col gap-4 text-gray-500 font-black text-[10px] uppercase tracking-[0.3em]">
                  {["PATH_OPTIMIZATION", "PROJECT_CURATION", "CAREER_TELEMETRY", "AI_ASSIST_MODULE"].map((feature, idx) => (
                    <p key={idx} className="flex items-center justify-center gap-3 hover:text-white transition-colors cursor-default">
                      <svg className="w-4 h-4 text-[#FF7849] drop-shadow-[0_0_5px_rgba(255,120,73,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* AI CHAT INPUT */}
            <div className={`w-full transition-all duration-300 rounded-[2rem] border ${chatFocused ? "border-[#FF7849] bg-white/5 shadow-[0_0_15px_rgba(255,120,73,0.1)]" : "border-white/10 bg-white/2 hover:border-white/20 hover:bg-white/4"} flex items-center p-3`}>
              <div className="w-12 h-12 rounded-xl bg-black/50 flex items-center justify-center ml-2 flex-shrink-0 border border-white/10 group-hover:border-[#FF7849]/30 transition-colors text-[#4F86C6] drop-shadow-[0_0_8px_rgba(79,134,198,0.5)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
              </div>
              <input
                type="text"
                className="flex-1 bg-transparent px-6 py-4 outline-0 font-mono text-xs tracking-[0.2em] uppercase text-white placeholder-gray-600 transition-all"
                placeholder="TERMINAL: ENTER_AI_ADJUSTMENTS..."
                onFocus={() => setChatFocused(true)}
                onBlur={() => setChatFocused(false)}
              />
              <button className="mr-2 bg-white/5 text-gray-400 px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#FF7849] hover:text-black transition-all active:scale-95 border border-white/10 hover:border-transparent">
                Execute
              </button>
            </div>

            {/* POPULAR ROADMAPS */}
            <div className="w-full mt-8 space-y-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FF7849] rounded-full animate-pulse" />
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">GLOBAL_TRENDING_PATHS</h3>
                </div>
                <button className="text-[9px] text-[#4F86C6] font-black uppercase tracking-widest hover:text-white transition-colors">VIEW_ALL_INDEX →</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Full-Stack Web3", level: "Lvl_2", hrs: "120", users: "14.2k" },
                  { title: "Cloud DevOps Architecture", level: "Lvl_1", hrs: "80", users: "9.8k" },
                  { title: "AI/ML Systems", level: "Lvl_2", hrs: "150", users: "18.5k" },
                  { title: "Cybersecurity Analyst", level: "Lvl_0", hrs: "60", users: "7.3k" }
                ].map((roadmap, i) => (
                  <div key={i} className="group relative bg-white/2 border border-white/5 p-6 rounded-3xl hover:border-white/20 transition-all cursor-pointer overflow-hidden flex flex-col justify-between h-44 hover:-translate-y-1 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
                    <div className="absolute -right-10 -top-10 w-28 h-28 bg-white/10 blur-[40px] rounded-full transition-opacity duration-500 opacity-20 group-hover:opacity-40" />
                    <div className="relative z-10">
                      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 mb-3 border border-white/10 inline-block px-2 py-1 rounded bg-black/30">
                        {roadmap.level} // {roadmap.hrs}H
                      </p>
                      <h4 className="text-sm font-black text-gray-300 leading-snug uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                        {roadmap.title}
                      </h4>
                    </div>
                    <div className="flex justify-between items-center relative z-10 border-t border-white/5 pt-3 mt-2">
                      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{roadmap.users} SYNCED</p>
                      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <span className="text-[10px] font-black">→</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
