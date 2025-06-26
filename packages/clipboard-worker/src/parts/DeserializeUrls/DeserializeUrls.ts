export const deserializeUrls = async (clipBoardItems: readonly any[]): Promise<readonly string[]> => {
  const urls: string[] = []
  for (const item of clipBoardItems) {
    const { blob } = item
    const text = await blob.text()
    const parsed = JSON.parse(text)
    urls.push(...parsed)
  }
  return urls
}
