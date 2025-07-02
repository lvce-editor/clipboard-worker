import { type Rpc, TransferMessagePortRpcParent } from '@lvce-editor/rpc'
import { VError } from '@lvce-editor/verror'
import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const createRendererProcessRpc = async (): Promise<Rpc> => {
  try {
    const rpc = await TransferMessagePortRpcParent.create({
      commandMap: {},
      send: RendererWorker.sendMessagePortToRendererProcess,
    })
    return rpc
  } catch (error) {
    throw new VError(error, `Failed to create renderer process rpc`)
  }
}
