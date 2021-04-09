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
    <section className="temp-section">
      <img src="images/green.svg" alt="" className="temp-img temp-img-green" />
      <img src="images/red.svg" alt="" className="temp-img temp-img-pink" />
      <a href="http://www.render.com" className="temp-logo-link w-inline-block">
        <img
          src="images/render-logo-color-white.svg"
          alt=""
          className="temp-logo"
        />
      </a>
      <div className="temp-container-center">
        <h2 className="temp-h1">Redwood Sample App</h2>
        <h5 className="temp-subhead">
          Deployed on{' '}
          <a href="http://www.render.com" className="temp-link">
            Render
          </a>
        </h5>
        <div className="temp-card-container">
          <div className="temp-card">
            <div>
              <h2 className="temp-h3">Dogs Rule</h2>
              <div
                aria-hidden
                className="temp-card-button temp-blue"
                onClick={() => onSave('Dog')}
                role="button"
              >
                <img
                  src="images/dog.svg"
                  loading="lazy"
                  alt=""
                  className="temp-icon"
                />
                <h2 className="temp-button-text">Vote</h2>
              </div>
              <VotesCell type="Dog" />
            </div>
          </div>
          <div className="temp-card">
            <div>
              <h2 className="temp-h3">Cats Reign</h2>
              <div
                aria-hidden
                className="temp-card-button temp-red"
                onClick={() => onSave('Cat')}
                role="button"
              >
                <img
                  src="images/cat.svg"
                  loading="lazy"
                  alt=""
                  className="temp-icon"
                />
                <h2 className="temp-button-text">Vote</h2>
              </div>
              <VotesCell type="Cat" />
            </div>
          </div>
        </div>
        <div className="temp-p temp-centered">Who will you vote for?</div>
      </div>
    </section>
  )
}

export default HomePage
