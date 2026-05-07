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
  
  const textColorClass = {
    blue: 'text-[#1a365d]',
    emerald: 'text-emerald-500',
    indigo: 'text-indigo-600',
    slate: 'text-slate-600'
  }

  let iconElement = null;

  if (shape === 'none') {
    iconElement = (
      <div className={`w-16 h-16 flex items-center justify-center text-[40px] mb-4 ${textColorClass[color]}`}>
        <FontAwesomeIcon icon={iconDef} />
      </div>
    );
  } else {
    const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-2xl'
    iconElement = (
      <div className={`w-16 h-16 ${bgColorClass[color]} text-white ${shapeClass} flex items-center justify-center text-2xl mb-4 shadow-sm`}>
        <FontAwesomeIcon icon={iconDef} />
      </div>
    );
  }

  return (
    <a href={href} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
      {iconElement}
      <h3 className="font-bold text-[15px] mb-4 text-slate-800">
        {title}
        {description && <><br /><span className="font-normal text-slate-500">{description}</span></>}
      </h3>
      <FontAwesomeIcon icon={faArrowRight} className="text-blue-600 mt-auto opacity-80" />
    </a>
  )
}