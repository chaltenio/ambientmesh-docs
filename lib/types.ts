export interface CommandOption {
  flag: string
  description: string
}

export interface Command {
  syntax: string
  description: string
  options?: CommandOption[]
  example?: string
  output?: string
}

export interface CommandCategory {
  [key: string]: {
    [key: string]: Command[]
  }
}

