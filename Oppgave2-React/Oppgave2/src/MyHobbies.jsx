const hobbies = [
    {title: "utvikling", isFavore: true, upVote: 0, id: 1},
    {title: "Gaming", isFavore: false, upVote: 0, id: 2},
]


export default function MyHobbies() {

    const listItems = hobbies.map(hobby =>
        <li key={hobby.id}>
            {hobby.title}
        </li>
    )

    return(
        <>
        <h1>Odin Tobiassen</h1>
        <ul>{listItems}</ul>
        </>
        
    )
}