import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  
    /**
     *
     */
    constructor(props) {
        super(props);
        this.state={
            hasError:false
        }    
    }
    
    static getDerivedStateFromError(error)
    {
        console.log(error)
        console.log("some error occured")
        return {
            hasError:true
            }
    
    }

    componentDidCatch(error, info)
    {
        console.log("componentDidCatch")
    }
    render() 
    {
        if (this.state.hasError) {
        return (
            <div> 
                <h1> Some Error ocuured </h1>
            </div>
     )}
    else
    return this.props.children;
        // return <h1> aaaa</h1>>
  }
}
