"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Define the command data structure
interface Command {
  selector: string
  description: string
  position: { x: number; y: number; width: number; height: number }
}

export function CommandTooltip() {
  const [activeCommand, setActiveCommand] = useState<Command | null>(null)
  const [showTooltip, setShowTooltip] = useState(false)

  // Define the commands and their positions on the image
  const commands: Command[] = [
    {
      selector: "$ istioctl install --set profile=ambient",
      description: "Install Ambient Mesh with the ambient profile.",
      position: { x: 254, y: 36, width: 250, height: 20 },
    },
    {
      selector: "$ kubectl label namespace $NAMESPACE istio.io/dataplane-mode=ambient",
      description: "Add all workloads in a namespace by labeling the namespace.",
      position: { x: 254, y: 200, width: 400, height: 20 },
    },
    {
      selector: "$ kubectl label pod $POD istio.io/dataplane-mode=ambient",
      description: "Add a specific workload by labeling the pod.",
      position: { x: 254, y: 230, width: 350, height: 20 },
    },
    {
      selector: "$ istioctl ztunnel-config workload",
      description: "Review which ztunnel manages a particular workload.",
      position: { x: 254, y: 300, width: 250, height: 20 },
    },
    {
      selector: "$ istioctl ztunnel-config service",
      description: "Check services the ztunnel tracks.",
      position: { x: 254, y: 350, width: 250, height: 20 },
    },
    {
      selector: "$ istioctl ztunnel-config certificate $ZTUNNEL",
      description: "View the istio certificates that the ztunnel is configured with.",
      position: { x: 254, y: 400, width: 300, height: 20 },
    },
    {
      selector: "$ istioctl waypoint generate --for service",
      description: "Generate a waypoint proxy configuration YAML.",
      position: { x: 254, y: 500, width: 300, height: 20 },
    },
    {
      selector: "$ istioctl waypoint apply",
      description: "Apply a waypoint proxy config.",
      position: { x: 254, y: 550, width: 200, height: 20 },
    },
    {
      selector: "$ istioctl waypoint list -A",
      description: "List waypoint proxies in all namespaces.",
      position: { x: 254, y: 600, width: 200, height: 20 },
    },
    {
      selector: "$ istioctl dashboard prometheus",
      description: "View ambient mesh metrics. Note: You must install Prometheus first.",
      position: { x: 254, y: 700, width: 250, height: 20 },
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Check if mouse is over any command
    const hoveredCommand = commands.find((cmd) => {
      const { position } = cmd
      return x >= position.x && x <= position.x + position.width && y >= position.y && y <= position.y + position.height
    })

    if (hoveredCommand) {
      setActiveCommand(hoveredCommand)
      setShowTooltip(true)
    } else {
      setShowTooltip(false)
    }
  }

  return (
    <TooltipProvider>
      <div className="relative cursor-help" onMouseMove={handleMouseMove} onMouseLeave={() => setShowTooltip(false)}>
        <Tooltip open={showTooltip}>
          <TooltipTrigger asChild>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ambient-cheatsheet.png-y8JTaEUhhRPGQSrA74ZXSUMvx7n2yG.jpeg"
                alt="Ambient Mesh Cheat Sheet"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
              {commands.map((cmd, index) => (
                <div
                  key={index}
                  className="absolute border-2 border-transparent hover:border-primary/50 rounded-sm transition-colors"
                  style={{
                    left: `${cmd.position.x}px`,
                    top: `${cmd.position.y}px`,
                    width: `${cmd.position.width}px`,
                    height: `${cmd.position.height}px`,
                  }}
                />
              ))}
            </div>
          </TooltipTrigger>
          {activeCommand && (
            <TooltipContent side="top" className="max-w-md p-4 bg-popover text-popover-foreground">
              <div className="space-y-2">
                <p className="font-bold">{activeCommand.selector}</p>
                <p>{activeCommand.description}</p>
              </div>
            </TooltipContent>
          )}
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

