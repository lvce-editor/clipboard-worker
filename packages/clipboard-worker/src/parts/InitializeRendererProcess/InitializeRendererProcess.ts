import { createRendererProcessRpc } from '../CreateRendererProcessRpc/CreateRendererProcessRpc.ts'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'

export const initializeRendererProcess = async (): Promise<void> => {
  const rpc = await createRendererProcessRpc()
  RendererProcess.set(rpc)
}
