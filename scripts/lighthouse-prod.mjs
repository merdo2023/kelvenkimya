import { spawn } from 'node:child_process'
import { setTimeout as sleep } from 'node:timers/promises'

const PORT = process.env.PORT ?? '3003'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? `http://localhost:${PORT}`
const URL = `${SITE_URL}/tr`

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: process.platform === 'win32',
      ...options,
    })

    child.on('error', reject)
    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`${command} exited with code ${code}`))
    })
  })
}

async function waitForServer() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(URL, { method: 'HEAD' })
      if (response.ok) return
    } catch {
      // Server not ready yet.
    }

    await sleep(1000)
  }

  throw new Error(`Server did not become ready at ${URL}`)
}

const server = spawn('npm', ['run', 'start'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, PORT, NEXT_PUBLIC_SITE_URL: SITE_URL },
})

try {
  await waitForServer()

  await run('npx', [
    'lighthouse',
    URL,
    '--only-categories=performance,accessibility,best-practices,seo',
    '--chrome-flags=--headless --no-sandbox',
    '--output=html',
    '--output=json',
    '--output-path=./lighthouse-report',
    '--quiet',
  ])

  console.log('\nLighthouse report saved to lighthouse-report.report.html')
} finally {
  server.kill('SIGTERM')
}
