import { getClipBoardItemOptions } from '../GetClipBoardItemOptions/GetClipBoardItemOptions.ts'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'

export const copyFilesToClipBoardWeb = async (files: readonly string[]): Promise<void> => {
  const options = getClipBoardItemOptions(files)
  // @ts-ignore
  await RendererProcess.invoke('ClipBoard.write', options)
}
