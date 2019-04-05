import React from 'react'

class Footer extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <footer className="footer is-paddingless">
        <div className="content has-text-centered">
          <p className="title is-7">The Times Machine was created through the <a href="https://developer.nytimes.com/" target="_blank">NYTimes Archive API</a>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
