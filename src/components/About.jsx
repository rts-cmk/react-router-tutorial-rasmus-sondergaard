import { NavLink } from "react-router";

export default function About(){
    return(
    <>
        <p>Here is About</p>
        <nav>
            <NavLink to="/contact">
                Go to Contact Page
            </NavLink>
        </nav>
    </>
    )
}