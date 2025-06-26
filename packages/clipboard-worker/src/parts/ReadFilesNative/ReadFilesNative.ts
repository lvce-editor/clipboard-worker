import { readFilesFromClipBoardWeb } from '../ReadFilesFromClipBoardWeb/ReadFilesFromClipBoardWeb.ts'
import { VError } from '../VError/VError.ts'

export const readNativeFiles = async (): Promise<any> => {
  try {
    return await readFilesFromClipBoardWeb()
  } catch (error) {
    throw new VError(error, 'Failed to read files from native clipboard')
  }
}
