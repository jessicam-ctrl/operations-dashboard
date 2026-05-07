import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faClone, faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-[#0f2041] text-white py-6 px-8 mt-12 border-t-4 border-blue-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-[#0f2041] font-bold text-sm">
            <FontAwesomeIcon icon={faShieldHalved} />
          </div>
          <span className="font-medium text-sm">VeraTru Operations Portal</span>
        </div>
        <div className="flex items-center space-x-6 text-sm text-slate-300">
          <span>Stay connected</span>
          <a href="#" className="hover:text-white">
            <FontAwesomeIcon icon={faClone} />
          </a>
          <a href="#" className="hover:text-white">
            <FontAwesomeIcon icon={faUserGroup} />
          </a>
          <a href="#" className="hover:text-white">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </footer>
  )
}