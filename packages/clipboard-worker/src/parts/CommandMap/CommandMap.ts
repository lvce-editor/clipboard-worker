import { terminate } from '@lvce-editor/viewlet-registry'
import * as WriteFiles from '../CopyFilesToClipBoard/CopyFilesToClipBoard.ts'
import * as EnableMemoryClipBoard from '../EnableMemoryClipBoard/EnableMemoryClipBoard.ts'
import * as HotReload from '../HotReload/HotReload.ts'
import * as Initialize from '../Initialize/Initialize.ts'
import * as ReadFilesNative from '../ReadFilesNative/ReadFilesNative.ts'
import * as ReadText from '../ReadText/ReadText.ts'
import * as WriteBlob from '../WriteBlob/WriteBlob.ts'
import * as WriteFilesNative from '../WriteFilesNative/WriteFilesNative.ts'
import * as WriteImage from '../WriteImage/WriteImage.ts'
import * as WriteText from '../WriteText/WriteText.ts'

export const commandMap = {
  'ClipBoard.disableMemoryClipBoard': EnableMemoryClipBoard.disableMemoryClipBoard,
  'ClipBoard.enableMemoryClipBoard': EnableMemoryClipBoard.enableMemoryClipBoard,
  'ClipBoard.hotReload': HotReload.hotReload,
  'ClipBoard.initialize': Initialize.initialize,
  'ClipBoard.readNativeFiles': ReadFilesNative.readNativeFiles,
  'ClipBoard.readText': ReadText.readText,
  'ClipBoard.terminate': terminate,
  'ClipBoard.writeBlob': WriteBlob.writeBlob,
  'ClipBoard.writeFiles': WriteFiles.copyFilesToClipBoard,
  'ClipBoard.writeImage': WriteImage.writeImage,
  'ClipBoard.writeNativeFiles': WriteFilesNative.writeNativeFiles,
  'ClipBoard.writeText': WriteText.writeText,
  // TODO add handlemessageport
}
