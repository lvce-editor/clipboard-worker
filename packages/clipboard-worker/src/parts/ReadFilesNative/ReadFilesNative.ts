import type { NativeFilesResult } from '../NativeFilesResult/NativeFilesResult.ts'
import { readFilesFromClipBoardWeb } from '../ReadFilesFromClipBoardWeb/ReadFilesFromClipBoardWeb.ts'
import { VError } from '../VError/VError.ts'

export const readNativeFiles = async (): Promise<NativeFilesResult> => {
  try {
    const uris = await readFilesFromClipBoardWeb()
    return {
      type: 'copy',
      files: uris,
    }
  } catch (error) {
    throw new VError(error, 'Failed to read files from native clipboard')
  }
}
