import { cp } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { root } from './root.js'

const sharedProcessPath = join(root, 'packages', 'server', 'node_modules', '@lvce-editor', 'shared-process', 'index.js')

const sharedProcessUrl = pathToFileURL(sharedProcessPath).toString()

const sharedProcess = await import(sharedProcessUrl)

process.env.PATH_PREFIX = '/clipboard-worker'
await sharedProcess.exportStatic({
  root,
  extensionPath: '',
})

// await cp(
//   join(root, '.tmp', 'dist', 'dist', 'clipBoardWorkerMain.js'),
//   join(root, 'dist', commitHash, 'packages', 'clipboard-worker', 'dist', 'clipBoardWorkerMain.js'),
// )

await cp(join(root, 'dist'), join(root, '.tmp', 'static'), { recursive: true })
