import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'clipboard.explorer-copy-files'

export const test: Test = async ({ FileSystem, Page, Explorer, ClipBoard }) => {
  // arrange
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.mkdir(`${tmpDir}/test-folder`)
  await FileSystem.writeFile(`${tmpDir}/test-folder/file1.txt`, 'File 1 content')
  await FileSystem.writeFile(`${tmpDir}/test-folder/file2.txt`, 'File 2 content')
  await FileSystem.writeFile(`${tmpDir}/test-folder/subfolder/nested.txt`, 'Nested file content')
  
  // enable memory clipboard for testing
  await ClipBoard.invoke('ClipBoard.enableMemoryClipBoard')
  
  // open explorer and navigate to test folder
  await Explorer.open(tmpDir)
  
  // select multiple files and folders
  await Explorer.selectItem('test-folder/file1.txt')
  await Explorer.selectItem('test-folder/file2.txt', { multi: true })
  await Explorer.selectItem('test-folder/subfolder', { multi: true })
  
  // act - copy selected files (simulate handleCopy)
  await Page.keyboard.press('Meta+C') // or 'Control+C' on Windows/Linux
  
  // assert - verify clipboard contains file information
  const clipboardContent = await ClipBoard.invoke('ClipBoard.readMemoryText')
  
  // The clipboard should contain file paths or file URIs
  const expectedFiles = ['file1.txt', 'file2.txt', 'subfolder']
  for (const expectedFile of expectedFiles) {
    if (!clipboardContent.includes(expectedFile)) {
      throw new Error(`Expected clipboard content to contain '${expectedFile}' but got '${clipboardContent}'`)
    }
  }
}
