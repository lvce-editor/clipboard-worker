import * as ClipBoardProcess from '../ClipBoardProcess/ClipBoardProcess.ts'
import { getWriteNativeFilesArgs } from '../GetWriteNativeFilesArgs/GetWriteNativeFilesArgs.ts'
import * as PlatformState from '../PlatformState/PlatformState.ts'
import * as PlatformType from '../PlatformType/PlatformType.ts'
import { VError } from '../VError/VError.ts'

export const writeNativeFiles = async (type: string, files: readonly string[]): Promise<void> => {
  try {
    const platform = PlatformState.get()
    if (platform === PlatformType.Web) {
      throw new Error('not supported')
    }
    const { command, args, stdin, stdio } = getWriteNativeFilesArgs(files)
    // @ts-ignore
    await ClipBoardProcess.invoke(/* command */ 'ClipBoard.exec', command, args, stdin, stdio)
  } catch (error) {
    throw new VError(error, 'Failed to write files to native clipboard')
  }
}
