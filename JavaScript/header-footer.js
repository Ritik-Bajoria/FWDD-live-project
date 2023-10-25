// creating a header element
class headerOfWebsite extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <div id="heading">
        <header>
        <img id="logo" src="./Pictures/logo1.jpg">
        <div id="title"><p>Tip Top Sweets</p></div>
        <nav>
        <ul type="none">
        <li><a href="index.html">Home</a></li>
        <li><a href="location.html">Location</a></li>
        <li><a href="aboutus.html">About us</a></li>
        <li><a href="contactus.html">Contact us</a></li>
        </ul>
        </nav>
        </header>

        <div class="hamburger-menu">
        <button class="hamburger" id="toggleButton">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        </button>
        <nav>
        <div class="list" style="display:none;" id="list">
        <a href="index.html"><div>Home</div></a>
        <a href="location.html"><div>Location</div></a>
        <a href="aboutus.html"><div>About us</div></a>
        <a href="contactus.html"><div>Contact us</div></a>
        </div>
        </nav>
        </div>
        </div>`
    }
}
// defining a custom header element 
customElements.define('website-header',headerOfWebsite);

// creating a footer element 
class footerOfWebsite extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="footer">
        <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
        </div>
        <ul class="social-icon">
        <li class="social-icon__item">
        <p>Online Order From:</p>
        </li>
        <li class="social-icon__item">
        <a href="https://pathao.com/np/" class="social-icon__link" target="_blank">
        <img src="./Pictures/Pathao.png">
        </a>
        </li>
        <li class="social-icon__item">
        <a href="https://foodmandu.com/Restaurant/Details/1236" class="social-icon__link" target="_blank">
        <img src="./Pictures/Foodmandu.png">
        </a>
        </li>
        </ul>
        <ul class="menu">
        <li class="menu__item">
        <a class="menu__link" href="index.html">
        Home
        </a>
        </li>
        <li class="menu__item">
        <a class="menu__link" href="location.html">
        Location
        </a>
        </li>
        <li class="menu__item">
        <a class="menu__link" href="aboutus.html">
        About Us
        </a>
        </li>
        <li class="menu__item">
        <a class="menu__link" href="contactus.html">
        Contact Us
        </a>
        </li>
        </ul>
        <p>Copyrights &copy; 2023 Tip Top sweets. All rights reserved.</p>
        </footer>`
    }
}
// defining a custom footer element 
customElements.define('website-footer',footerOfWebsite);

