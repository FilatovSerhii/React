import React from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UsersList extends React.Component {
  state = {
    pageNumber: 1,
  };
  handleNext = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
  };
  handlePrev = () => {
    this.setState({
      pageNumber: this.state.pageNumber - 1,
    });
  };
  render() {
    const usersPerPage = 3;
    const { pageNumber } = this.state;

    const startIndex = (pageNumber - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToRender = this.props.users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          usersPerPage={3}
          usersCount={this.props.users.length}
          handleNext={this.handleNext}
          handlePrev={this.handlePrev}
          pageNumber={this.state.pageNumber}
        />
        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
