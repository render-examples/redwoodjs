export const schema = gql`
  type Vote {
    id: Int!
    choice: String!
    dateTime: DateTime!
  }

  type Query {
    votes: [Vote!]!
    vote(id: Int): Vote
    voteCount(choice: String): Int!
    totalVotes: Int!
  }

  input CreateVoteInput {
    choice: String!
    dateTime: DateTime!
  }

  input UpdateVoteInput {
    choice: String
    dateTime: DateTime
  }

  type Mutation {
    createVote(input: CreateVoteInput!): Vote!
    updateVote(id: Int!, input: UpdateVoteInput!): Vote!
    deleteVote(id: Int!): Vote!
  }
`
