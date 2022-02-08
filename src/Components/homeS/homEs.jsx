import React, { Component } from 'react';

import './homes.css'
import {Link} from 'react-router-dom'
class HomEs extends Component {
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
                <div className='grey'>
                <div className='jumbotron jumbotron-fluid'>
                    <div className='container'>
                        <h1 id='l'> Sorting Visualizer </h1>
                        <div className='siz mt-2'>
                            As the name suggests, sorting visualizer is a project which helps the user visualize sorting in various methods. The human brain can easily process visuals instead of long codes to understand the algorithms.
                        </div>
                        <hr />
                        <h2 className='mt-3'>Types of Sort</h2>
                        <h4 className='mt-4'>Merge sort</h4>
                        <div className='siz mt-2'>
                        Merge sort is a divide-and-conquer algorithm based on the idea of breaking down a list into several sub-lists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list. Idea: Divide the unsorted list into sublists, each containing element.
                        </div>
                        <div>
                            <button className=' btn btn-outline-success mt-4'><Link className="c nav-link" exact to="/placeS">Visualize</Link></button>
                        </div>
                    </div>

                </div>
                
                
                </div>
            </React.Fragment>
        );
    }
}

export default HomEs;
