import type { ExecArgs } from '../ExecArgs/ExecArgs.ts'
import { getWriteNativeFilesArgsTextUriList } from '../GetWriteNativeFilesArgsXclipTextUriList/GetWriteNativeFilesArgsTextUriList.ts'

export const getWriteNativeFilesArgsXClip = (files: readonly string[]): readonly ExecArgs[] => {
  // TODO multiple formats are not supported by xclip
  return [
    // getWriteNativeFilesArgsTextPlain(files),
    getWriteNativeFilesArgsTextUriList(files),
    // getWriteNativeFilesArgsXClipGnomeCopiedFiles(files)
  ]
}
