import { RpcId } from '@lvce-editor/rpc-registry'
import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const sendMessagePortToRendererProcess = async (port: MessagePort): Promise<void> => {
  const command = 'HandleMessagePort.handleMessagePort'
  // @ts-ignore
  await RendererWorker.invokeAndTransfer('SendMessagePortToExtensionHostWorker.sendMessagePortToRendererProcess', port, command, RpcId.DebugWorker)
}
