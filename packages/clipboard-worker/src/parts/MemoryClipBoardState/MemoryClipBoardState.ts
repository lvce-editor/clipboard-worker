let enabled = false

export const set = (value: boolean): void => {
  enabled = value
}

export const get = (): boolean => {
  return enabled
}
