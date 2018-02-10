import React from 'react';
import ReactDOM from 'react-dom';

import WelcomeBanner from './components/home';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div>
                <WelcomeBanner/>
            </div>
        )
    }
}


function mount(){
    /*
    * Function to mount the main component to template root.
    * */
    console.log('Mounting Component');
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}


// Wait for DOM to be loaded, then trigger mouting
if (document.readyState === 'complete' || document.readyState === 'loaded') {
    mount();
}


// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}