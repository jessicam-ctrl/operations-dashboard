import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import type { QuickHelpItem } from '../../lib/types'
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface QuickHelpProps {
  items: (QuickHelpItem & { iconDef: IconDefinition })[]
}

export default function QuickHelp({ items }: QuickHelpProps) {
  const variantClasses = {
    blue: 'bg-blue-50 text-blue-600 border border-blue-100',
    slate: 'bg-slate-100 text-slate-600',
    indigo: 'bg-indigo-50 text-indigo-600 border border-indigo-100'
  }

  return (
    <div>
      <div className="flex items-center space-x-2 mb-2">
        <FontAwesomeIcon icon={faCircleQuestion} className="text-[#1a365d] text-xl" />
        <h2 className="text-xl font-bold text-slate-800">Quick Help</h2>
      </div>
      <p className="text-sm text-slate-500 mb-6">Answers to common questions.</p>

      <div className="bg-white border border-gray-200 rounded-xl p-2 shadow-sm space-y-1">
        {items.map((item) => (
          <a
            key={item.question}
            href="#"
            className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition border-b border-gray-100 pb-4"
          >
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 rounded-full ${variantClasses[item.variant || 'blue']} flex items-center justify-center`}>
                <FontAwesomeIcon icon={item.iconDef} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1a365d]">{item.question}</h4>
              </div>
            </div>
            <FontAwesomeIcon icon={faChevronRight} className="text-slate-400 text-xs" />
          </a>
        ))}
      </div>
    </div>
  )
}