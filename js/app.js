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
    <div class="column">
        <h1>Contact Us</h1>
        <h2>Gmails:</h2>
        <h3>ap.ryzaeireene.uy@apecschools.edu.ph</h3>
        <h3>ap.vincentwilliam.rodriguez@apecschools.edu.ph</h3>
        <h3>ap.cayril.aguilar@apecschools.edu.ph</h3>
    </div>
</footer>
`
	}
}

customElements.define('website-nav', WebsiteNav)
customElements.define('website-footer', WebsiteFooter)