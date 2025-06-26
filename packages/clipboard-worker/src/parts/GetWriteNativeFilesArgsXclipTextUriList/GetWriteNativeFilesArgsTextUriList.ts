import type { ExecArgs } from '../ExecArgs/ExecArgs.ts'
import { getStdinTextUriList } from '../GetStdinTextUriList/GetStdinTextUriList.ts'

export const getWriteNativeFilesArgsTextUriList = (files: readonly string[]): ExecArgs => {
  const stdin = getStdinTextUriList(files)
  return {
    command: 'xclip',
    args: ['-selection', '-l', '1', 'clipboard', '-t', 'text/uri-list'],
    stdin: stdin,
    stdio: ['pipe', 'ignore', 'ignore'],
  }
}
