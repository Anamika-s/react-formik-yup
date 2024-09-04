import React from 'react'
import ErrorBoundary from './ErrorBoundary';

export const App1 = () => {
  return (
    <div>App1
        <ErrorBoundary>
        <Test name="ajay"/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Test name=""/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Test name="deepak"/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Test name=""/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Test name="chirag"/>
        </ErrorBoundary>
        
    </div>
  )
}

export const Test = (props) => {
    if(typeof(props.name)!=="string" || !props.name)
        throw new Error("name shoud be in string");
  return (
    <div>Test Component 
        <br/>
       
        <b> Name is {props.name}</b>
    </div>
  )
}

