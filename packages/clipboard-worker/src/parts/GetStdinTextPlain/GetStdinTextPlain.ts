export const getStdinTextPlain = (files: readonly string[]): string => {
  return files.join('\n')
}
