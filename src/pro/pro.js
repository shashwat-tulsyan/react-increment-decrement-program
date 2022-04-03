import React, { Component } from 'react'

 class Pro extends Component{
   
    constructor(props)
    {
        super(props)
        this.state=
        {
            count:0
        }
    }
  
   increment()
   {
       this.setState(
           {
              count:this.state.count+1
           })
   }
   decrement()
   {
       this.setState(prevState=>({
           count:prevState.count-1
       }))
   }
  render() {
    return (
         <>
         <h1>Increment and decrement program</h1>

         <p>{this.state.count}</p>
         <button onClick={()=>this.increment()} >Increment</button>
         <button onClick={()=>this.decrement()}>Decrement</button>
         </>
    )
  }
}

export default Pro