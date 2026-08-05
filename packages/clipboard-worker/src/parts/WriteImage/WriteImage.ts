import * as MemoryClipBoardState from '../MemoryClipBoardState/MemoryClipBoardState.ts'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'
import { VError } from '../VError/VError.ts'

export const writeImage = async (blob: Blob): Promise<void> => {
  try {
    if (MemoryClipBoardState.get()) {
      MemoryClipBoardState.writeImage(blob)
      return
    }
    // @ts-ignore
    return await RendererProcess.invoke('ClipBoard.writeImage', blob)
  } catch (error) {
    throw new VError(error, 'Failed to write image to clipboard')
  }
}
