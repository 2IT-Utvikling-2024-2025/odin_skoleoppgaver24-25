import { Outlet, Link } from "react-router-dom"

export default function Layout() {
    
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to= "/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/clock">Clock</Link>
                    </li>
                    <li>
                        <Link to="/profil">Profil</Link>
                    </li>
                    <li>
                        <Link to="/hobbies">Hobbies</Link>
                    </li>
                    
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                </ul>
            </nav>


            <Outlet/>
        </>
    )
}