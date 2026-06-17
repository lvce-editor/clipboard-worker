import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'clipboard.editor-copy-text'

export const test: Test = async ({ ClipBoard, Editor, FileSystem, Page }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  const filePath = `${tmpDir}/test-file.txt`
  const testContent = 'Hello, World! This is test content for clipboard.'
  await FileSystem.writeFile(filePath, testContent)
  
  // enable memory clipboard for testing
  await ClipBoard.invoke('ClipBoard.enableMemoryClipBoard')
  
  // open editor with the test file
  await Editor.openFile(filePath)
  
  // select some text
  await Page.selectText('Hello, World!')
  
  // act - copy the selected text
  await Page.keyboard.press('Meta+C') // or 'Control+C' on Windows/Linux
  
  // assert - verify clipboard content
  const clipboardContent = await ClipBoard.invoke('ClipBoard.readMemoryText')
  if (clipboardContent !== 'Hello, World!') {
    throw new Error(`Expected clipboard content to be 'Hello, World!' but got '${clipboardContent}'`)
  }
}
