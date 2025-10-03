import { Link } from "react-router";

export default function About(){
    return(
    <>
        <p>Here is About</p>
        <nav>
            <Link to="/contact">
                Go to Contact Page
            </Link>
        </nav>
    </>
    )
}