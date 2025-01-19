import { ArrowRight, Play } from 'lucide-react';
import Nav from '../../components/ui/Nav';
import User from "../../assets/logo-me.png"
import Picture from "../../assets/landing3.jpg"

const Home = () => {
  return (
    <div className="max-w-full">
      <Nav />

      {/* Main Content */}
      <div className=" max-w-full grid grid-cols-1 md:grid-cols-3 h-screen sm:py-10">
        {/* Left Column */}
        <div className="col-span-1 md:col-span-2 md:p-6 bg-gray-40 border-b md:border-b-0 md:border-r border-gray-300">
          {/* Title Section */}
          <div className="">
            <div className="flex -space-x-2 mb-6">
              <img src={User} alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
              <img
                src={User}
                alt="Team member"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src={User}
                alt="Team member"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <div className='p-6'>
              <h1 className="text-5xl lg:text-5xl font-bold text-black mb-6 text-left">
                Effortless Event Management, Powered by AI <br />
                <span className="text-pink-900">~SpiralEvent</span>
              </h1>
              <p className="text-gray-600 text-xl mb-8 max-w-[540px]">
                Join SpiralEvent, where AI transforms the way you plan, organize, and
                execute events—because every detail matters.
              </p>
              <div className="flex justify-start py-2">
                <button className="bg-pink-900 text-white px-6 py-3 rounded-full text-lg">
                  Discover
                </button>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-12 md:w-2/3 p-8 sm:w-full">
            <div className="flex items-center justify-between border-b border-gray-300 pb-6 group cursor-pointer">
              <div>
                <h3 className="font-medium text-sm mb-1">PITCH DECKS</h3>
                <p className="text-gray-600">The latest trends</p>
              </div>
              <ArrowRight className="text-gray-400" size={20} />
            </div>

            <div className="flex items-center justify-between border-b border-gray-300 pb-6 group cursor-pointer">
              <div>
                <h3 className="font-medium text-sm mb-1">AI PRESENTATIONS</h3>
                <p className="text-gray-600">1000 + examples</p>
              </div>
              <ArrowRight className="text-gray-400" size={20} />
            </div>

            <div className="flex items-center justify-between border-b border-gray-300 pb-6 group cursor-pointer">
              <div>
                <h3 className="font-medium text-sm mb-1">E-COMMERCE</h3>
                <p className="text-gray-600">
                  Transforming ideas
                  <br />
                  into stellar designs
                </p>
              </div>
              <ArrowRight className="text-gray-400" size={20} />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="max-w-full h-auto">
          {/* Main Image Container */}
          <div className="relative">
            <div className=" rounded-full overflow-hidden p-6 bg-gray-100">
              <img
                src={Picture}
                alt="Team working"
                className="w-full  max-w-full h-auto object-cover top-12 py-6 flex justify-center items-center"
              />
            </div>

            {/* Play Button */}
            <button className="absolute top-6 right-8 bg-yellow-300 rounded-full px-4 py-2 flex items-center gap-2">
              <Play size={16} className="fill-current" />
              <span className="text-sm font-medium">Our Team</span>
            </button>

            {/* Stats Card */}
            <div className=" absolute top-20 md:top-40 -left-56  mb-2 bg-gray-900 text-white p-8 rounded-2xl shadow-lg  lg:w-[300px] sm:w-[80px]">
              <h4 className="text-xs font-medium mb-6">TESTIMONIALS</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>UX decisions</span>
                    <span>90+</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div className="bg-white w-[90%] h-1.5 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>Business projects</span>
                    <span>60+</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div className="bg-yellow-300 w-[60%] h-1.5 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>Innovative solutions</span>
                    <span>30+</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <div className="bg-white w-[30%] h-1.5 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          {/* <div className="absolute -top-4 -right-4 text-yellow-300 text-4xl">
            ✱
          </div>
          <div className="absolute -bottom-4 right-16 text-gray-900 text-4xl">
            ✱
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;