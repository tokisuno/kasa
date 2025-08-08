import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('weather', () => {
  it('runs weather cmd', async () => {
    const {stdout} = await runCommand('weather')
    expect(stdout).to.contain('hello world')
  })

  it('runs weather --name oclif', async () => {
    const {stdout} = await runCommand('weather --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
