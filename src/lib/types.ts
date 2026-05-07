export interface ActionCard {
  title: string
  description?: string
  icon: string
  href: string
  color?: 'blue' | 'emerald' | 'indigo' | 'slate'
  shape?: 'circle' | 'rounded'
}

export interface Announcement {
  title: string
  date?: string
  content: string
}

export interface QuickHelpItem {
  question: string
  icon: string
  variant?: 'blue' | 'slate' | 'indigo'
}

export interface ToolCard {
  title: string
  description: string
  icon: string
}

export interface ProcedureCard {
  title: string
  description: string
  icon: string
  color?: 'indigo' | 'blue' | 'amber'
}

export interface Reminder {
  text: string
}

export interface LinkItem {
  label: string
  href: string
}