import { NavLink } from "react-router";
import video from "../../public/ReactRouterInstall.mp4"

export default function Home(){
    return(
    <>
        <nav>
            <NavLink to="/about">
                Go to About Page
            </NavLink>
        </nav>
        <section>
            <h1>How to: React-Router</h1>
            <article>
                <h2>What is it?</h2>
                <p>React-Router is a library designed for React to make easier and more optimized navigation between pages on a website without the website having to refresh between pages.</p>
            </article>
            <article>
                <h2>How to install on Vite?</h2>
                <p>To install React-Router on to your React project you make a new terminal in write "npm i react-router" and press enter</p>
                <p>When it has installed it you should be able to see it under dependencies in your package.json file</p>
                <h3>Video for reference</h3>
                <video width="500px" height="300px" src={video} muted controls/>
            </article>
            <article>
                
            </article>
        </section>
    </>
    )
}