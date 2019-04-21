import React, { Component } from 'react';
import Axios from 'axios';
import Card from './Card/Card';
import './style.scss';
import Loader from './Loader/Loader';


class App extends Component {
  state = {
    userList: [],
    isLoading: true,
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.setState({ userList: response.data, isLoading: false })
      })
      .catch((err) => {
        console.log(err);
      })
  }


  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? <Loader/> :
          <div className="listing">
            {(this.state.userList).map(user =>
              <Card
                name={user.name}
                phone={user.phone}
                email={user.email}
                company={user.company.name}
                website={user.website}
                address={`${user.address.street},${user.address.suite},${user.address.city},${user.address.zipcode}`}
                image={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
              />
            )}
          </div>
        }
      </React.Fragment>
    );
  }
}

export default App;
