import { initializeRendererProcess } from '../InitializeRendererProcess/InitializeRendererProcess.ts'
import * as PlatformState from '../PlatformState/PlatformState.ts'

export const initialize = async (platform: number): Promise<void> => {
  PlatformState.set(platform)
  // TODO if platform is remote or electron, create shared process rpc
  await initializeRendererProcess()
}
