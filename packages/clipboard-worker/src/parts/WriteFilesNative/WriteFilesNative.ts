import { copyFilesToClipBoardWeb } from '../CopyFilesToClipBoardWeb/CopyFilesToClipBoardWeb.ts'
import { VError } from '../VError/VError.ts'

export const writeNativeFiles = async (type: string, files: readonly string[]): Promise<void> => {
  try {
    await copyFilesToClipBoardWeb(files)
  } catch (error) {
    throw new VError(error, 'Failed to write files clipboard')
  }
}
