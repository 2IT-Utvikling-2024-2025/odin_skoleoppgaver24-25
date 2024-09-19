import React, { useState } from 'react';
import './CSS/oppgaver.css'


export default function MyQuiz() {
    

    return(
        <div className = 'quiz'>
        <h1>A quiz about the band Ghost:</h1>

        <form>
            <div className='ghost'>
            <h3> Who are Ghost? </h3> 
            <textarea id="GhostBand" name="GhostBand" rows="5" cols="50"></textarea>
            </div>
            
            <br />

            <div className='fistAlbum'>
            <h3> When did Ghosts first album come out?</h3>
            <input 
                type="date"
                placeholder='Year, month, date'
            />
            </div>

            <br />
            <div className='firstPreform'>
            <h3>Where and when did Ghost first preform?</h3>
            <input 
              type="text"  
              placeholder="Your Answer"
            />
            </div>
            
            <br />

            <div className='leadSinger'>
            <h3>Who were the first lead singer? </h3>
            <label> Cardinal Copia </label>
            <input type="radio"/> <br />

            <label> Papa Nihil</label>
            <input type="radio"/> <br />

            <label> Papa Emeritus I</label>
            <input type="radio"/>
            </div>
           
           <br />

            <div className='papaEmeritus'>
            <h3> Who is Papa Emeritus IV </h3>
            <label> The lead Singer </label>
            <input type="checkbox"/> <br />

            <label> Cardinal Copia </label>
            <input type="checkbox"/> <br />

            <label> Tobias Forge </label>
            <input type="checkbox"/> <br />
            </div>

            <div className='latestAlbum'>
            <h3>What is the latest album?</h3>
            <input type="text"  placeholder='Album Name'/> 
            </div>
            
            <br />

            <div className='albumsNumber'>
            <h3> How manny albums are out? </h3>
            <input type="number" placeholder='Number of Albums'/>
            </div>
            
            <br />

            <div className='favoriteAlbum'>
            <h3>What is your favorite album?</h3>
            <input type="text" placeholder='Favorite Album'/>
            </div>
            
            <br />

            <div className='favoriteSong'>
            <h3>What is your favorite song?</h3>
            <input type="text" placeholder='Favorite song' />
            </div>
            
            <br />

            <div className='favoritePapa'>
            <h3>Who were your favorite Papa?</h3>
            <input type="text" placeholder='Favorite Papa' />
            </div>
            

        </form>
       
        </div>
    )
}