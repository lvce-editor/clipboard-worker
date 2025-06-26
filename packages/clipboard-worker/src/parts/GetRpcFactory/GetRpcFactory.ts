import { type Rpc } from '@lvce-editor/rpc'
import { createClipBoardProcessRpcElectron } from '../CreateFileSystemProcessRpcElectron/CreateFileSystemProcessRpcElectron.ts'
import { createClipBoardProcessRpcNode } from '../CreateFileSystemProcessRpcNode/CreateFileSystemProcessRpcNode.ts'
import * as PlatformType from '../PlatformType/PlatformType.ts'

interface RpcFactory {
  (): Promise<Rpc>
}

export const getRpcFactory = (platform: number): RpcFactory => {
  switch (platform) {
    case PlatformType.Electron:
      return createClipBoardProcessRpcElectron
    case PlatformType.Remote:
      return createClipBoardProcessRpcNode
    default:
      throw new Error(`unexpected platform`)
  }
}
