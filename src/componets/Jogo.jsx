 import React, { useState } from 'react'     
 import './Jogo.css'
 function Jogo() {
    const [ Emoji, setEmoji] =useState('😶‍🌫️')
let emojis = ['😶', '😍', '🧐', '🤓', '🥳', '😎', '🤯', '🥶', '😱', '🤠']
function sortear() {
let i = Math.floor(Math.random() * 10)
    setEmoji(emojis[i])

}

   return (
     <div className='jogo'>
        <button className="bt-emoji"  onClick={sortear}>
        <p className="p-emoji">{Emoji}</p>

        </button>
     </div>
   )
 }
 
 export default Jogo