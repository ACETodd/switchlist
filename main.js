
//search 

var inputId = 'searchbox';
var itemsData = 'filter-value';
var displaySet = false;
var displayArr = [];










function getDisplayType(element) {
	var elementStyle = element.currentStyle || window.getComputedStyle(element, "");
	return elementStyle.display;
}

document.getElementById(inputId).onkeyup = function() {
	var searchVal = this.value.toLowerCase();
	var filterItems = document.querySelectorAll('[' + itemsData + ']');



	for(var i = 0; i < filterItems.length; i++) {
		if (!displaySet) {
			displayArr.push(getDisplayType(filterItems[i]));
		}
		
		filterItems[i].style.display = 'none';


		if(filterItems[i].getAttribute('filter-value').indexOf(searchVal) >= 0) {
			filterItems[i].style.display = displayArr[i];

			//document.getElementsByClassName('results')[0].style.display = "block";

		}

		
	}
	
	displaySet = true;
}


//scroll to top

var rootElement = document.documentElement;
const btnScrollToTop = document.getElementById("btnScrollToTop");

function handleScroll() {
	var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;


	if ((rootElement.scrollTop / scrollTotal ) > 0.01 ) {

		btnScrollToTop.classList.add('showBtn')
	} else {
	
		btnScrollToTop.classList.remove('showBtn')
	}

}

document.addEventListener('scroll', handleScroll)


btnScrollToTop.addEventListener("click", function() {

	console.log("up");
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
});





//vendor button

// const btnStore = document.getElementsByClassName("storeButton");

// function toggle() {
// 	var blur = document.getElementById('blur');
// 	blur.classList.toggle('active')
// 	var popup = document.getElementsByClassName('popup');
// 	popup.classList.toggle('active')
// }


// for (var i = 0; i < btnStore.length; i++) {
// 	btnStore[i].addEventListener("click", function() {
// 		toggle();
// 		console.log("View Vendors");
// 	})
// }






