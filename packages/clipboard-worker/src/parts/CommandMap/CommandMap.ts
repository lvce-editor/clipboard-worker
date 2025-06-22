import * as ClipBoard from '../ClipBoard/ClipBoard.ts'

export const commandMap = {
  'ClipBoard.readNativeFiles': ClipBoard.readNativeFiles,
  'ClipBoard.writeNativeFiles': ClipBoard.writeNativeFiles,
  'ClipBoard.writeText': ClipBoard.writeText,
  // TODO add handlemessageport
}
