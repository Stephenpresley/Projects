import React, { Component } from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext();

class ContextProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            catagory: '',
            type: '',
            setup: '',
            delivery: '',
            punchline: '',
            value: '',
            joke: '',
            id:'',
            favArr: JSON.parse(localStorage.getItem('favorites')) || [],
            toggle: true
        }
    }

    handleSelect = (e) => {
        this.setState({catagory: e.target.value})
    }

    handleToggle = () => {
        this.setState(prev => {
            return {
                toggle: !prev.toggle
            }
        })
        this.handleStorage()
    }

    handleClick = () => {
        let catagory = this.state.catagory
        if(catagory === 'Programmer') {
            axios.get('https://sv443.net/jokeapi/category/Programming').then(res => {
                this.setState({joke: res.data, id: res.data.id, toggle: true})
            })
        }else if(catagory === 'Chuck Norris') {
            axios.get('http://api.icndb.com/jokes/random').then(res => {
                this.setState({joke: res.data.value, id: res.data.value.id, toggle: true})
            })
        }else if(catagory === 'Dad') {
            axios.get('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes').then(res => { 
                this.setState({joke: res.data, id: res.data.id, toggle: true})
            })
        }else {
            alert('You must select a catagory')
        }
    }

    handleStorage = () => {
        this.setState( prev => {
            return {
                favArr: [{joke: prev.joke, id: prev.id}, ...prev.favArr]
            }
        }, () => localStorage.setItem('favorites', JSON.stringify(this.state.favArr)))
    }

    handleDelete = (id) => {
        let {favArr} = this.state
        let filter = favArr.filter((item) => item.id !== id)
        localStorage.setItem('favorites', JSON.stringify(filter))
        this.setState(() => {
            return {favArr: filter}
        })
    }

    render() {
        return (
            <Provider value={{  ...this.state,
                                handleSelect: this.handleSelect,
                                handleClick: this.handleClick,
                                handleStorage: this.handleStorage,
                                handleDelete: this.handleDelete,
                                handleToggle: this.handleToggle}}>
                {this.props.children}
            </Provider>
        );
    }
}

export default ContextProvider;

export function withContext(Comp) {
    return props => <Consumer>
                        {value => <Comp {...value} {...props} />}
                    </Consumer>
}