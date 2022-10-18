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
  <div class="nav-links">
    <ul>
      <li><a href="/index.html">Home</a></li>
      <li><a href="">Projects</a></li>
      <li><a href="">About Us</a></li>
    </ul>
  </div>
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