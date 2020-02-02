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

// testing-purposed object

// object literals

// const blogs = [
// 	{
// 		title: 'first title',
// 		likes: 30
// 	},
// 	{
// 		title: 'writing',
// 		likes: 50
// 	},
// 	{
// 		title: 'painting',
// 		likes: 25
// 	}
// ];

// console.log(blogs);

// var warrior = {
// 	firstName: 'stefan',
// 	lastName: 'lazarevski',
// 	age: 25,
// 	blogs: [
// 		{
// 			title: 'first title',
// 			likes: 30
// 		},
// 		{
// 			title: 'writing',
// 			likes: 50
// 		},
// 		{
// 			title: 'painting',
// 			likes: 25
// 		}
// 	],
// 	location: 'skopje',
// 	login()	{
// 		console.log('the user logged in');
// 	},
// 	logout()	{
// 		console.log('the user logged out');
// 	},
// 	logBlogs()	{
// 		//console.log(this);
// 		console.log('this user has done some shit');
// 		this.blogs.forEach(blog =>{
// 			console.log(blog.title, blog.likes);
// 		});
// 	}
// }

// warrior.logBlogs();


// ============== Math Object ============== //

console.log(Math);
console.log(Math.PI);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area)); // takes away the decimal and leaves the integer

// random numbers

const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));