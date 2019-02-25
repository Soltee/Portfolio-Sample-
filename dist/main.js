document.addEventListener('DOMContentLoaded', ()=>{
	
	//##Search Function
	var search = document.querySelector('.fa-search');

	var searchForm = document.querySelector('.ab-form');
	var back = document.querySelector('.fa-arrow-left');
	
	search.addEventListener('click', (e)=>{
		searchForm.classList.add('is-open');
		e.target.style.opacity = "0";
	});

	back.addEventListener('click', (e)=>{
		searchForm.classList.remove('is-open');
		search.style.opacity = "1";
	});


	//## Navbar
	var bars = document.querySelector('.fa-bars');
	var appTop = document.querySelector('.app-top');
	var cross = document.querySelector('.fa-times');
	bars.addEventListener("click", (e)=>{
		appTop.classList.add('is-open-app');

		console.log(appTop);
	});

	cross.addEventListener("click", (e)=>{
		appTop.classList.remove('is-open-app');
	});

	//## Page Navigation 
	var navlinks = document.querySelectorAll('a[href*="#"]');

	navlinks.forEach((elem)=>{
	  // console.log(elem.target);
	  elem.addEventListener("click", linkClick);
	})

	function linkClick(e){
	  smoothScroll(e);
	}

	function smoothScroll(event){
	  event.preventDefault();
	  //Request AnimationFrame(callback function)
	  const targetId = event.currentTarget.getAttribute("href")==="#" ? "header" : event.currentTarget.getAttribute("href");
	  const targetPosition = document.querySelector(targetId).offsetTop;
	  const startPosition = window.pageYOffset;
	  const distance = targetPosition - startPosition;
	  const duration = 500;
	  let start = null;
	  
	  window.requestAnimationFrame(step);

	  function step(timestamp) {
	    if (!start) start = timestamp;
	    const progress = timestamp - start;
	    // window.scrollTo(0, distance*(progress/duration) + startPosition);
	    window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
	    if (progress < duration) window.requestAnimationFrame(step);
	  }
	}


	function easeInOutQuad(t, b, c, d) {
	  t /= d/2;
	  if (t < 1) return c/2*t*t + b;
	  t--;
	  return -c/2 * (t*(t-2) - 1) + b;
	};

});