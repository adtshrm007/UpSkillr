import NavBar from "../components/common/Navbar";
export default function GenerateRoadmap() {
  return (
    <>
      <div className="bg-[#080808] min-h-screen w-full flex flex-col lg:flex-row font-mono text-gray-200 overflow-x-hidden selection:bg-[#FF7849]/30">
        <NavBar />
        <main className="flex-1 p-4 lg:p-10 lg:pl-32 xl:pl-44 overflow-y-auto overflow-x-hidden gap-50">
          <div className="w-full justify-self-start">
            <div className="w-full flex justify-between">
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#FF7849] font-black mb-3 px-1 animate-pulse">
                Your path from learning to mastery.
              </p>
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#4F86C6] font-black mb-3 px-1 cursor-pointer">
                My Roadmaps&rarr;
              </p>
            </div>
            <p className="text-4xl text-white font-black italic uppercase">
              Build Your <span className="text-[#FF7849]">Personalized</span>
              {"  "}
              Learning <span className="text-[#4F86C6]">Roadmap</span>
            </p>
          </div>
          <div className="h-255 w-full flex flex-col justify-evenly">
            <div className="h-[5%] w-full border border-gray-500 backdrop-blur-xl rounded-[50px] flex justify-between items-center">
              <div className="w-[5%] h-[80%] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#FF7849]/50 group-focus-within:text-[#FF7849] transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <div className="w-[80%] h-full flex items-center justify-between">
                <input
                  type="text"
                  className="w-[70%] h-full p-5 border-0 outline-0"
                  placeholder="Enter Your Goal"
                />
                <select name="" id="" className="bg-[#080808] font-black">
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div className="w-[10%] h-[80%] flex items-center justify-center">
                <p className="text-[#4F86C6] font-black uppercase italic text-[15px] cursor-pointer">
                  Search
                </p>
              </div>
            </div>
            <div className="h-[85%] w-full rounded-[30px] flex flex-col item-center justify-between">
              <div className="w-full h-[90%] border border-dashed border-gray-500 rounded-[30px] flex items-center justify-center">
                <p className="font-black uppercase italic">
                  <span className="text-[#FF7849]">RoadMap</span> Will be{" "}
                  <span className="text-[#4F86C6]">Generated</span> Here
                </p>
              </div>
              <div className="w-full h-[7%] border border-gray-500 rounded-[30px] flex items-center justify-evenly justify-center">
                <input
                  type="text"
                  className="w-[85%] h-full p-5 outline-0 font-mono text-[15px]"
                  placeholder="Hi! I am UpSkillr AI.Any Changes Required in the Roadmap?"
                />
                <div className="w-[10%] flex justify-center">
                  <p className="h-[80%] font-black uppercase text-center text-[#4F86C6] text-[15px] italic">
                    Execute
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
