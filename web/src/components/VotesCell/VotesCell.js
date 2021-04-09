export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'cache-first',
    pollInterval: 1000,
  }
}

export const QUERY = gql`
  query VOTE($type: String) {
    count: voteCount(choice: $type)
    allCount: totalVotes
  }
`

export const Loading = () => (
  <div>
    <h3 className="h3">Loading...</h3>
  </div>
)

export const Success = ({ count, allCount }) => {
  return (
    <div>
      <h2 className="h2">
        {allCount > 0 ? Math.round((count / allCount) * 100) : 50}%
      </h2>
      <div className="p">{count} Votes</div>
    </div>
  )
}
