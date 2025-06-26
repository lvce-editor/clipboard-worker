import * as ClipBoardProcess from '../ClipBoardProcess/ClipBoardProcess.ts'
import { createClipBoardProcessRpc } from '../CreateClipBoardProcessRpc/CreateClipBoardProcessRpc.ts'
import * as PlatformType from '../PlatformType/PlatformType.ts'

const clipboardProcessEnabled = false

export const initializeSharedProcess = async (platform: number): Promise<void> => {
  if (platform === PlatformType.Web) {
    return
  }
  if (clipboardProcessEnabled) {
    const rpc = await createClipBoardProcessRpc(platform)
    ClipBoardProcess.set(rpc)
  }
}
