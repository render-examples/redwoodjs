import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const VotesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.votes()} className="rw-link">
            Votes
          </Link>
        </h1>
        <Link to={routes.newVote()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Vote
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default VotesLayout
