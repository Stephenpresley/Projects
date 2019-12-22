// import React, { Component } from 'react';
// import Joke from './Joke'
// import {withContext} from './ContextProvider'

// class JokeContainer extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         catagory: this.props.value,
    //         type: this.props.value,
    //         setup: this.props.value,
    //         delivery: this.props.value,
    //         punchline: this.props.value,
    //         joke: this.props.value
    //     }
//     }
//     render() {
//         console.log(this.props.jokeArr)
//         const jokeMap = this.props.jokeArr.map(joke => <Joke    key={joke.id}
//                                                                 joke={joke.joke}
//                                                                 setup={joke.setup}
//                                                                 delivery={joke.delivery}
//                                                                 punchline={joke.punchline}
//                                                                 />)
//         return (
//             <div className='jokeContainer'>
//                 {jokeMap}
//             </div>
//         );
//     }
// }

// export default withContext(JokeContainer);