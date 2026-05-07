import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import ActionCard from './ActionCard'
import type { ActionCard as ActionCardType } from '../../lib/types'
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface CoreActionsProps {
  actions: (ActionCardType & { iconDef: IconDefinition })[]
}

export default function CoreActions({ actions }: CoreActionsProps) {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-2">
        <FontAwesomeIcon icon={faBolt} className="text-blue-800 text-xl" />
        <h2 className="text-xl font-bold text-slate-800">Core Actions</h2>
      </div>
      <p className="text-sm text-slate-500 mb-6">Your most used tools — one click away.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action) => (
          <ActionCard key={action.title} {...action} />
        ))}
      </div>
    </div>
  )
}