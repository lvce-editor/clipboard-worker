import * as RendererProcess from '../RendererProcess/RendererProcess.ts'
import { VError } from '../VError/VError.ts'

export const writeBlob = async (blob: any): Promise<void> => {
  try {
    // @ts-ignore
    return await RendererProcess.invoke('ClipBoard.writeImage', blob)
  } catch (error) {
    throw new VError(error, 'Failed to write blob to clipboard')
  }
}
