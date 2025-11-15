import { deserializeUrls } from '../DeserializeUrls/DeserializeUrls.ts'
import * as MemoryClipBoardState from '../MemoryClipBoardState/MemoryClipBoardState.ts'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'
import { resourcesMime } from '../ResourcesMimeType/ResourcesMimeType.ts'

export const readFilesFromClipBoardWeb = async (): Promise<readonly string[]> => {
  if (MemoryClipBoardState.get()) {
    return MemoryClipBoardState.readFiles()
  }
  const options = {
    format: `web ${resourcesMime}`,
  }
  // @ts-ignore
  const items = await RendererProcess.invoke('ClipBoard.read', options)
  const urls = await deserializeUrls(items as any)
  return urls
}
