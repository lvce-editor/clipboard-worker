let enabled = false
let files: readonly string[] = []

export const set = (value: boolean): void => {
  enabled = value
}

export const get = (): boolean => {
  return enabled
}

export const writeFiles = (value: readonly string[]): void => {
  files = value
}

export const readFiles = (): readonly string[] => {
  return files
}
