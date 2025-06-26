interface ClipBoardItem {
  readonly [key: string]: Blob
}

const resourcesMime = 'application/vnd.lvce.resources'

export const getClipBoardItemOptions = (resources: readonly string[]): readonly ClipBoardItem[] => {
  return [
    {
      [`web ${resourcesMime}`]: new Blob([JSON.stringify(resources.map((x) => x))], {
        type: resourcesMime,
      }),
    },
  ]
}
