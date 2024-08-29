import {useState} from 'react'
import './MyHobbies.css'

const hobbies = [
    {title: "utvikling", isFavore: false, upVote: 0, id: 1},
    {title: "Gaming", isFavore: true, upVote: 0, id: 2},
    {title: "Scouting", isFavore: false, upVote: 0, id: 3},
    {title: "Dungeons and Dragons", isFavore: true, upVote: 0, id: 4},
]


export default function MyHobbies() {

    const listItems = hobbies.map(hobby =>
        <li key={hobby.id} 
        style={
            {color:hobby.isFavore ? 'magenta' : 'aqua'}
        }>
            
            {hobby.title}
            <VoteButton></VoteButton>
        </li>
    )

    return(
        <>
        <h2 className='hobby'> My Hobbies</h2>
        <ul>{listItems}</ul>
        </>
        
    )
}



function VoteButton() {
    const[vote, setVote]= useState(0)
    
    function handleClick() {
        setVote(vote +1)
    }


    return(

        <button className='button' onClick={handleClick}>
            voted {vote} times
        </button>

    )
}