import { type Rpc } from '@lvce-editor/rpc'
import { getRpcFactory } from '../GetRpcFactory/GetRpcFactory.ts'

export const createClipBoardProcessRpc = async (platform: number): Promise<Rpc> => {
  const create = getRpcFactory(platform)
  return create()
}
