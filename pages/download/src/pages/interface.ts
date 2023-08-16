export interface LatestVersionInfo {
  date: string
  version: string
  versionNumber: number
  bds: string
  ll: string
  title: string
  content: string
  llnet: string
  url: string
  files: File[]
}

export interface File {
  download: string
  name: string
  type: string
  size: number
  update: string
  path: string[]
}
