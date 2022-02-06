import React, { Component } from 'react';
import './placeS.css'
import {mSort} from '../Algorithms/merge'
const red = 'red';
const blue = 'blue';

class PlaceS extends Component{
    
    constructor(props){
        super(props);
        this.state={
            array:[],
            y:36,
            speed:100
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.mergeSo = this.mergeSo.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);
        this.handleS = this.handleS.bind(this);
        
        
    }
    
    componentDidMount(){
        this.resetArray(40);
        
    }
    resetArray(e){
    
        
        const array = [];
        for(let i=0;i<e;i++)
        {
            array.push(randomm(10,450));
        }
        this.setState({array});
        
    }
    handleChange= (event) => {
        const x=event.target.value;
        var f=parseInt(x);
        
        this.resetArray(f);
        this.setState({
            y:f,
        });  
   }


    handleS = (event) => {
        var r = event.target.value;
        
        
        this.setState({
            speed : r
        });
    }


   onSubmit = (f) => {
        f.preventDefault();
        var v = this.state.speed;
        var t = parseInt(v); 
        console.log(t);
        this.mergeSo(t);
   }

   
  
   
   
    render(){
        
         
        const {array}=this.state;
        return(
            <React.Fragment>
                <div className='navbar navbar-expand-lg bg-light'>
                    <div className='container-fluid'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item px-2'>
                                <a className='nav-link' onClick={this.resetArray} id='t' href="">Generate array</a>
                            </li>

                            <li className='nav-item' id='rr'>
                                <label className='nav-link ' id='t' href="">Array size</label>
                            </li>
                            <li className='nav-item pt-2 pl-0'>
                                <span id='size'>
                                <input  type="range" min={10} max={60} onChange={this.handleChange} value={this.state.y} />
                                </span>
                            </li>
                            <li className='nav-item' id='rr'>
                                <a className='nav-link ' id='t' href="">Sorting speed</a>
                            </li>
                            <li className='nav-item pt-2 pl-0'>
                                <form onSubmit={this.onSubmit}>
                                    <input type="textarea" onInput = {this.handleS} value={this.state.speed} />
                                    <button className='btn btn-outline-success' type='submit'>Merge Sort</button>
                                    </form>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
                <div className='array-cont container-fluid text-center'>
                {
                    array.map((value,idx) => (
                        <div className='arr-bar' key={idx} style={{height: `${value}px`}}>
                            
                        </div>
                    )
                    )
                }
                </div>
            </React.Fragment>
        );
    }
}
function randomm(min,max){
    return Math.floor(Math.random()* (max-min+1)+min)
}

export default PlaceS;