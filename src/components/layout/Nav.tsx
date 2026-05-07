import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShieldHalved,
  faBars,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  const navItems = ['Home', 'Operations', 'SOPs & Policies', 'Tools & Reports', 'HR Resources', 'Help']

  return (
    <nav className="bg-white flex justify-between items-center px-8 py-4 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <FontAwesomeIcon icon={faBars} className="text-xl text-slate-500 mr-2" />
        <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center text-white font-bold text-lg">
          <FontAwesomeIcon icon={faShieldHalved} />
        </div>
        <span className="text-2xl font-bold tracking-tight text-slate-800">VeraTru</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className={item === 'Home' ? 'text-[#1a365d] border-b-2 border-[#1a365d] pb-1' : 'hover:text-slate-900 pb-1'}
          >
            {item}
          </a>
        ))}
      </div>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-slate-500 text-lg cursor-pointer" />
      </div>
    </nav>
  )
}