import React, { Component } from 'react';
import Joke from './Joke'
import {withContext} from './ContextProvider'

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <h1>Are you ready to SBAOOYN (Sharply Blow Air Out Of Your Nose)?</h1>
                <label className='catLabel' htmlFor="cat"><b>Please Select a Joke Catagory</b></label>
                <select name="catagory" id="cat" 
                        value={this.props.catagory.value}
                        onChange={this.props.handleSelect}>
                        <option></option>
                    <option value="Programmer">Programmer</option>
                    <option value="Chuck Norris">Chuck Norris</option>
                    <option value="Dad">Dad</option>
                </select>
                <button className='jokeButton' onClick={this.props.handleClick}>Get Joke</button>
                <Joke />
            </div>
        );
    }
}

export default withContext(Main);