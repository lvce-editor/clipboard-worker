import * as Assert from '../Assert/Assert.ts'
import * as MemoryClipBoardState from '../MemoryClipBoardState/MemoryClipBoardState.ts'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'
import { VError } from '../VError/VError.ts'

export const writeText = async (text: string): Promise<void> => {
  try {
    Assert.string(text)
    if (MemoryClipBoardState.get()) {
      MemoryClipBoardState.writeText(text)
      return
    }
    // @ts-ignore
    await RendererProcess.invoke('ClipBoard.writeText', /* text */ text)
  } catch (error) {
    throw new VError(error, 'Failed to write text to clipboard')
  }
}
