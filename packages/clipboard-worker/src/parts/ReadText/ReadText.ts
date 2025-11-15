import { isClipboardUnsupportedError } from '../IsClipboardUnsupportedError/IsClipboardUnsupportedError.ts'
import { isPermissionDeniedError } from '../IsPermissionDeniedError/IsPermissionDeniedError.ts'
import * as MemoryClipBoardState from '../MemoryClipBoardState/MemoryClipBoardState.ts'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'
import { VError } from '../VError/VError.ts'

export const readText = async (): Promise<string> => {
  try {
    if (MemoryClipBoardState.get()) {
      return MemoryClipBoardState.readText()
    }
    // @ts-ignore
    return await RendererProcess.invoke('ClipBoard.readText')
  } catch (error) {
    if (isPermissionDeniedError(error)) {
      throw new VError('Failed to read text from clipboard: The Browser disallowed reading from clipboard')
    }
    if (isClipboardUnsupportedError(error)) {
      throw new VError('Failed to read text from clipboard: The Clipboard Api is not available in Firefox')
    }
    throw new VError(error, 'Failed to read text from clipboard')
  }
}
