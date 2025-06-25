import * as Exec from '../Exec/Exec.ts'
import * as JoinLines from '../JoinLines/JoinLines.ts'
import { VError } from '../VError/VError.ts'

const addPrefix = (file: string): string => {
  return `file://${file}`
}

export const copyFilesToClipBoardGnome = async (type: string, files: string[]): Promise<void> => {
  const filesWithPrefix = files.map(addPrefix)
  const gnomeCopiedFilesContent = JoinLines.joinLines([type, ...filesWithPrefix])
  const uriListContent = JoinLines.joinLines(filesWithPrefix)
  const plainContent = JoinLines.joinLines(files)
  try {
    await Exec.exec('xclip', ['-i', '-selection', 'clipboard', '-t', 'x-special/gnome-copied-files'], {
      input: gnomeCopiedFilesContent,
    })
    await Exec.exec('xclip', ['-i', '-selection', 'clipboard', '-t', 'text/uri-list'], {
      input: uriListContent,
    })
    await Exec.exec('xclip', ['-i', '-selection', 'clipboard', '-t', 'text/plain'], {
      input: plainContent,
    })
  } catch (error: any) {
    throw new VError(error, 'Failed to copy files to clipboard')
  }
}
