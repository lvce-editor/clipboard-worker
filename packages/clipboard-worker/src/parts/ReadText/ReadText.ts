import * as RendererProcess from '../RendererProcess/RendererProcess.ts'
import { VError } from '../VError/VError.ts'

export const readText = async (): Promise<any> => {
  try {
    // @ts-ignore
    return await RendererProcess.invoke('ClipBoard.readText')
  } catch (error) {
    // @ts-ignore
    if (error.message === 'Read permission denied.') {
      throw new VError('Failed to read text from clipboard: The Browser disallowed reading from clipboard')
    }
    if (
      // @ts-ignore
      error.message === 'navigator.clipboard.readText is not a function'
    ) {
      throw new VError('Failed to read text from clipboard: The Clipboard Api is not available in Firefox')
    }
    throw new VError(error, 'Failed to read text from clipboard')
  }
}
