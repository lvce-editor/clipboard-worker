import * as Platform from '../Platform/Platform.ts'
import * as PlatformType from '../PlatformType/PlatformType.ts'
import * as SharedProcess from '../SharedProcess/SharedProcess.ts'
import { VError } from '../VError/VError.ts'

export const readNativeFiles = async (): Promise<any> => {
  try {
    if (Platform.platform === PlatformType.Web) {
      throw new Error('not supported')
    }
    // @ts-ignore
    return await SharedProcess.invoke(/* command */ 'ClipBoard.readFiles')
  } catch (error) {
    throw new VError(error, 'Failed to read files from native clipboard')
  }
}
