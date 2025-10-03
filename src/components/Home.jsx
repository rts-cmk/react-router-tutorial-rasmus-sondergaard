import { Link } from "react-router";
import howToInstallVid from "../../public/ReactRouterInstall.mp4"
import pageNavigation from "../../public/ReactLinkNavigate.mp4"
import ErrorPageVid from "../../public/ReactErrorPage.mp4"
import "./Home.css"

export default function Home(){
    return(
    <>
        <section>
            <h1>How to: React-Router</h1>
            <article>
                <h2>What is it?</h2>
                <p>React-Router is a library designed for React to make easier and more optimized navigation <br /> 
                between pages on a website, without the website having to refresh between pages.</p>
            </article>
            <article>
                <h2>How to install on Vite</h2>
                <p>To install React-Router on to your React project, you make a new terminal and write "npm i react-router" and press enter. <br />
                When it's been installed, you should be able to see it under dependencies in your package.json file.</p>
                <p></p>
                <h3>Video for reference</h3>
                <video src={howToInstallVid} muted controls/>
            </article>
            <article>
                <h2>Setting up BrowserRouter</h2>
                <p>After insterlation, to set up your React-Router you first have to import BrowserRouter, Routes and Route from "react-router" and set it up as seen in the image below. <br />
                BrowserRouter and Router is the focus here and the Route part is explained in the next step.</p>
                <img src="ReactBrowserRouter.png" alt="" />
            </article>
            <article>
                <h2>Routing pages</h2>
                <p>To route a page you'll have to make the file/pages you want the website be able to navigate to. The image below is an example where there's been made an About, Contact and Home .jsx file. <br />
                Afterwards inside the Routes component, you'll have to make a Route component as seen in the image.</p>
                <p>The first Route has an index and element property.</p>
                <p>Index is used to tell react-router which page should be your main page/the page your website starts on. <br />
                Element is used to tell what file is conected to what page. <br />
                Path, which is used in the two other Route componentes, is used to tell what name the endpoint of the page you are routing to should be called. The example path="about" in the image would then be "yourWebsite/about" in the Url.</p>
                <img src="ReactComponentRouting.png" alt="" />
            </article>
            <article>
                <h2>Navigating between pages</h2>
                <p>To be able to navigate between pages on your website, you'll need to make use of the Link component and/or useNavigate function. Both imported from "react-router" as seen in the example below. <br />
                They're used in the files/pages where you want the user be able to navigate to and from other pages</p>
                <p>Link uses a to="" property where you write the endpoint the Link should move the user to on your website. The example below has written to="/contact" to move the user to yourWebsite/contact.</p>
                <p>UseNavigate is a bit different. You use the function to move the user to another page when a "trigger" has happend. <br />
                The trigger can be something the user does on the website. The example could be filling out a login. When the user has entered their username and password you then tell the useNavigate to move the user to another page.</p>
                <p>In the example below, there has been made a const named "navigate" = the useNavigate Function. <br />
                Then there's made a button saying that on a click it should trigger the "navigate" that is written like navigate("/about") to tell it that it should navigate to yourWebsite/about.</p>
                <img src="Link.png" alt="" />
                <img src="UseNavigate.png" alt="" />
                <video src={pageNavigation} muted controls/>
            </article>
            <article>
                <h2>Error Page</h2>
                <p>Lastly you'll have to make an error page. You start with making a file like the other page files. <br />
                That will be the file/page your website sends the user to when they write an endpoint in the url that dosn't exist in your website.</p>
                <p>As seen in the image below, you make another Route component with element = the file you want, and path that = "*". <br />
                The "*" means that every endpoint thats not any endpoint you've already made, should direct the user to the error page.</p>
                <p>In the error page you can simply write whatever you feel necessary. In the video below there's just written Error in a h1 tag.</p>
                <img src="Error.png" alt="" />
                <video src={ErrorPageVid} muted controls/>
            </article>
        </section>
    </>
    )
}