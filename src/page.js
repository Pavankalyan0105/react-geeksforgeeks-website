import React, { Component } from "react";
import logo from "./images/logo.png"
import intro from "./images/intro-3.jpg"
import logochapter from "./images/logo-stundent--chptr.png"
import "./page.css"

class Page extends Component {
    render() {
        return(
            <div>
                <header class="header">

                <a href="#" class="header__logo">GFG VIIT</a>

                <ion-icon name="menu-outline" class="header__toggle" id="nav-toggle"></ion-icon>


                <nav class="nav" id="nav-menu">

                <div class="nav__content bd-grid">

                    <ion-icon name="close-outline" class="nav__close" id="nav-close"></ion-icon>

                    <div class="nav__perfil">
                        <div class="nav__img"> <img src={logo} alt=""/> </div>
                        
                        <div>
                            <a href="#" class="nav__name">GFG VIIT</a>
                        </div>

                    </div>

                    <div class="nav__menu">
                        <ul class="nav__list">
                            <li class="nav__item"><a href="#" class="nav__link active">Home</a></li>
                            <li class="nav__item"><a href="#" class="nav__link">About</a></li>
                            <li class="nav__item"><a href="#" class="nav__link">Events</a></li>
                            <li class="nav__item"><a href="#" class="nav__link">Team</a></li>
                            <li class="nav__item"><a href="#" class="nav__link">Contact</a></li>
                        </ul>
                    </div>

                    <div class="nav__social">
                        <a href="#" class="nav__social-icon"><ion-icon name="logo-linkedin"></ion-icon></a>
                        <a href="#" class="nav__social-icon"><ion-icon name="logo-github"></ion-icon></a>
                        <a href="#" class="nav__social-icon"><ion-icon name="logo-instagram"></ion-icon></a>
                    </div>


                </div>
            </nav>

            </header>

            <div class="intro">
            <div class="imgBx">
                <img src={intro} alt=""/>
            </div>
            <div class="main-content">
                <h1>Learn, Experience and finally achieve Excellence</h1>
                <p>Knowledge is power. There is no limit to the knowledge that one can have. Learn, code and master the art of your technical skills by actively participating in all the contests, workshops, and webinars conducted by our GeeksforGeeks Student Chapter. You can also join us and contribute your knowledge about Computer Science to our world of geeks.</p>
            </div>
            </div>

            <div class="about">
            <div class="about-title">
                <h1>About</h1>
            </div>
            <div class="about-wrapper">
                <div class="logoBx">
                    <img src={logochapter} alt=""/>
                </div>
                <div class="about-content">
                    <p>GeeksforGeeks supports the professional as well as the technical growth of its members by providing multiple opportunities for learning, programming, career development, and competent networking. Our mission is to provide you with the knowledge and skills you need, so that you will be able to craft the kinds of different technological skills, programming languages and many more. This is the platform where we consistently strive to offer the best of education. This website was created with an aim to provide well thought and fully explained solutions for any of your queries. Our core team of super-geeks consists of technology lovers and computer science enthusiasts and we have been constantly working in the direction to provide you with the necessary knowledge which can lead you to a success path. We also give everyone the chance to share their thoughts and experiences as they happen!</p>
                </div>
            </div>
            </div>
            </div>
        );
    }

}

export default Page;