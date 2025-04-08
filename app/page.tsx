import { CommandReference } from "@/components/command-reference"
import { HelpCircle, Terminal, Server, GitBranch, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Server className="h-6 w-6" />
            <h1 className="text-xl font-bold">Ambient Mesh (Lab)cumentation</h1>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:underline">
              Documentation
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              GitHub
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              Community
            </a>
            <a href="#" className="text-sm font-medium hover:underline">
              Blog
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container py-12">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Ambient Mesh (Lab)cumentation</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive reference guide for Ambient Mesh commands and architecture
            </p>
          </div>
        </section>

        <section className="container py-8">

          <div className="mx-auto max-w-6xl space-y-8">

            <div className="grid gap-6 md:grid-cols-2">

              <div className="space-y-4">
                
                <div className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">About Ambient Mesh</h2>
                </div>

                <div className="rounded-lg border p-4 space-y-4">
                  <p className="text-muted-foreground">
                    Ambient mesh is an open source service mesh architecture that simplifies and extends traditional
                    service mesh models. Unlike traditional service meshes, the ambient mesh architecture removes the
                    requirement of running a sidecar alongside each app in your mesh.
                  </p>
                  <p className="text-muted-foreground">
                    Instead, you can route from proxies to reach Layer 4 traffic in the ambient mesh, and use waypoint
                    proxies to apply Layer 7 policies wherever needed. Because of that, ambient mesh simplifies
                    operations, reduces performance, and reduces overhead.
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-lg border p-4 mt-4">
                  <GitBranch className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Ambient Mesh Architecture</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      The architecture consists of two communication layers:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        • <strong>Layer 4 communication flow:</strong> Manages basic transport-level traffic (e.g.,
                        TCP/UDP)
                      </li>
                      <li>
                        • <strong>Layer 7 communication flow:</strong> Handles application-level traffic (e.g., HTTP),
                        enabling smart routing and filtering
                      </li>
                      <li>
                        • <strong>Waypoint proxy:</strong> Enforces Layer 7 policies like routing, authentication, or retries.
                      </li>
                      <li>
                        • <strong>Control plane:</strong> Configures and coordinates the service mesh components and
                        policies
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">How to Use This Reference</h2>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-muted-foreground">
                    Hover over any command in the reference below to see a detailed description of what it does and how
                    to use it. This interactive reference provides quick access to all the essential Ambient Mesh
                    commands.
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <ExternalLink className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-medium">Getting Started</h3>
                </div>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm">
                    <code>$ istioctl install --set profile=ambient</code>
                  </pre>
                </div>
              </div>
            </div>

            <CommandReference />

            <div className="mt-12 space-y-4 rounded-lg border p-6">
              <h2 className="text-2xl font-bold">View Ambient Mesh Metrics</h2>
              <p className="text-muted-foreground">Note: You must install Prometheus first.</p>
              <div className="mt-4 space-y-4">
                <p className="text-sm text-muted-foreground">Ambient mesh exposes the Prometheus expression browser:</p>
                <div className="rounded-md bg-muted p-4">
                  <pre className="text-sm">
                    <code>$ istioctl dashboard prometheus</code>
                  </pre>
                </div>
                <p className="text-sm text-muted-foreground">
                  You can use Prometheus Query Language (PromQL) to run queries against metrics in Layer 4 or Layer 7
                  metrics.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ambient Mesh Documentation. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

