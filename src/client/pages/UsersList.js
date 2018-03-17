import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return (
        <li key={user.id}>{user.name}</li>
      );
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users`}</title>
        <meta property="og:title" content="User Directory" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://i0.kym-cdn.com/photos/images/newsfeed/000/096/044/trollface.jpg?1296494117" />
        <meta property="og:url" content="https://wramsey.com" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <h3>List of Users: </h3>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}


export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
}