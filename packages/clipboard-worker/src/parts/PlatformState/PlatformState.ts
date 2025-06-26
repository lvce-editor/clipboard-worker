let platform = 0

export const get = (): number => {
  return platform
}

export const set = (value: number): void => {
  platform = value
}
