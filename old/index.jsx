import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function Header() {
    return <header>
        <nav id="horizontal-menu">
            <ul id="horizontal-menu-list">
                <li><a href="#education">EDUCATION</a></li>
                <li><a href="#work">EXPERIENCE</a></li>
                <li><a href="#projects">PROJECTS</a></li>
            </ul>
        </nav>
        <nav id="vertical-menu">
            <a href="https://github.com/deenahl" target="_blank">
                <i className="fa fa-github" id="github-icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/deenah-laron-9ba906244/" target="_blank">
                <i className="fa fa-linkedin-square" id="linkedin-icon"></i>
            </a>
            <a href="https://www.instagram.com/deenahl/?hl=en" target="_blank">
                <i className="fa fa-instagram" id="instagram-icon"></i>
            </a>
        </nav>

    </header>
}

root.render(
    <Header />
)