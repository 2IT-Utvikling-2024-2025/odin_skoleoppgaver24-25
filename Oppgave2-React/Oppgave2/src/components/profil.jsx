import {useState} from 'react'
import './CSS/profile.css'
const user = {
    name: 'Odin Tobiassen',
    imageSrc: 'profile-picture.jpg',
    imageSize: 300,
  };
  const skills = [
    {title: "Java Script", isFavore: true, upVote: 0, id: 1},
    {title: "HTML", isFavore: false, upVote: 0, id: 2},
    {title: "CSS", isFavore: true, upVote: 0, id: 3},
    {title: "Python", isFavore: false, upVote: 0, id: 4},
    {title: "Git", isFavore: true, upVote: 0, id: 5},
    {title: "Programming mindset", isFavore: false, upVote: 0, id: 6},
    {title: "currently working on React", isFavore: true, upVote: 0, id: 7},
  ]
  
  
export default function Profile() {

    const listItems = skills.map(skills =>
        <li key={skills.id} 
        style={
            {color:skills.isFavore ? 'magenta' : 'aqua'}
        }
        >
            
            {skills.title}
            <LikeButton></LikeButton>
        </li>
    )


    return(
        <>
        <h1 className= 'name'>{user.name}</h1>
      <img
        src={user.imageSrc}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        
      />
        <p className= 'text'> Hellooo! My name is Odin. I'm studying IT at Drømtorp VGS, and I wish to become an IT-developer in the future.<br/>
            The current biggest programing projcet I have done, is making The Game of Life in JS. <br />
            Down bellow are a list of skills and coding languages I have learned: </p>

            <h2 className= 'skills'> My Skills</h2>
        <ul>{listItems}</ul>

        </>
        
    )
}



function LikeButton() {
    const[like, setLike]= useState(0)
    
    function handleClick() {
        setLike(like +1)
    }


    return(

        <button className='button' onClick={handleClick}>
            Likes {like} times
        </button>

    )
}