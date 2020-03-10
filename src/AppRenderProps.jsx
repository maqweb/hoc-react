import React from "react";
import './App.css'

class AppRenderProps extends React.Component {

    state = {
        error: true,
        success: true
    };

    render() {
        return (
            <div className="example">
                {this.state.error && <Confirm onOkClick={() => {this.setState({error: false})}}
                                              onCancelClick={() => {this.setState({error: false})}}
                                              renderContent={() => <Error/>}/>}

                <hr/>

                {this.state.success && <Confirm onOkClick={() => {this.setState({success: false})}}
                                                onCancelClick={() => {this.setState({success: false})}}
                                                renderContent={() => <Success/>}/>}

            </div>
        )
    }
}

const Confirm = (props) => {
    return (
        <div className="App-body">
            <div className="title">
                {props.renderContent()}
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
            Render props error
        </div>
    )
};

const Success = () => {
    return (
        <div style={{width: 'fit-content', padding: '5px 10px', margin: '0 auto', border: '1px solid green', color: 'green'}}>
            Render props success
        </div>
    )
};

export default AppRenderProps;
