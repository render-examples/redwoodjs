import { useMutation } from '@redwoodjs/web'
import VotesCell, { QUERY } from 'src/components/VotesCell'

const CREATE_VOTE_MUTATION = gql`
  mutation CreateVoteMutation($input: CreateVoteInput!) {
    createVote(input: $input) {
      id
    }
  }
`

const HomePage = () => {
  const [createVote] = useMutation(CREATE_VOTE_MUTATION, {
    refetchQueries: [
      { query: QUERY, variables: { type: 'Dog' } },
      { query: QUERY, variables: { type: 'Cat' } },
    ],
  })

  function onSave(choice) {
    const input = {
      choice: choice,
      dateTime: new Date(),
    }
    createVote({ variables: { input } })
  }

  return (
    <section className="section">
      <img src="images/green.svg" alt="" className="img img-green" />
      <img src="images/red.svg" alt="" className="img img-pink" />
      <a href="http://www.render.com" className="logo-link w-inline-block">
        <img src="images/render-logo-color-white.svg" alt="" className="logo" />
      </a>
      <div className="container-center">
        <h2 className="h1">Redwood Sample App</h2>
        <h5 className="subhead">
          Deployed on{' '}
          <a href="http://www.render.com" className="link">
            Render
          </a>
        </h5>
        <div className="card-container">
          <div className="card">
            <div>
              <h2 className="h3">Dogs Rule</h2>
              <div
                aria-hidden
                className="card-button blue"
                onClick={() => onSave('Dog')}
                role="button"
              >
                <img
                  src="images/dog.svg"
                  loading="lazy"
                  alt=""
                  className="icon"
                />
                <h2 className="button-text">Vote</h2>
              </div>
              <VotesCell type="Dog" />
            </div>
          </div>
          <div className="card">
            <div>
              <h2 className="h3">Cats Reign</h2>
              <div
                aria-hidden
                className="card-button red"
                onClick={() => onSave('Cat')}
                role="button"
              >
                <img
                  src="images/cat.svg"
                  loading="lazy"
                  alt=""
                  className="icon"
                />
                <h2 className="button-text">Vote</h2>
              </div>
              <VotesCell type="Cat" />
            </div>
          </div>
        </div>
        <div className="p centered">Who will you vote for?</div>
      </div>
    </section>
  )
}

export default HomePage
