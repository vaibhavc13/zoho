import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"

export default function Docs() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Documents</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="hover:bg-accent/50 transition-colors cursor-pointer">
                        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                            <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                            <CardTitle className="text-sm font-medium">Project Specs v{i}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs text-muted-foreground">Edited 2 hours ago</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
