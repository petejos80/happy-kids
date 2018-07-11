import React, { Component } from 'react';
// import loading from './loading.svg';

class Callback extends Component {
  render() {
    const style = {
        margin: '40px',
        border: '5px solid pink'
      };

    return (
      <div style={style}>
        {/* <img src={loading} alt="loading"/> */}
        Loading...
      </div>
    );
  }
}

export default Callback;