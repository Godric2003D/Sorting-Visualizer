import React, { Component } from 'react';

import './home.css'
import {Link} from 'react-router-dom'
class HomE extends Component {
    constructor(props){
        super(props);
        this.state={
            array:[],
            y:36,
            speed:100
        };
    }
    removal(){
        var e = document.getElementById("yy");
        e.parentElement.classList.add('qqq');
        var f = document.getElementById("ww");
        if (f.style.display === "none") {
            console.log("true");
          } 
    }
    render() {
        
        return (
            <React.Fragment>

                <div className='jumbotron jumbotron-fluid' id='ww'>
                    <div className='container'>
                        <h1 id='l'> Sorting Visualizer </h1>
                        
                    </div>

                </div>
                <div className='container ttt py-5 mx-auto'>
                    
                    <h1 className=''>Welcome to an Interactive Project</h1>
                    <h3>Sorting Visualizer</h3>
                    <h4>Creator: Debayan Ray</h4>
                    <button className="btn btn-outline-warning aa mt-5" id='yy' onClick={this.removal}><Link className="nav-link" exact to="/homes"><b>Proceed</b></Link></button>

                </div>
                
              
            </React.Fragment>
        );
    }
}

export default HomE;
