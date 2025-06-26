import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

const id = 3401

export const sendMessagePortToClipBoardProcess = async (port: MessagePort): Promise<void> => {
  const command = 'HandleMessagePortForClipBoardProcess.handleMessagePortClipBoardProcess'
  await RendererWorker.invokeAndTransfer('SendMessagePortToExtensionHostWorker.sendMessagePortToSharedProcess', port, command, id)
}
