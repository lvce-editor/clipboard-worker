export interface ExecArgs {
  readonly args: readonly string[]
  readonly command: string
  readonly stdin: string
  readonly stdio: readonly string[]
}
