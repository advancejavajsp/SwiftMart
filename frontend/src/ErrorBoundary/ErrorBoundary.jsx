/* eslint-disable */
import SomethingWentWrongPage from "./SomethingWentWrong";
import ErrorPage from "./SomethingWentWrong";
import React from "react"

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
     
      return { hasError: true };
    }
  
  
  
    render() {
      if (this.state.hasError) {

        return <SomethingWentWrongPage/>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;