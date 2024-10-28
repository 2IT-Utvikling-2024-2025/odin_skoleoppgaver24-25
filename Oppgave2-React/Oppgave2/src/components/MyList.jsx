import {useState} from 'react'
const myList =[
    {title:'Apple', id: 1},
    {title:'Orange', id: 2},
    {title:'Tomato', id: 3},
]

export default function MyList() {
    const[vote,setVote]= useState(0);

    function handleClick() {
        setVote(vote +1)
    }
    
    const listItems = myList.map(item =>
        <li key={item.id}>
            {item.title}
            <VoteButton vote={vote} onClick={handleClick}></VoteButton>
        </li>
    )

    return(
        <>
        <h1>My List <br /> Ahahahaa</h1>
        <ul> {listItems} </ul>
        
        </>
        
    )
}

function VoteButton({vote, onClick}) {

   

   

    return(
        
        <button onClick={onClick}>
            voted {vote} times
        </button>
    )
}