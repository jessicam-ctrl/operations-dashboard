import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import type { ProcedureCard } from '../../lib/types'
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface ProceduresSectionProps {
  procedures: (ProcedureCard & { iconDef: IconDefinition })[]
}

export default function ProceduresSection({ procedures }: ProceduresSectionProps) {
  const colorClasses = {
    indigo: 'text-indigo-500',
    blue: 'text-blue-400',
    amber: 'text-amber-500'
  }

  return (
    <div>
      <div className="flex items-center space-x-2 mb-2">
        <FontAwesomeIcon icon={faBookOpen} className="text-[#1a365d] text-xl" />
        <h2 className="text-xl font-bold text-slate-800">Standard Procedures</h2>
      </div>
      <p className="text-sm text-slate-500 mb-6">Step-by-step guides and procedures.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {procedures.map((proc) => (
          <a key={proc.title} href="#" className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex items-start space-x-4">
            <div className={`${colorClasses[proc.color || 'indigo']} text-3xl`}>
              <FontAwesomeIcon icon={proc.iconDef} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-sm mb-1">{proc.title}</h3>
              <p className="text-xs text-slate-500">{proc.description}</p>
            </div>
            <div className="mt-auto self-end text-slate-600">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}