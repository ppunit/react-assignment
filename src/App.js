import React, { useEffect } from 'react';
import { getList } from './reducer/action'
import Dashboard from './components/dashboard'
import { connect } from 'react-redux';
import './App.css';
import './_pageloader.scss'

function App(props) {
  useEffect(() => {
    props.getResult()
  }, []
  )
  return (
    <div className="App">
      <header className="App-header">
        <div><h3>CloudSufi App</h3></div>
      </header>
      {props.list.length > 0 ? <Dashboard list={props.list}></Dashboard>:
       <div className="page-loader after-loading">
       <div className="lds-default">
         <div />
         <div />
         <div />
         <div />
         <div />
         <div />
         <div />
         <div />
         <div />
         <div />
         <div />
         <div />
       </div>
       </div>}


    </div>
  );
}
function mapStateToProps(state) {
  return {
    list: state.list
  }
}
const mapDispatchToProps = dispatch => {

  return {
    getResult: () => dispatch(getList()),

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
