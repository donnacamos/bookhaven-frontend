import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux' 


class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/titles', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => console.log(data)) 
  }

  render() {
    return (
      <div className="App">
         App 
      </div>
    );
  }
  
}

export default App;
