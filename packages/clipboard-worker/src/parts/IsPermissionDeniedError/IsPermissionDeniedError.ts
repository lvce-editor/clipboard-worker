export const isPermissionDeniedError = (error: unknown): boolean => {
  return error instanceof Error && error.message === 'Read permission denied.'
}
