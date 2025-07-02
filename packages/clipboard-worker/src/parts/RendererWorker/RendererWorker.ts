import { RendererWorker } from '@lvce-editor/rpc-registry'

export const {
  invoke,
  set,
  invokeAndTransfer,
  dispose,
  sendMessagePortToEditorWorker,
  sendMessagePortToExtensionHostWorker,
  sendMessagePortToRendererProcess,
} = RendererWorker
