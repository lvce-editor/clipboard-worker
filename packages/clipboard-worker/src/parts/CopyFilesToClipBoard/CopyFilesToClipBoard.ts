import { copyFilesToClipBoardGnome } from '../CopyFilesToClipBoardGnome/CopyFilesToClipBoardGnome.ts'
import { copyFilesToClipBoardWeb } from '../CopyFilesToClipBoardWeb/CopyFilesToClipBoardWeb.ts'

const isGnome = (): boolean => {
  return false
}

export const copyFilesToClipBoard = async (type: string, files: string[]): Promise<void> => {
  if (isGnome()) {
    return copyFilesToClipBoardGnome(type, files)
  }
  await copyFilesToClipBoardWeb(files)
}
