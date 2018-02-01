import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>;
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }
  render() {
    return (
      <div className="row">
        <nav>
          <div className="nav-wrapper">
            <div className="col s12">
              <Link
                to={this.props.auth ? '/surveys' : '/'}
                className="left brand-logo"
              >
              HEADER
              </Link>
              <ul className="right">
                <li>
                  {this.renderContent()}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);