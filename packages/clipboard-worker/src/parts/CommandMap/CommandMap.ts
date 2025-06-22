import * as ReadFilesNative from '../ReadFilesNative/ReadFilesNative.ts'
import * as WriteFilesNative from '../WriteFilesNative/WriteFilesNative.ts'
import * as WriteImage from '../WriteImage/WriteImage.ts'
import * as WriteText from '../WriteText/WriteText.ts'

export const commandMap = {
  'ClipBoard.readNativeFiles': ReadFilesNative.readNativeFiles,
  'ClipBoard.writeNativeFiles': WriteFilesNative.writeNativeFiles,
  'ClipBoard.writeText': WriteText.writeText,
  'ClipBoard.writeImage': WriteImage.writeImage,
  // TODO add handlemessageport
}
