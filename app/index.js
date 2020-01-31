import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import List from './list/List';


class App extends React.Component{
    render(){
        return(
          <List/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
