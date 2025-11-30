import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import { HomeIcon, PlusCircleIcon, DocumentTextIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

interface Props {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: Props) {
  const navItems = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Create Post', href: '/create', icon: PlusCircleIcon },
    { name: 'My Posts', href: '/my-posts', icon: DocumentTextIcon },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  ]

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* سایدبار چپ */}
      <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-cyan-400">AffiliateFlow</h1>
        </div>
        <nav className="flex-1 p-4">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 mb-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* محتوای اصلی */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
