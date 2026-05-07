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
          <a key={tool.title} href="#" className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-emerald-500 text-2xl">
                <FontAwesomeIcon icon={tool.iconDef} />
              </div>
              <h3 className="font-bold text-sm">{tool.title}</h3>
            </div>
            <p className="text-xs text-slate-500 mb-6">{tool.description}</p>
            <div className="mt-auto text-right text-slate-600">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}