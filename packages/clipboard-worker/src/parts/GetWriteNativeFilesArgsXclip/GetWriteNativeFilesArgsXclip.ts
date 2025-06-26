import type { ExecArgs } from '../ExecArgs/ExecArgs.ts'
import { getStdinGnomeCopiedFiles } from '../GetStdinGnomeCopiedFIles/GetStdinGnomeCopiedFiles.ts'
import { getStdinTextPlain } from '../GetStdinTextPlain/GetStdinTextPlain.ts'
import { getStdinTextUriList } from '../GetStdinTextUriList/GetStdinTextUriList.ts'

const getWriteNativeFilesArgsXClipGnomeCopiedFiles = (files: readonly string[]): ExecArgs => {
  const stdin = getStdinGnomeCopiedFiles(files)
  return {
    command: 'xclip',
    args: ['-selection', 'clipboard', '-t', 'x-special/gnome-copied-files'],
    stdin: stdin,
    stdio: ['pipe', 'ignore', 'ignore'],
  }
}

const getWriteNativeFilesArgsTextUriList = (files: readonly string[]): ExecArgs => {
  const stdin = getStdinTextUriList(files)
  return {
    command: 'xclip',
    args: ['-selection', 'clipboard', '-t', 'text/uri-list'],
    stdin: stdin,
    stdio: ['pipe', 'ignore', 'ignore'],
  }
}

const getWriteNativeFilesArgsTextPlain = (files: readonly string[]): ExecArgs => {
  const stdin = getStdinTextPlain(files)
  return {
    command: 'xclip',
    args: ['-selection', 'clipboard', '-t', 'text/plain;charset=utf-8'],
    stdin: stdin,
    stdio: ['pipe', 'ignore', 'ignore'],
  }
}

export const getWriteNativeFilesArgsXClip = (files: readonly string[]): readonly ExecArgs[] => {
  return [getWriteNativeFilesArgsXClipGnomeCopiedFiles(files), getWriteNativeFilesArgsTextUriList(files), getWriteNativeFilesArgsTextPlain(files)]
}
