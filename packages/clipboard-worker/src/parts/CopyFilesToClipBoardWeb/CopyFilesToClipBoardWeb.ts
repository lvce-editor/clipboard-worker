import { getClipBoardItemOptions } from '../GetClipBoardItemOptions/GetClipBoardItemOptions.ts'
import * as MemoryClipBoardState from '../MemoryClipBoardState/MemoryClipBoardState.ts'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'

export const copyFilesToClipBoardWeb = async (files: readonly string[]): Promise<void> => {
  if (MemoryClipBoardState.get()) {
    MemoryClipBoardState.writeFiles(files)
    return
  }
  const options = getClipBoardItemOptions(files)
  // @ts-ignore
  await RendererProcess.invoke('ClipBoard.write', options)
}
