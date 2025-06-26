import { resourcesMime } from '../ResourcesMimeType/ResourcesMimeType.ts'

interface ClipBoardItem {
  readonly [key: string]: Blob
}

export const getClipBoardItemOptions = (resources: readonly string[]): readonly ClipBoardItem[] => {
  return [
    {
      [`web ${resourcesMime}`]: new Blob([JSON.stringify(resources.map((x) => x))], {
        type: resourcesMime,
      }),
    },
  ]
}
