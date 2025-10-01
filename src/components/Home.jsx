import { NavLink } from "react-router";

export default function Home(){
    return(
    <>
        <p>Here is Home</p>
        <nav>
            <NavLink to="/about">
                Go to About Page
            </NavLink>
        </nav>
    </>
    )
}