"use client"

import { useState } from "react"
import type { Command } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Terminal } from "lucide-react"

interface CommandCardProps {
  command: Command
}

export function CommandCard({ command }: CommandCardProps) {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <Card
      className="relative overflow-hidden transition-all duration-200 hover:shadow-md"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Terminal className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
          <div className="space-y-1 w-full">
            <div className="font-mono text-sm">{command.syntax}</div>
            {showDescription && (
              <div className="mt-2 text-sm text-muted-foreground animate-in fade-in-0 slide-in-from-bottom-2">
                {command.description}
                {command.options && (
                  <div className="mt-2">
                    <div className="font-medium text-xs uppercase text-muted-foreground/70 mb-1">Options:</div>
                    <div className="grid grid-cols-1 gap-1">
                      {command.options.map((option, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="font-mono text-xs whitespace-nowrap">{option.flag}</div>
                          <div className="text-xs text-muted-foreground">{option.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {command.example && (
                  <div className="mt-2">
                    <div className="font-medium text-xs uppercase text-muted-foreground/70 mb-1">Example:</div>
                    <pre className="bg-muted p-2 rounded text-xs overflow-x-auto">{command.example}</pre>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

