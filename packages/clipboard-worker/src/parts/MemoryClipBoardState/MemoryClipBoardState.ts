let enabled = false
let files: readonly string[] = []
let image: Blob | undefined
let text = ''

export const set = (value: boolean): void => {
  enabled = value
}

export const get = (): boolean => {
  return enabled
}

export const writeFiles = (value: readonly string[]): void => {
  files = value
}

export const writeText = (value: string): void => {
  text = value
}

export const writeImage = (value: Blob | undefined): void => {
  image = value
}

export const readText = (): string => {
  return text
}

export const readFiles = (): readonly string[] => {
  return files
}

export const readImage = (): Blob | undefined => {
  return image
}
