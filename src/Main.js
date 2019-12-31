import React, { useState, useRef, useEffect } from 'react';
import Joke from './Joke';
import {withContext} from './ContextProvider';
import { 
    makeStyles, InputLabel, FormControl, Select, NativeSelect, FormHelperText
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Main() {
    const classes = useStyles();
    const inputLabel = useRef(null);
    const [state, setState] = useState({
        catagory: '',
    });
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    const handleChange = name => e => {
        setState({
            ...state,
            [name]: e.target.value,
        });
    };
    return (
        <div className='main'>
            <h1>Are you ready to SBAOOYN (Sharply Blow Air Out Of Your Nose)?</h1>
            <FormControl className={classes.formControl}>
                <NativeSelect
                    className={classes.selectEmpty}
                    value={state.catagory}
                    name='catagory'
                    onChange={handleChange('catagory')}
                    inputProps={{'aria-label': 'Catagory'}}>
                    <option value='' disabled >
                        <b>Catagories</b>
                    </option>
                    <option value="Programmer">Programmer</option>
                    <option value="Chuck Norris">Chuck Norris</option>
                    <option value="Dad">Dad</option>
                </NativeSelect>
                <FormHelperText><b>Please Select a Joke Catagory</b></FormHelperText>
            </FormControl>
            {/* <label className='catLabel' htmlFor="cat"><b>Please Select a Joke Catagory</b></label>
            <select name="catagory" id="cat" 
                    value={this.props.catagory.value}
                    onChange={this.props.handleSelect}>
                    <option></option>
                <option value="Programmer">Programmer</option>
                <option value="Chuck Norris">Chuck Norris</option>
                <option value="Dad">Dad</option>
            </select>
            <button className='jokeButton' onClick={this.props.handleClick}>Get Joke</button> */}
            <Joke />
        </div>
    );
}