import * as Platform from '../Platform/Platform.ts'
import * as PlatformType from '../PlatformType/PlatformType.ts'
import * as SharedProcess from '../SharedProcess/SharedProcess.ts'
import { VError } from '../VError/VError.ts'

export const writeNativeFiles = async (type: string, files: readonly string[]): Promise<void> => {
  try {
    if (Platform.platform === PlatformType.Web) {
      throw new Error('not supported')
    }
    // @ts-ignore

    await SharedProcess.invoke(/* command */ 'ClipBoard.writeFiles', /* type */ type, /* files */ files)
  } catch (error) {
    throw new VError(error, 'Failed to write files to native clipboard')
  }
}
