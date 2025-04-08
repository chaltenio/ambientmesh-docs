import type { Command } from "@/lib/types"
import { CommandCard } from "@/components/command-card"

interface CommandSectionProps {
  title: string
  commands: Command[]
}

export function CommandSection({ title, commands }: CommandSectionProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
        {commands.map((command, index) => (
          <CommandCard key={index} command={command} />
        ))}
      </div>
    </div>
  )
}

