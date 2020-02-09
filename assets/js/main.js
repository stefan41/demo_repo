// Main Script File

// showing date in the footer
var footDate = document.getElementById('footer-date');

var date = new Date().getFullYear();

footDate.innerHTML = date;


// smooth scrolling to anchors on the page using jquery
$(document).ready(function()	{
	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 900);
	});

	$(window).scroll(function()	{
		if($(this).scrollTop() > 150)	{
			$('.scrl2top').fadeIn();
		}	else	{
			$('.scrl2top').fadeOut();
		}
	});

	// the click event
	$('.scrl2top').click(function()	{
		$('html, body').animate({scrollTop: 0}, 800);
		return false;
	});

});

/* ===========================================
	create button that changes paragraph color
=========================================== */

// var btn = document.createElement("button");
// var btnText = document.createTextNode("change color");
// btn.append(btnText);
// btn.setAttribute('class', 'btn-primary mar1');

// btn.onclick = function()	{
// 	var para = document.getElementById('para1');
// 	para.style.color = "blue";
// }

// document.getElementsByClassName('demo3')[0].appendChild(btn);


/* ===========================================
	XMLHttpRequest
=========================================== */


// const getBtn = document.getElementById('get-btn');
// const postBtn = document.getElementById('post-btn');

// const sendHttpRequest = (method, url, data) => {

// 	const promise = new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest();

// 		xhr.open(method, url);

// 		xhr.responseType = 'json';

// 		if(data)	{
// 			xhr.setRequestHeader('Content-Type','application/json');
// 		}

// 		xhr.onload = () => {
// 			if(xhr.status >= 400)	{
// 				reject(xhr.response);
// 			} else {
// 				resolve(xhr.response);
// 			}	
// 		}

// 		xhr.onerror = () => {
// 			reject('Something went wrong!');
// 		};

// 		xhr.send(JSON.stringify(data));
// 	});	

// 	return promise;
// }

// const getData = () => {
// 	sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
// 		console.log(responseData);
// 	});
// };

// const sendData = () => {
// 	sendHttpRequest('POST', 'https://reqres.in/api/register', {
// 		"email": "eve.holt@reqres.in",
//     	//"password": "pistol"
// 	}).then(responseData => {
// 		console.log(responseData);
// 	}).catch(err => {
// 		console.log(err);
// 	});
// };

// getBtn.addEventListener('click', getData);
// postBtn.addEventListener('click', sendData);

const xhr = new XMLHttpRequest();

xhr.onload = function()	{
	const serverResponse = document.getElementById('srvRes');

	serverResponse.innerHTML = this.responseText;
};

xhr.open('POST', 'dom.php');

xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

xhr.send('name=stefan&message=how is it going');