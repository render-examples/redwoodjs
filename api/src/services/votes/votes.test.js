import { votes, vote, createVote, updateVote, deleteVote } from './votes'

describe('votes', () => {
  scenario('returns all votes', async (scenario) => {
    const result = await votes()

    expect(result.length).toEqual(Object.keys(scenario.vote).length)
  })

  scenario('returns a single vote', async (scenario) => {
    const result = await vote({ id: scenario.vote.one.id })

    expect(result).toEqual(scenario.vote.one)
  })

  scenario('creates a vote', async (scenario) => {
    const result = await createVote({
      input: { choice: 'String' },
    })

    expect(result.choice).toEqual('String')
  })

  scenario('updates a vote', async (scenario) => {
    const original = await vote({ id: scenario.vote.one.id })
    const result = await updateVote({
      id: original.id,
      input: { choice: 'String2' },
    })

    expect(result.choice).toEqual('String2')
  })

  scenario('deletes a vote', async (scenario) => {
    const original = await deleteVote({ id: scenario.vote.one.id })
    const result = await vote({ id: original.id })

    expect(result).toEqual(null)
  })
})
