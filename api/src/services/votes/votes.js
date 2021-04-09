import { db } from 'src/lib/db'

export const votes = () => {
  return db.vote.findMany()
}

export const vote = ({ id }) => {
  return db.vote.findUnique({
    where: { id },
  })
}

export const createVote = ({ input }) => {
  return db.vote.create({
    data: input,
  })
}

export const updateVote = ({ id, input }) => {
  return db.vote.update({
    data: input,
    where: { id },
  })
}

export const deleteVote = ({ id }) => {
  return db.vote.delete({
    where: { id },
  })
}

export const voteCount = ({ choice }) => {
  return db.vote.count({
    where: { choice: choice },
  })
}

export const totalVotes = () => {
  return db.vote.count()
}
