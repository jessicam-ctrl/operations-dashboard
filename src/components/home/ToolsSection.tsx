import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import type { ToolCard } from '../../lib/types'
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface ToolsSectionProps {
  tools: (ToolCard & { iconDef: IconDefinition })[]
}

export default function ToolsSection({ tools }: ToolsSectionProps) {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-2">
        <FontAwesomeIcon icon={faChartColumn} className="text-[#1a365d] text-xl" />
        <h2 className="text-xl font-bold text-slate-800">Tools & Reports</h2>
      </div>
      <p className="text-sm text-slate-500 mb-6">Access reports, trackers, and operational tools.</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <a key={tool.title} href="#" className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-100 transition-all flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-emerald-500 text-2xl">
                <FontAwesomeIcon icon={tool.iconDef} />
              </div>
              <h3 className="font-bold text-[15px] text-slate-800">{tool.title}</h3>
            </div>
            <p className="text-[13px] text-slate-500 mb-6">{tool.description}</p>
            <div className="mt-auto text-right text-slate-400 hover:text-slate-600 transition-colors">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}