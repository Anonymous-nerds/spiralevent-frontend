import { ArrowRight, Play } from 'lucide-react';
import Nav from '../../components/ui/Nav';
import User from "../../assets/logo-me.png"
import Picture from "../../assets/rb_68859.png"

const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-6 bg-white">
      {/* Navigation */}
      <Nav />

      {/* Main Content */}
      <div className="grid grid-cols-[1fr,auto] gap-20">
        {/* Left Column */}
        <div>
          {/* Title Section */}
          <div className="mb-24">
            <div className="flex -space-x-2 mb-6">
              <img src={User} alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src={User} alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
              <img src={User} alt="Team member" className="w-8 h-8 rounded-full border-2 border-white" />
            </div>
            <h1 className="text-[64px] leading-[1.1] font-semibold mb-6">
              The Art and Science<br />of Crafting<br />Exceptional Designs
            </h1>
            <p className="text-gray-600 text-xl mb-8 max-w-[540px]">
              Transforming ideas into stellar designs requires a dynamic blend
              of creativity, technical expertise, and user-focused thinking.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg">
              Discover
            </button>
          </div>

          {/* Features List */}
          <div className="space-y-12">
            <div className="flex items-center justify-between border-b border-gray-200 pb-6 group cursor-pointer">
              <div>
                <h3 className="font-medium text-sm mb-1">PITCH DECKS</h3>
                <p className="text-gray-600">The latest trends</p>
              </div>
              <ArrowRight className="text-gray-400" size={20} />
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 pb-6 group cursor-pointer">
              <div>
                <h3 className="font-medium text-sm mb-1">AI PRESENTATIONS</h3>
                <p className="text-gray-600">1000 + examples</p>
              </div>
              <ArrowRight className="text-gray-400" size={20} />
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 pb-6 group cursor-pointer">
              <div>
                <h3 className="font-medium text-sm mb-1">E-COMMERCE</h3>
                <p className="text-gray-600">Transforming ideas<br />into stellar designs</p>
              </div>
              <ArrowRight className="text-gray-400" size={20} />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative w-[600px]">
          {/* Background Grid */}
          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[url('/grid.png')] bg-contain bg-no-repeat"></div>

          {/* Main Image Container */}
          <div className="relative">
            <div className="w-[550px] h-[550px] rounded-full overflow-hidden bg-gray-100">
              <img
                src={Picture}
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Play Button */}
            <button className="absolute top-8 right-8 bg-yellow-300 rounded-full px-4 py-2 flex items-center gap-2">
              <Play size={16} className="fill-current" />
              <span className="text-sm font-medium">Our Team</span>
            </button>

            {/* Stats Card */}
            <div className="absolute -left-16 bottom-20 bg-gray-900 text-white p-8 rounded-2xl w-[320px]">
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
          <div className="absolute -top-4 -right-4 text-yellow-300 text-4xl">✱</div>
          <div className="absolute -bottom-4 right-16 text-gray-900 text-4xl">✱</div>
        </div>
      </div>
    </div>
  );
};

export default Home;