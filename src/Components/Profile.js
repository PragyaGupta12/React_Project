// const Profile = () => {
//   return (
//     <div className="profile">
//       <h1>Profile Component!</h1>
//     </div>
//   );
// };

import React from 'react';

class Profile extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    //API calls
  }
  render(){
    return (
      <div>
        <h1>Profile Component!</h1>
      </div>
    )
  }
}

export default Profile;
