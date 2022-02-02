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
            z:100
        };
        this.handleChange = this.handleChange.bind(this);
        this.mergeSo = this.mergeSo.bind(this);
        this.handleSpeed = this.handleSpeed.bind(this);
    
        
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
        console.log(array)
    }
    handleChange= (event) => {
        const x=event.target.value;
        var f=parseInt(x);
        console.log(f);
        this.resetArray(f);
        this.setState({
            y:f,
        });
        
       
   }
   handleSpeed = (event) => {
       const s = event.target.value;
       var q = parseInt(s);
       
       this.setState({
        z:q,
    });

   }
   mergeSo(){
    const animations = mSort(this.state.array);
   
   
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('arr-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? red : blue;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 150);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 150);
      }
    }
  }
   
    render(){
        function refreshPage() {
            window.location.reload(false);
          }
         
        const {array}=this.state;
        return(
            <React.Fragment>
                <div className='navbar navbar-expand-lg bg-light'>
                    <div className='container-fluid'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='nav-item px-2'>
                                <a className='nav-link' onClick={refreshPage} id='t' href="">Generate array</a>
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
                                <input type="range" min={50} max={200} onChange={this.handleSpeed} value={this.state.z}/>
                            </li>
                            <li className='nav-item px-4 pt-1 '>
                                <button className='btn btn-outline-success' onClick={this.mergeSo}>Merge Sort</button>
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
function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
export default PlaceS;