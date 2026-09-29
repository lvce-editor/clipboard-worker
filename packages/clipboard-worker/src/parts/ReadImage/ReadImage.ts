import * as MemoryClipBoardState from '../MemoryClipBoardState/MemoryClipBoardState.ts'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'

export const readImage = async (): Promise<Blob | undefined> => {
  if (MemoryClipBoardState.get()) {
    return MemoryClipBoardState.readImage()
  }
  return RendererProcess.invoke('ClipBoard.readImage')
}
