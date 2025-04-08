"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CommandSection } from "@/components/command-section"
import { commandData } from "@/lib/command-data"

export function CommandReference() {
  return (
    <div className="rounded-lg border">
      <Tabs defaultValue="installation" className="w-full">
        <div className="border-b px-4 py-2">
          <h2 className="text-xl font-bold">Interactive Command Reference</h2>
          <p className="text-sm text-muted-foreground">Hover over commands to see descriptions</p>
          <TabsList className="mt-4 grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="workloads">Workloads</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="ztunnel">Ztunnel</TabsTrigger>
            <TabsTrigger value="waypoint">Waypoint</TabsTrigger>
            <TabsTrigger value="upgrade">Upgrade</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="installation" className="p-4 space-y-6">
          <CommandSection title="Setup and Installation" commands={commandData.installation.setup} />
        </TabsContent>

        <TabsContent value="workloads" className="p-4 space-y-6">
          <CommandSection title="Check workloads the ztunnel tracks" commands={commandData.workloads.check} />
          <CommandSection title="Add workloads to the mesh" commands={commandData.workloads.add} />
        </TabsContent>

        <TabsContent value="services" className="p-4 space-y-6">
          <CommandSection title="Check services the ztunnel tracks" commands={commandData.services.check} />
        </TabsContent>

        <TabsContent value="ztunnel" className="p-4 space-y-6">
          <CommandSection title="Global ztunnel options" commands={commandData.ztunnel.options} />
          <CommandSection title="Get ztunnel certificates" commands={commandData.ztunnel.certificates} />
          <CommandSection title="View ztunnel configuration" commands={commandData.ztunnel.configuration} />
          <CommandSection title="View and configure ztunnel log level" commands={commandData.ztunnel.logLevel} />
          <CommandSection title="View ztunnel logs" commands={commandData.ztunnel.logs} />
          <CommandSection title="View ztunnel policies" commands={commandData.ztunnel.policies} />
          <CommandSection title="Verify mTLS is enabled" commands={commandData.ztunnel.mtls} />
        </TabsContent>

        <TabsContent value="waypoint" className="p-4 space-y-6">
          <CommandSection title="Global waypoint proxy options" commands={commandData.waypoint.options} />
          <CommandSection title="Generate a waypoint proxy config" commands={commandData.waypoint.generate} />
          <CommandSection title="Apply a waypoint proxy config" commands={commandData.waypoint.apply} />
          <CommandSection title="Get waypoint proxies" commands={commandData.waypoint.get} />
          <CommandSection title="Get waypoint proxy status" commands={commandData.waypoint.status} />
          <CommandSection title="Get waypoint proxy configuration" commands={commandData.waypoint.config} />
          <CommandSection title="Remove waypoint proxy" commands={commandData.waypoint.delete} />
        </TabsContent>

        <TabsContent value="upgrade" className="p-4 space-y-6">
          <CommandSection title="Upgrade an ambient mesh" commands={commandData.upgrade.ambient} />
        </TabsContent>

        <TabsContent value="metrics" className="p-4 space-y-6">
          <CommandSection title="View ambient mesh metrics" commands={commandData.metrics.view} />
          <CommandSection title="Layer 4 metrics" commands={commandData.metrics.layer4} />
          <CommandSection title="Layer 7 metrics" commands={commandData.metrics.layer7} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

