import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Nav extends React.Component {
  constructor() {
    super()

    this.state = { navbarOpen: false }

    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>
          <a role="button"
            className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`}
            onClick={this.toggleNavbar}
            aria-label="menu" aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link to="/search" className="navbar-item">Search</Link>
            <Link to="/randomizer" className="navbar-item">Randomizer</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav)

// <nav className="navbar">
//   <Link to="/" className="navbar-item">Home</Link>
//   <a role="button"
//     className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`}
//     onClick={this.toggleNavbar}
//     aria-label="menu" aria-expanded="false"
//   >
// <span aria-hidden="true"></span>
// <span aria-hidden="true"></span>
// <span aria-hidden="true"></span>
//   </a>
//   <div className="logo navbar-item"></div>
//   <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
//     <div className="navbar-end">
//       <Link to="/search" className="navbar-item">Search</Link>
//       <Link to="/randomizer" className="navbar-item">Randomizer</Link>
//     </div>
//   </div>
// </nav>
