import type { ActionCard, Announcement, QuickHelpItem, ToolCard, ProcedureCard, Reminder, LinkItem } from './types'

export const announcements: Announcement[] = [
  {
    title: 'System maintenance on IDRE Portal',
    date: 'Saturday, May 25th from 10PM - 2AM EST.',
    content: 'Scheduled maintenance window for system updates.'
  },
  {
    title: 'New SOP: Handling Duplicate Payments',
    content: 'is now available.'
  }
]

export const coreActions: ActionCard[] = [
  {
    title: 'Post Payments',
    description: '(IDRE Portal)',
    icon: 'file-invoice-dollar',
    href: '#',
    color: 'blue',
    shape: 'circle'
  },
  {
    title: 'Main Deposit Sheet',
    description: '',
    icon: 'file-excel',
    href: '#',
    color: 'emerald',
    shape: 'rounded'
  },
  {
    title: 'Check Case / Overview',
    icon: 'magnifying-glass',
    href: '#',
    color: 'blue',
    shape: 'circle'
  },
  {
    title: 'Daily Workflow Guide',
    icon: 'clipboard-list',
    href: '#',
    color: 'blue',
    shape: 'rounded'
  }
]

export const quickHelpItems: QuickHelpItem[] = [
  {
    question: 'Amount doesn\'t match',
    icon: 'dollar-sign',
    variant: 'blue'
  },
  {
    question: 'IP vs NIP',
    icon: 'users',
    variant: 'slate'
  },
  {
    question: 'Duplicate payments',
    icon: 'copy',
    variant: 'indigo'
  },
  {
    question: 'Missing case / Unknown case',
    icon: 'question',
    variant: 'blue'
  }
]

export const tools: ToolCard[] = [
  {
    title: 'Operations Sheet (Main)',
    description: 'Use this for daily posting.',
    icon: 'file-excel'
  },
  {
    title: 'Tracking Sheet',
    description: 'Track discrepancies and follow ups.',
    icon: 'file-excel'
  },
  {
    title: 'Reports / Dashboards',
    description: 'Daily and weekly reports.',
    icon: 'file-excel'
  },
  {
    title: 'Payment Logs',
    description: 'Historical payment logs and details.',
    icon: 'file-excel'
  }
]

export const procedures: ProcedureCard[] = [
  {
    title: 'Full SOP',
    description: 'Complete Standard Operating Procedures.',
    icon: 'file-lines',
    color: 'indigo'
  },
  {
    title: 'Posting Payments',
    description: 'Step-by-step guide to post payments.',
    icon: 'list-ul',
    color: 'blue'
  },
  {
    title: 'Handling Exceptions',
    description: 'How to handle special cases and exceptions.',
    icon: 'triangle-exclamation',
    color: 'amber'
  }
]

export const reminders: Reminder[] = [
  { text: 'Check IDRE for new payments' },
  { text: 'Verify amounts and customer info' },
  { text: 'Post payments in the main sheet' },
  { text: 'Update case status' },
  { text: 'Log any exceptions' }
]

export const helpfulLinks: LinkItem[] = [
  { label: 'IDRE Overview', href: '#' },
  { label: 'Client Portal', href: '#' },
  { label: 'ACH / Bank Info', href: '#' },
  { label: 'Fee Schedule', href: '#' },
  { label: 'Training Center', href: '#' }
]