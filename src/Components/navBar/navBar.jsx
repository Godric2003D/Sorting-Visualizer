import React, {Component} from 'react';
import './navBar.css';

import {Link} from 'react-router-dom'
class NavBar extends Component {
    render() {
        
        return (
            <React.Fragment>
                <div className='navbar bg-dark'>
                    <div className='container cont'>
                        <div className='navbar-header '>
                            <a className='navbar-brand navbar-light tt' id='tt' href="#">Sorting Visualizer</a>
                            
                        </div>

                    </div>

                </div>
                
            </React.Fragment>
        );
    }
}

export default NavBar;
