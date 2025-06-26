import * as RendererProcess from '../RendererProcess/RendererProcess.ts'
import { resourcesMime } from '../ResourcesMimeType/ResourcesMimeType.ts'

const deserializeUrls = async (clipBoardItems: readonly any[]): Promise<readonly string[]> => {
  const urls: string[] = []
  for (const item of clipBoardItems) {
    const { blob } = item
    const text = await blob.text()
    const parsed = JSON.parse(text)
    urls.push(...parsed)
  }
  return urls
}

export const readFilesFromClipBoardWeb = async (): Promise<readonly any[]> => {
  const options = {
    format: `web ${resourcesMime}`,
  }
  // @ts-ignore
  const items = await RendererProcess.invoke('ClipBoard.read', options)
  const urls = await deserializeUrls(items as any)
  return urls
}
