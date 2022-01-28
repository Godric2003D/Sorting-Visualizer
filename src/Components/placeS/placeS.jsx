import React, { Component } from 'react';
import './placeS.css'

class PlaceS extends Component{
    
    constructor(props){
        super(props);
        this.state={
            array:[],
            y:70
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
        this.resetArray(150);
        
    }
    resetArray(e){
    
     
        const array = [];
        for(let i=0;i<e;i++)
        {
            array.push(randomm(10,500));
        }
        this.setState({array});
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
                                <input  type="range" min={10} max={150} onChange={this.handleChange} value={this.state.y} />
                                </span>
                            </li>
                            <li className='nav-item' id='rr'>
                                <a className='nav-link ' id='t' href="">Sorting speed</a>
                            </li>
                            <li className='nav-item pt-2 pl-0'>
                                <input type="range"/>
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