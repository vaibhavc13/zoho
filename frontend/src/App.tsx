import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Switch } from 'wouter'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Docs from './pages/Docs'
import Search from './pages/Search'
import Settings from './pages/Settings'

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Switch>
                    <Route path="/" component={Dashboard} />
                    <Route path="/tasks" component={Tasks} />
                    <Route path="/docs" component={Docs} />
                    <Route path="/search" component={Search} />
                    <Route path="/settings" component={Settings} />
                    <Route>404 Not Found</Route>
                </Switch>
            </Layout>
        </QueryClientProvider>
    )
}

export default App
