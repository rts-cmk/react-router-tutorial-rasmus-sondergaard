import { Link } from "react-router";
import howToInstallVid from "../../public/ReactRouterInstall.mp4"
import pageNavigation from "../../public/ReactLinkNavigate.mp4"

export default function Home(){
    return(
    <>
        <nav>
            <Link to="/about">
                Go to About Page
            </Link>
        </nav>
        <section>
            <h1>How to: React-Router</h1>
            <article>
                <h2>What is it?</h2>
                <p>React-Router is a library designed for React to make easier and more optimized navigation between pages on a website without the website having to refresh between pages.</p>
            </article>
            <article>
                <h2>How to install on Vite</h2>
                <p>To install React-Router on to your React project you make a new terminal in write "npm i react-router" and press enter</p>
                <p>When it has installed it you should be able to see it under dependencies in your package.json file</p>
                <h3>Video for reference</h3>
                <video width="500px" height="300px" src={howToInstallVid} muted controls/>
            </article>
            <article>
                <h2>Setting up Browser Router</h2>
                <p>After insterlation to set up your React-Router you first have to import BrowserRouter, Routes and Route from "react-router" and set it up as seen in the image below.</p>
                <p>BrowserRouter and Router is the focus here and the Route part is explained in the next step </p>
                <img src="../../public/ReactBrowserRouter.png" alt="" />
            </article>
            <article>
                <h2>Routing pages</h2>
                <p>To make a page Route you'll have to make the file/pages you want the website be able to navigate to. The image below is an example where there's been made a About, Contact and Home .jsx file</p>
                <p>Afterwards inside the Routes class you'll have to make a Route class as seen in the image</p>
                <p>The first Route has an index and element.</p>
                <p>Index is used to tell react-router which page should you main page/the page your website start on</p>
                <p>Element is used to tell what file is conected to what page</p>
                <p>Path which is used in the two other Route classes is used to tell what name the endpoint of the page you are routing to should be called. The example path="about" in the image would then be "yourWebsite/about" in the Url</p>
                <img src="../../public/ReactComponentRouting.png" alt="" />
            </article>
            <article>
                <h2>Navigating between pages</h2>
                <p>To be able to navigate between pages on your website you will need to make use of the Link class and/or useNavigate function</p>
                <p></p>
                <video width="500px" height="300px" src={pageNavigation} muted controls/>
                <img src="../../public/Link.png" alt="" />
                <img src="../../public/UseNavigate.png" alt="" />
            </article>
        </section>
    </>
    )
}