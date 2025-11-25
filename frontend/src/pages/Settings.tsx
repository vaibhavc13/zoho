import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Settings() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Settings</h2>

            <Card>
                <CardHeader>
                    <CardTitle>Notion Connection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Connected Workspace</p>
                            <p className="text-sm text-muted-foreground">Not connected</p>
                        </div>
                        <Button variant="outline">Connect Notion</Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <p className="font-medium">Dark Mode</p>
                        {/* Toggle would go here */}
                        <Button variant="outline" size="sm">Toggle</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
