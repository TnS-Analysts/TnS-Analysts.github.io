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
  <a href="/index.html"><img src="/images/logo_transparent.png"></a>
  <div class="nav-links" id="navLinks">
    <img src="/images/icons/close.png" class="mobile" onclick="hideMenu()">

    <ul>
      <li><span class="text"><a href="/index.html">Home</a></span></li>

      <li><div class="dropdown">
        <div class="options">
          <div class="drop-option">
            <a href="/pages/basic_information.html" class="mobile">
              <span class="text">
                EG7 Experience 1 (Part 1)
              </span>
            </a>
          </div>

          <div class="drop-option">
            <a href="/pages/journey.html">
              <span class="text">
                EG7 Experience 1 (Part 2)
              </span>
            </a>
          </div>
        </div>

        <button class="drop-btn">
          <span class="text">
            Our Content
            <img src="/images/icons/arrow.png">
          </span>
        </button>
      </div></li>

      <li><span class="text"><a href="/index.html">About Us</a></span></li>
      <li><span class="text"><a href="/index.html">Contact Us</a></span></li>
      <li><span class="text"><a href="/index.html">Our Events</a></span></li>
    </ul>
  </div>
  <img src="/images/icons/hamburger.png" class="mobile" onclick="showMenu()">
</nav>
`
	}
}

class WebsiteFooter extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `
<footer>
    <div class="footer-main">
        <div class="footer-row">
            <div class="footer-column">
                <h1>Contact Us</h1>
                <strong>Gmails:</strong>
                <p>ap.ryzaeireene.uy@apecschools.edu.ph</p>
                <p>ap.vincentwilliam.rodriguez@apecschools.edu.ph</p>
                <p>ap.cayril.aguilar@apecschools.edu.ph</p>
            </div>

            <div class="footer-column">
                <a href="/index.html"><img src="/images/logo_transparent.png"></a>
            </div>
        </div>
        <div class="copyright">
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

const optionMenu = document.querySelector(".options"),
       selectBtn = document.querySelector(".drop-btn")

selectBtn.addEventListener("click", () => {setTimeout(() => optionMenu.classList.add("active"), 1)})
document.addEventListener("click", () => optionMenu.classList.remove("active"))

// Responsive navigation

var navLinks = document.getElementById("navLinks")

function showMenu(){
  navLinks.style.right = "0"
}

function hideMenu(){
  navLinks.style.right = "-200px";
}