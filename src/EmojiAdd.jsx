// Array methods now adding the array id in order to resolve the issue of deleting the element ..
// For removing an element from an array you need to use filter method and pass as something.

import { useState } from "react";
import { v4 as uuid } from 'uuid';

function randomEmoji() {
    const choices = ["😬", "😘", "😭", "🙄", "🤪", "🤢"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

export default function EmojiAdd(){
    const [emojis,addEmoji] = useState([{id: uuid() , emoji : "🤪"}]);
    const IncriEmoji = () =>{
        // const NewMoji = ([...emojis,"[:]"]);
        addEmoji((oldEmojis) => [...oldEmojis,{id: uuid(),emoji:randomEmoji()}]);
    };
    const DeleteEmoji = (id) =>{
        addEmoji((prevEmoji)=>{
            return prevEmoji.filter((e)=> e.id!=id);
        })
    }
    const MakeHeart = () => {
        addEmoji ((prevEmoji)=>{
           return prevEmoji.map((e)=>{
            return {
                ...e,emoji:"❤️"
            }
           });
        });
    };
    return <>
    {emojis.map((e)=>(
        <span onClick={()=> DeleteEmoji(e.id)} key={e.id} style={{fontSize:"50px"}}>{e.emoji}</span>
    ))}
    <button onClick={IncriEmoji}>Add Emoji</button>
    <button onClick={MakeHeart}>MakeHeart</button>
    </>
}