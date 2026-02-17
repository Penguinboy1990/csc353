import { useState } from 'react'
import penguin from './assets/penguin.png'
import './App.css'
/*
    1) profile picture, so img tag
    2) person's name, h1 tag
    3) short bio, p tag
*/

function Profile(){
    const [isSenior, setIsSenior] = useState(false);
    return (
        <>
            <img src={penguin} height="480px"
                 width="480px" alt="profile picture"/>

            <h1 className="fancy">Jack Frost</h1>

            <p className="bio">
                From the South Pole, Antarctica.<br></br>
                Likes snow and fish
            </p>
            <button onClick={() => setIsSenior((isSenior) => !isSenior)}>Toggle</button>
            {isSenior ? <b> I'm a Senior Engineer</b> : <i> I'm a Junior Engineer</i>}
        </>
    )
}

export default Profile;