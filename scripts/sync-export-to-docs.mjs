import { existsSync, renameSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const outDir = resolve(process.cwd(), 'out')
const docsDir = resolve(process.cwd(), 'docs')

if (!existsSync(outDir)) {
  throw new Error('Expected Next.js to generate "out/", but it was not found after build.')
}

rmSync(docsDir, { recursive: true, force: true })
renameSync(outDir, docsDir)

console.log('Static export synced to docs/.')
