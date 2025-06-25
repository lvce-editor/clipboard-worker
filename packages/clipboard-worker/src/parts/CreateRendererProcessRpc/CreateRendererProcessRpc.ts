import { type Rpc, MessagePortRpcParent } from '@lvce-editor/rpc'
import { VError } from '@lvce-editor/verror'
import * as GetPortTuple from '../GetPortTuple/GetPortTuple.ts'
import { sendMessagePortToRendererProcess } from '../SendMessagePortToRendererProcess/SendMessagePortToRendererProcess.ts'

export const createRendererProcessRpc = async (): Promise<Rpc> => {
  try {
    const { port1, port2 } = GetPortTuple.getPortTuple()
    await sendMessagePortToRendererProcess(port2)
    const rpc = await MessagePortRpcParent.create({
      commandMap: {},
      messagePort: port1,
    })
    return rpc
  } catch (error) {
    throw new VError(error, `Failed to create renderer process rpc`)
  }
}
