import { RendererWorker } from '@lvce-editor/rpc-registry'

export const dispose = (...args: Readonly<Parameters<typeof RendererWorker.dispose>>): ReturnType<typeof RendererWorker.dispose> =>
  RendererWorker.dispose(...args)

export const invoke = (...args: Readonly<Parameters<typeof RendererWorker.invoke>>): ReturnType<typeof RendererWorker.invoke> =>
  RendererWorker.invoke(...args)

export const invokeAndTransfer = (
  ...args: Readonly<Parameters<typeof RendererWorker.invokeAndTransfer>>
): ReturnType<typeof RendererWorker.invokeAndTransfer> => RendererWorker.invokeAndTransfer(...args)

export const sendMessagePortToEditorWorker = (
  ...args: Readonly<Parameters<typeof RendererWorker.sendMessagePortToEditorWorker>>
): ReturnType<typeof RendererWorker.sendMessagePortToEditorWorker> => RendererWorker.sendMessagePortToEditorWorker(...args)

export const sendMessagePortToExtensionHostWorker = (
  ...args: Readonly<Parameters<typeof RendererWorker.sendMessagePortToExtensionHostWorker>>
): ReturnType<typeof RendererWorker.sendMessagePortToExtensionHostWorker> => RendererWorker.sendMessagePortToExtensionHostWorker(...args)

export const sendMessagePortToRendererProcess = (
  ...args: Readonly<Parameters<typeof RendererWorker.sendMessagePortToRendererProcess>>
): ReturnType<typeof RendererWorker.sendMessagePortToRendererProcess> => RendererWorker.sendMessagePortToRendererProcess(...args)

export const set = (...args: Readonly<Parameters<typeof RendererWorker.set>>): ReturnType<typeof RendererWorker.set> => RendererWorker.set(...args)
