import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Tasks() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>All Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {/* Placeholder for task list */}
                        <div className="flex items-center justify-between border-b pb-4">
                            <div>
                                <p className="font-medium">Update documentation</p>
                                <p className="text-sm text-muted-foreground">In Progress</p>
                            </div>
                            <div className="text-sm text-muted-foreground">Today</div>
                        </div>
                        <div className="flex items-center justify-between border-b pb-4">
                            <div>
                                <p className="font-medium">Review PR #123</p>
                                <p className="text-sm text-muted-foreground">Todo</p>
                            </div>
                            <div className="text-sm text-muted-foreground">Tomorrow</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
