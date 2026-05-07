import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShieldHalved,
  faBars,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  const navItems = ['Home', 'Operations', 'SOPs & Policies', 'Tools & Reports', 'HR Resources', 'Help']

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faBars} className="text-xl text-slate-500 mr-4 md:hidden" />
          <div className="flex items-center justify-center relative">
            <div className="w-8 h-9 bg-orange-500 rounded-bl-full rounded-br-full absolute opacity-90" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}></div>
            <div className="w-8 h-9 bg-[#1a365d] rounded-bl-full rounded-br-full absolute opacity-90" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}></div>
            <span className="text-white font-bold text-lg z-10 font-sans">V</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-800 ml-2">VeraTru</span>
        </div>
        <div className="hidden md:flex space-x-10 text-[15px] font-semibold text-slate-500">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={item === 'Home' ? 'text-[#1a365d] border-b-2 border-[#1a365d] pb-1' : 'hover:text-slate-900 pb-1 transition-colors'}
            >
              {item}
            </a>
          ))}
        </div>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-slate-500 text-lg cursor-pointer hover:text-slate-800 transition-colors" />
        </div>
      </div>
    </nav>
  )
}