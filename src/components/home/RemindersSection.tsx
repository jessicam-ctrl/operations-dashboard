import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faArrowRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import type { Reminder } from '../../lib/types'

interface RemindersSectionProps {
  reminders: Reminder[]
}

export default function RemindersSection({ reminders }: RemindersSectionProps) {
  return (
    <div className="bg-slate-50 border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col">
      <div className="flex items-center space-x-2 mb-4">
        <FontAwesomeIcon icon={faBell} className="text-[#1a365d] text-lg" />
        <h3 className="font-bold text-[#1a365d]">Daily Reminders</h3>
      </div>
      <ul className="space-y-3 text-sm text-slate-600">
        {reminders.map((reminder, i) => (
          <li key={i} className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faCircleCheck} className="text-slate-400" />
            <span>{reminder.text}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="text-sm text-blue-600 font-medium mt-6 block text-right">
        View full checklist <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
      </a>
    </div>
  )
}