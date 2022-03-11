import react, {useState} from 'react'
import fetchJson from '../services/fetch'

export default function Button(){

    const [text, setText] = useState('kanji');

    const onclick = async() => {
        const data = await fetchJson('https://kanjiapi.dev/v1/kanji/grade-1')
        const kanji = await fetchJson('https://kanjiapi.dev/v1/kanji/' + data[Math.floor(Math.random() * data.length)])
        console.log(kanji)

    }
    return(
        <>
            <button onClick={onclick}></button>
            <p>{text}</p>
        </>
    )
}