import { existsSync, readFileSync, renameSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const outDir = resolve(process.cwd(), 'out')
const docsDir = resolve(process.cwd(), 'docs')
const exportDetailPath = resolve(process.cwd(), '.next', 'export-detail.json')

let exportDir = outDir

if (!existsSync(exportDir) && existsSync(exportDetailPath)) {
  const exportDetail = JSON.parse(readFileSync(exportDetailPath, 'utf8'))

  if (exportDetail?.success && exportDetail?.outDirectory) {
    exportDir = exportDetail.outDirectory
  }
}

if (!existsSync(exportDir)) {
  throw new Error(
    'Expected Next.js to generate a static export directory, but it was not found after build.'
  )
}

rmSync(docsDir, { recursive: true, force: true })
renameSync(exportDir, docsDir)

console.log('Static export synced to docs/.')
