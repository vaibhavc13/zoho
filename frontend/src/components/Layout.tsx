import { Link, useLocation } from 'wouter'
import { LayoutDashboard, CheckSquare, FileText, Search, Settings, Activity } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Layout({ children }: { children: React.ReactNode }) {
    const [location] = useLocation()

    const navItems = [
        { href: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { href: '/tasks', icon: CheckSquare, label: 'Tasks' },
        { href: '/docs', icon: FileText, label: 'Documents' },
        { href: '/search', icon: Search, label: 'Search' },
        { href: '/settings', icon: Settings, label: 'Settings' },
    ]

    return (
        <div className="flex h-screen bg-background text-foreground">
            {/* Sidebar */}
            <aside className="w-64 border-r bg-card">
                <div className="p-6">
                    <h1 className="text-2xl font-bold">Notion+Cliq</h1>
                </div>
                <nav className="space-y-1 px-4">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <a className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                location === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                            )}>
                                <item.icon className="h-4 w-4" />
                                {item.label}
                            </a>
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8">
                {children}
            </main>
        </div>
    )
}
