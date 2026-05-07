import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import type { ActionCard as ActionCardType } from '../../lib/types'

interface ActionCardProps extends ActionCardType {
  iconDef: IconDefinition
}

export default function ActionCard({ title, description, href, iconDef, color = 'blue', shape = 'circle' }: ActionCardProps) {
  const bgColorClass = {
    blue: 'bg-[#1a365d]',
    emerald: 'bg-emerald-500',
    indigo: 'bg-indigo-600',
    slate: 'bg-slate-600'
  }

  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-lg'

  const isSpecial = shape === 'rounded' && color !== 'blue'
  const iconWrapperClass = isSpecial
    ? 'border-2 border-blue-400 bg-blue-50 text-blue-600'
    : `${bgColorClass[color]} text-white`

  return (
    <a href={href} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
      <div className={`w-16 h-16 ${iconWrapperClass} ${shapeClass} flex items-center justify-center text-2xl mb-4 shadow-inner`}>
        <FontAwesomeIcon icon={iconDef} />
      </div>
      <h3 className="font-bold text-sm mb-4">
        {title}
        {description && <><br /><span className="font-normal text-slate-500">{description}</span></>}
      </h3>
      <FontAwesomeIcon icon={faArrowRight} className="text-[#1a365d] mt-auto" />
    </a>
  )
}