import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'

export default function SupportSection() {
  return (
    <div className="bg-slate-50 border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col">
      <div className="flex items-center space-x-2 mb-2">
        <FontAwesomeIcon icon={faHeadset} className="text-[#1a365d] text-lg" />
        <h3 className="font-bold text-[#1a365d]">Need Support?</h3>
      </div>
      <p className="text-[15px] text-slate-600 mb-6 leading-relaxed">Can't find what you need?<br />We're here to help.</p>

      <div className="mt-auto space-y-3">
        <button className="w-full bg-[#1a365d] hover:bg-[#13274f] text-white font-medium py-2.5 px-4 rounded-xl transition duration-200 shadow-sm">
          Submit a Ticket
        </button>
        <button className="w-full bg-white border border-gray-200 text-[#1a365d] hover:bg-slate-50 font-medium py-2.5 px-4 rounded-xl transition duration-200 shadow-sm">
          View Help Center
        </button>
      </div>
    </div>
  )
}