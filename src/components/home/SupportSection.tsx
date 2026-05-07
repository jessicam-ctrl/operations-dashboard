import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

export default function SupportSection() {
  return (
    <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 flex flex-col">
      <div className="flex items-center space-x-2 mb-2">
        <FontAwesomeIcon icon={faHeadset} className="text-[#1a365d] text-lg" />
        <h3 className="font-bold text-[#1a365d]">Need Support?</h3>
      </div>
      <p className="text-sm text-slate-600 mb-6">Can't find what you need?<br />We're here to help.</p>

      <div className="mt-auto space-y-3">
        <button className="w-full bg-[#1a365d] hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
          Submit a Ticket
        </button>
        <button className="w-full bg-white border border-[#1a365d] text-[#1a365d] hover:bg-slate-50 font-medium py-2 px-4 rounded-lg transition duration-200">
          View Help Center
        </button>
      </div>
    </div>
  )
}