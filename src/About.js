import React from 'react';

const About = () => {
        return (
            <div className='about'>
                <h1>Here are the APIs I used for this App:</h1>
                <label htmlFor="prog"><a href="https://sv443.net/jokeapi?ref=public-apis">JokeAPI</a> - by<a href="https://sv443.net/"> Sv443</a></label>
                <p id='prog'>This API has several catagories, but I only used the Programming catagory. Other catagories contain potentially offensive jokes. Use at your own risk.</p>
                <label htmlFor="cn"><a href="http://www.icndb.com/">ICNDb</a></label>
                <p id="cn">The Internet Chuck Norris Database requires no further description.</p>
                <label htmlFor="dj"><a href="https://rapidapi.com/KegenGuyll/api/dad-jokes/details">Dad Jokes</a></label>
                <p id="dj">A very good Dad Jokes API. It has many useful features.</p>
            </div>
        );
}

export default About;