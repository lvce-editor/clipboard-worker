export interface ExecArgs {
  readonly command: string
  readonly args: readonly string[]
  readonly stdin: string
  readonly stdio: readonly string[]
}
