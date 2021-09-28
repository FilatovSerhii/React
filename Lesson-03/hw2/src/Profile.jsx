import React from 'react';
import moment from 'moment';

export default (props) => {
  const user = props.userData;
  const formatedData = moment(user.birthDate).format('DD MMM YY');

  return (
    <div className="profile">
      <div className="profile__name">
        {user.firstName} {user.lastName}
      </div>
      <div className="profile__birth">
        {`Was born ${formatedData} in ${user.birthPlace}`}
      </div>
    </div>
  );
};
