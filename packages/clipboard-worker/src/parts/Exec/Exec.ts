import * as SharedProcess from '../SharedProcess/SharedProcess.ts'

export const exec = async (command: string, ...args: readonly any[]): Promise<void> => {
  // @ts-ignore
  await SharedProcess.invoke('Exec.exec', command, ...args)
}
