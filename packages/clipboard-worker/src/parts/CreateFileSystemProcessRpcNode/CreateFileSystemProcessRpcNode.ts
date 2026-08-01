import { type Rpc, WebSocketRpcParent } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { VError } from '@lvce-editor/verror'
import * as GetWebSocketUrl from '../GetWebSocketUrl/GetWebSocketUrl.ts'
import * as Location from '../Location/Location.ts'

const createWebSocket = async (): Promise<WebSocket> => {
  try {
    const { protocols, url } = (await RendererWorker.invoke('WebSocketCapability.create', 'clipboard-process')) as {
      readonly protocols: string[]
      readonly url: string
    }
    return new WebSocket(url, protocols)
  } catch (error) {
    if (!(error instanceof Error && error.message.includes('WebSocketCapability.create') && /command not found|not found/i.test(error.message))) {
      throw error
    }
    const host = Location.getHost()
    const protocol = Location.getProtocol()
    return new WebSocket(GetWebSocketUrl.getWebSocketUrl('clipboard-process', host, protocol))
  }
}

export const createClipBoardProcessRpcNode = async (): Promise<Rpc> => {
  try {
    const webSocket = await createWebSocket()
    const rpc = await WebSocketRpcParent.create({
      commandMap: {},
      webSocket,
    })
    return rpc
  } catch (error) {
    throw new VError(error, `Failed to create clipboard system process rpc`)
  }
}
