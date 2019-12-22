import React, { Component } from 'react';
import Favorite from './Favorite'
import {withContext} from './ContextProvider'

class Favorites extends Component {

    render() {
        const favs = JSON.parse(localStorage.getItem('favorites'))
        return (
            <div className='fav'>
                {favs ? favs.map(fav =>  <Favorite key={fav.id}
                                                joke={fav.joke.joke}
                                                setup={fav.joke.setup}
                                                delivery={fav.joke.delivery}
                                                punchline={fav.joke.punchline}
                                                id={fav.id}
                                        />
                                )
                : <h2><i>You haven't saved any favorites yet!</i></h2>}
            </div>
        );
    }
}

export default withContext(Favorites);