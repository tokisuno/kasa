import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('weather:now', () => {
  it('runs weather:now cmd', async () => {
    const {stdout} = await runCommand('weather:now')
    expect(stdout).to.contain('hello world')
  })

  it('runs weather:now --name oclif', async () => {
    const {stdout} = await runCommand('weather:now --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
