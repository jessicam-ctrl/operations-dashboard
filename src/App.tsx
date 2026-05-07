import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import {
  Hero,
  CoreActions,
  QuickHelp,
  ToolsSection,
  ProceduresSection,
  RemindersSection,
  LinksSection,
  SupportSection
} from './components/home'
import {
  faFileInvoiceDollar,
  faFileExcel,
  faMagnifyingGlass,
  faClipboardList,
  faDollarSign,
  faUsers,
  faCopy,
  faQuestion,
  faFileLines,
  faListUl,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons'
import { announcements, coreActions, quickHelpItems, tools, procedures, reminders, helpfulLinks } from './lib/data'

config.autoAddCss = false

function App() {
  const actionsWithIcons = coreActions.map((action) => {
    const iconMap: Record<string, typeof faFileInvoiceDollar> = {
      'file-invoice-dollar': faFileInvoiceDollar,
      'file-excel': faFileExcel,
      'magnifying-glass': faMagnifyingGlass,
      'clipboard-list': faClipboardList
    }
    return { ...action, iconDef: iconMap[action.icon] }
  })

  const helpWithIcons = quickHelpItems.map((item) => {
    const iconMap: Record<string, typeof faDollarSign> = {
      'dollar-sign': faDollarSign,
      'users': faUsers,
      'copy': faCopy,
      'question': faQuestion
    }
    return { ...item, iconDef: iconMap[item.icon] }
  })

  const toolsWithIcons = tools.map((tool) => ({ ...tool, iconDef: faFileExcel }))

  const proceduresWithIcons = procedures.map((proc) => {
    const iconMap: Record<string, typeof faFileLines> = {
      'file-lines': faFileLines,
      'list-ul': faListUl,
      'triangle-exclamation': faTriangleExclamation
    }
    return { ...proc, iconDef: iconMap[proc.icon] }
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Hero announcements={announcements} />

      <div className="max-w-4xl mx-auto -mt-10 relative z-10 px-4 w-full">
        <div className="bg-white rounded-xl shadow-lg flex items-center px-6 py-4 border border-gray-100">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-slate-400 text-lg mr-4" />
          <input type="text" placeholder="Search for documents, tools, and more..." className="w-full focus:outline-none text-slate-700 bg-transparent text-[15px]" />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 pt-8 pb-16 w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CoreActions actions={actionsWithIcons} />
          </div>
          <div>
            <QuickHelp items={helpWithIcons} />
          </div>
        </div>

        <ToolsSection tools={toolsWithIcons} />
        <ProceduresSection procedures={proceduresWithIcons} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RemindersSection reminders={reminders} />
          <LinksSection links={helpfulLinks} />
          <SupportSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App