import { initializeRendererProcess } from '../InitializeRendererProcess/InitializeRendererProcess.ts'

export const initialize = async (platform: number): Promise<void> => {
  // TODO if platform is remote or electron, create shared process rpc
  await initializeRendererProcess()
}
