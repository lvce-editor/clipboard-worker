import { toUri } from '../ToUri/ToUri.ts'

// TODO support multiple file uris
const getUris = (files: readonly string[]): readonly string[] => {
  return files.map(toUri)
}

export const getStdinGnomeCopiedFiles = (files: readonly string[]): string => {
  const uris = getUris(files)
  return ['copy', ...uris].join('\n')
}
