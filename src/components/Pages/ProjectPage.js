import React from 'react'
import './ProjectPage.scss'

const ProjectPage = () => {
    return (
        <body>
            <header class='header'>
                <nav class='nav'>
                    <div class='switch-btn' id='index-switcher'></div>
                    <div>
                        <a class='nav__link' href='AboutPage.js'>
                            Projects
                        </a>
                        <a class='nav__link' href='about.html'>
                            About
                        </a>
                    </div>
                </nav>
            </header>

            <main class='main'>
                <h1>I’m glad to present you my pet projects</h1>
                <a class='main__arrow' href='#id1'></a>

                <section class='section'>
                    <div class='section__flex' id='id1'>
                        <div>
                            <h2>01 / Project name</h2>
                            <p>Description</p>
                            <a href='#'>Link</a>
                        </div>
                        <div>
                            <img
                                src='./resources/img/light.png'
                                alt='thumbnail'
                                width='640'
                                height='365'
                            />
                        </div>
                    </div>
                    <div class='line'></div>
                </section>

                <section class='section'>
                    <div class='section__flex'>
                        <div>
                            <h2>02 / Project name</h2>
                            <p>Description</p>
                            <a href='#'>Link</a>
                        </div>
                        <div>
                            <img
                                src='./resources/img/light.png'
                                alt='thumbnail'
                                width='640'
                                height='365'
                            />
                        </div>
                    </div>
                    <div class='line'></div>
                </section>

                <section class='section'>
                    <div class='section__flex'>
                        <div>
                            <h2>03 / Project name</h2>
                            <p>Description</p>
                            <a href='#'>Link</a>
                        </div>
                        <div>
                            <img
                                src='./resources/img/light.png'
                                alt='thumbnail'
                                width='640'
                                height='365'
                            />
                        </div>
                    </div>
                    <div class='line'></div>
                </section>
            </main>

            <footer class='footer'>
                <div class='footer__container'>
                    <div class='footer__name'>Danila Frolov — 2022</div>
                    <div>
                        <a href='#'>Github</a>
                        <a href='#'>WhatsApp</a>
                        <a href='#'>Telegram</a>
                        <a href='#'>LinkedIn</a>
                        <a href='#'>Skype</a>
                    </div>
                </div>
            </footer>
        </body>
    )
}

export default ProjectPage
