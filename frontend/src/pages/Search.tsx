import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search as SearchIcon } from "lucide-react"

export default function Search() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Search</h2>
            <div className="relative">
                <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search tasks, docs, and more..." className="pl-8" />
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-medium">Recent Results</h3>
                <Card>
                    <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">No recent searches</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
