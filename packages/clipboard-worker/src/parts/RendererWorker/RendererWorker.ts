import { RendererWorker } from '@lvce-editor/rpc-registry'

export const {
  dispose,
  invoke,
  invokeAndTransfer,
  sendMessagePortToEditorWorker,
  sendMessagePortToExtensionHostWorker,
  sendMessagePortToRendererProcess,
  set,
} = RendererWorker
