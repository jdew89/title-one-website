//when DOM is first loaded
document.addEventListener('DOMContentLoaded', (event) => {
	//console.log('DOM fully loaded and parsed');
	/* -------------------
	Creates a collipsible element
	----------------------*/
	var coll = document.getElementsByClassName("collapsible");
	//var i;
	for( c of coll){
	//for (i = 0; i < coll.length; i++) {
		//coll[i].addEventListener("click", function() {
		c.addEventListener("click", function() {
			//this.classList.toggle("active");
			//get the chevron icon
			let icon = this.getElementsByClassName("collapsible-icon")[0];
			//get the content element
			var content = this.nextElementSibling;
			//this references the content under the collapsible to add in a margin so it displays properly
			//var collapsible_container = this.nextElementSibling.getElementsByClassName("collapsible-container")[0];
			//if a max height is set, change to null
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
				icon.classList.toggle("fa-chevron-down");
				icon.classList.toggle("fa-chevron-up");
			} else {//if the content is hidden, set max height for transition
				content.style.maxHeight = content.scrollHeight + "px";
				icon.classList.toggle("fa-chevron-down");
				icon.classList.toggle("fa-chevron-up");
			}
		});
	}

	/*------------
	Add function to clickable navbar menu
	---------------*/
	// Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});
