import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ScreenAddMovie() {
    
    let dispatch = useDispatch()

    let newFilm = useSelector((redux) => {
        return redux.reducer.newFilm
    })



    let [title, setTitle] = useState('')
    let [category, setCategory] = useState('')

    return (
        <div>
            <input value={title} placeholder='title' onChange={(event) => setTitle(event.target.value)}/>
            <br/>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="">--Please choose an option--</option>
                <option value="Comedy">Comedy</option>
                <option value="Animation">Animation</option>
                <option value="Thriller">Thriller</option>
                <option value="Drame">Drame</option>
            </select>
            <br/>
            <button onClick={() => dispatch({ type: '', index: index })}>Ajouter le film</button>
            <br/>
            contenu = {title}
            <br/>
            cat = {category}
        </div>
        
    )
    
}