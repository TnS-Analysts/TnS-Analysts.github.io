// MEDIA QUERY

let mediaQuery = window.matchMedia('(max-width: 600px)')
 
function widthChangeCallback(myMediaQuery) {
  mediaQuery = window.matchMedia('(max-width: 600px)')
}
 
mediaQuery.addEventListener('change', widthChangeCallback)


// SCROLL ANIMATION

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting){
			entry.target.classList.add("show")
		} //else {
		// 	entry.target.classList.remove("show")
		// }
	})
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))


// CUSTOM HTML ELEMENT

class WebsiteNav extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `
<nav>
  <a href="/index.html"><img src="/images/logo_vector.svg"></a>
  <div class="nav-links" id="navLinks">
    <img src="/images/icons/close.png" id="close" class="mobile" onclick="hideMenu()">

    <ul>
      <li><span class="text"><a href="/index.html">Home</a></span></li>

      <li><div class="dropdown">
        <div class="options">
          <div class="more">
            <div class="more-options">
              <span class="text">
                <a href="/pages/basic_information.html" class="mobile">
                  EG7 Experience 1 (Part 1)
                </a>
              </span>

              <span class="text">
                <a href="/pages/basic_information.html" class="mobile">
                  EG7 Experience 1 (Part 2)
                </a>
              </span>
            </div>

            <button class="more-btn">
              <span class="text">
                Quarter 1
                <img src="/images/icons/arrow.png">
              </span>
            </button>
          </div>


          <div class="more">
            <div class="more-options">
              <span class="text">
                <a href="" class="mobile">
                  Stream Outline
                </a>
              </span>
            </div>

            <button class="more-btn">
              <span class="text">
                Quarter 2
                <img src="/images/icons/arrow.png">
              </span>
            </button>
          </div>


          <div class="more">


            <button class="more-btn">
              <span class="text">
                Quarter 3
                <img src="/images/icons/arrow.png">
              </span>
            </button>
          </div>


          <div class="more">


            <button class="more-btn">
              <span class="text">
                Quarter 4
                <img src="/images/icons/arrow.png">
              </span>
            </button>
          </div>
        </div>

        <button class="drop-btn">
          <span class="text">
            Our Content
            <img src="/images/icons/arrow.png">
          </span>
        </button>
      </div></li>

      <li><span class="text"><a href="/pages/about_us.html">About Us</a></span></li>
      <li><span class="text"><a href="/pages/contact_us.html">Contact Us</a></span></li>
      <li><span class="text"><a href="/pages/our_events.html">Our Events</a></span></li>
    </ul>
  </div>
  <img src="/images/icons/hamburger.png" id="hamburger" class="mobile" onclick="showMenu()">
</nav>

<button onclick="backToTop()" id="backToTop">
  <img src="/images/icons/up_arrow.png">
</button>
`
	}
}

class WebsiteFooter extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `
<footer>
    <div class="footer-main">
        <div class="footer-column">
          <a href="/index.html"><img src="/images/logo_vector.svg" id="logo"></a>
          <h1>T&S Analysts</h1>
          <p>Got any suggestion or feedback? Contact us through our social media below:</p>

          <div class="social-media-buttons">
            <a href="https://github.com/TnS-Analysts">
              <div class="social-media"><img src="/images/icons/github.png"></div>
            </a>

            <a href="">
              <div class="social-media"><img src="/images/icons/twitter.png"></div>
            </a>

            <a href="https://www.youtube.com/@TnS_Analyst">
              <div class="social-media"><img src="/images/icons/youtube.png"></div>
            </a>

            <a href="https://www.instagram.com/ts_analysts/">
              <div class="social-media"><img src="/images/icons/instagram.png"></div>
            </a>

            <a href="">
              <div class="social-media"><img src="/images/icons/facebook.png"></div>
            </a>
          </div>
        </div>

        <div class="footer-column copyright">
            <p>© 2022 T&S Analysts. All rights reserved.</p> 
        </div>
    </div>
</footer>
`
	}
}

customElements.define('website-nav', WebsiteNav)
customElements.define('website-footer', WebsiteFooter)


// Navigation script
const dropBtn = document.getElementsByClassName("drop-btn")

for (i = 0; i < dropBtn.length; i++){
  let b = dropBtn[i]
  let p = b.parentElement
  let o = p.querySelector(".options")

  b.addEventListener("click", function() {
    o.classList.toggle("active")
  })

  if (!mediaQuery.matches){
    document.addEventListener('click', event => {
      const isClickInside = p.contains(event.target)

      if (!isClickInside) {
        o.classList.remove("active")
      }
    })
  }
}

// Multi-level navigation script
const moreBtn = document.getElementsByClassName("more-btn")

for (i = 0; i < moreBtn.length; i++){
  let b = moreBtn[i]
  let p = b.parentElement
  let o = p.querySelector(".more-options")

  b.addEventListener("click", function() {
    o.classList.toggle("active")
  })
}

// Responsive navigation

var navLinks = document.getElementById("navLinks")

function showMenu(){
  navLinks.style.left = "0"
}

function hideMenu(){
  navLinks.style.left = "-250px"
}

// Back to top button

var backToTopButton = document.getElementById("backToTop")

window.onscroll = function() {scrollFunction()}

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    backToTopButton.style.opacity = "1"
    backToTopButton.style.zIndex = "1"
  } else {
    backToTopButton.style.opacity = "0"
    backToTopButton.style.zIndex = "-1"
  }
}

function backToTop() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}