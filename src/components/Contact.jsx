import { useNavigate } from "react-router";

export default function Contact(){

    const navigate = useNavigate()

    return(
    <>
        <p>Here is Contact</p>
        <button onClick={() => navigate("/about")}>Go to About Page</button>
    </>
    )
}