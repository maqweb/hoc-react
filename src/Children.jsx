import React from "react";
import './App.css'

class ChildrenApp extends React.Component {

    state = {
        error: true,
        success: true
    };

    render() {
        return (
            <div className="example">
                {this.state.error && <Confirm onOkClick={() => {
                    alert('Error ok!');
                    this.setState({error: false})
                }}
                                              onCancelClick={() => {
                                                  this.setState({error: false})
                                              }}>
                    <Error/>
                </Confirm>}

                <hr/>

                {this.state.success && <Confirm onOkClick={() => {
                    alert('Success ok!');
                    this.setState({success: false})
                }}
                                                onCancelClick={() => {
                                                    this.setState({success: false})
                                                }}>
                    <Success/>
                </Confirm>}

            </div>
        )
    }
}

const Confirm = (props) => {
    return (
        <div className="App-body">
            <div className="title">
                {props.children}
            </div>
            <hr/>
            <div>
                <button onClick={props.onOkClick}>Ok</button>
                <button onClick={props.onCancelClick}>Cancel</button>
            </div>
        </div>
    )
};

const Error = () => {
    return (
        <div style={{width: 'fit-content', padding: '5px 10px', margin: '0 auto',border: '1px solid red', color: 'red'}}>
            Children error
        </div>
    )
};

const Success = () => {
    return (
        <div style={{width: 'fit-content', padding: '5px 10px', margin: '0 auto',border: '1px solid green', color: 'green'}}>
            Children success
        </div>
    )
};

export default ChildrenApp;
