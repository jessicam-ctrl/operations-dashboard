import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import type { Announcement } from '../../lib/types'

interface HeroProps {
  announcements: Announcement[]
}

export default function Hero({ announcements }: HeroProps) {
  return (
    <div className="hero-bg text-white px-8 pt-20 pb-28 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 max-w-xl mt-4 md:-mt-8">
          <h1 className="text-[42px] leading-tight font-bold mb-4 tracking-tight">Operations Dashboard</h1>
          <p className="text-lg text-slate-300">Post payments, validate cases, and access tools in seconds.</p>
        </div>

        <div className="bg-[#0b1731] bg-opacity-80 rounded-xl p-6 w-full md:w-[400px] border border-slate-700 shadow-lg">
          <div className="flex items-center space-x-2 mb-4">
            <FontAwesomeIcon icon={faBullhorn} className="text-white" />
            <h3 className="font-semibold text-white">Announcements</h3>
          </div>
          <ul className="space-y-4 text-sm text-slate-300">
            {announcements.map((ann, i) => (
              <li key={i}>
                <span className="block font-medium text-white">• {ann.title}</span>
                {ann.date || ann.content}
              </li>
            ))}
          </ul>
          <a href="#" className="text-sm font-medium mt-4 inline-block hover:underline">
            View all announcements <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  )
}