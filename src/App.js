import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChildrenApp from "./Children";
import AppRenderProps from "./AppRenderProps";


class App extends React.Component {

    state = {
        error: true,
        success: true
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                {this.state.error && <ConfirmedError onOkClick={() => {
                    alert('Error ok!');
                    this.setState({error: false})
                }}
                                                     onCancelClick={() => {
                                                         this.setState({error: false})
                                                     }}/>}
                <hr/> 
                {this.state.success && <ConfirmedSuccess onOkClick={() => {
                    alert('Success ok!');
                    this.setState({success: false})
                }}
                                                         onCancelClick={() => {
                                                             this.setState({success: false})
                                                         }}/>}

                <ChildrenApp/>
                <AppRenderProps/>
            </div>
        );
    }
}


const Error = () => {
    return (
        <div style={{width: 'fit-content', padding: '5px 10px', margin: '0 auto',border: '1px solid red', color: 'red'}}>
            HOC error
        </div>
    )
};

const Success = () => {
    return (
        <div style={{width: 'fit-content', padding: '5px 10px', margin: '0 auto',border: '1px solid green', color: 'green'}}>
            HOC success
        </div>
    )
};

const WithConfirm = (WrappedComponent) => {
    const Confirm = (props) => {
        return (
            <div className="App-body">
                <div className="title">
                    <WrappedComponent {...props}/>
                </div>
                <hr/>
                <div>
                    <button onClick={props.onOkClick}>Ok</button>
                    <button onClick={props.onCancelClick}>Cancel</button>
                </div>
            </div>
        )
    };

    return Confirm;
};

const ConfirmedError = WithConfirm(Error);
const ConfirmedSuccess = WithConfirm(Success);

export default App;
