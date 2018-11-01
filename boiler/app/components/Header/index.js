import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  constructor(){
    super()
    this.state={
      data:null,
    }
    this.getData()
  }

  getData(){
    let data = fetch('https://swapi.co/api/people/')
      .then((resp) => {
        resp.json().then((res) => {
          console.log(res)
          this.setState({data : res})
        })
      })
  }

  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
        {
          this.state.data ? this.state.data.map ((res, i) =>
            <div style={{width : '50%'}} key={res.flight_number}>
              <div>
                <p>{res.result.name}</p>
              </div>
            </div>
          ): <h3>Data Fetching</h3>
        }
      </div>
    );
  }
}

export default Header;
