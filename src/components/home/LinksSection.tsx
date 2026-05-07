import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import type { LinkItem } from '../../lib/types'

interface LinksSectionProps {
  links: LinkItem[]
}

export default function LinksSection({ links }: LinksSectionProps) {
  return (
    <div className="bg-slate-50 border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col">
      <div className="flex items-center space-x-2 mb-4">
        <FontAwesomeIcon icon={faLink} className="text-[#1a365d] text-lg" />
        <h3 className="font-bold text-[#1a365d]">Helpful Links</h3>
      </div>
      <ul className="space-y-3 text-sm text-[#1a365d] font-medium">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="flex items-center justify-between hover:underline">
              <span>{link.label}</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-slate-400 text-xs" />
            </a>
          </li>
        ))}
      </ul>
      <a href="#" className="text-sm text-blue-600 font-medium mt-6 block text-right">
        View all links <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
      </a>
    </div>
  )
}