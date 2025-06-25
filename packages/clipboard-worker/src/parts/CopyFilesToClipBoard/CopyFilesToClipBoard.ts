import { copyFilesToClipBoardGnome } from '../CopyFilesToClipBoardGnome/CopyFilesToClipBoardGnome.ts'

const isGnome = (): boolean => {
  return true
}

export const copyFilesToClipBoard = async (type: string, files: string[]): Promise<void> => {
  if (isGnome()) {
    return copyFilesToClipBoardGnome(type, files)
  }
}
