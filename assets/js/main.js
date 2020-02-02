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
});

// testing-purposed object

// object literals

const blogs = [
	{
		title: 'first title',
		likes: 30
	},
	{
		title: 'writing',
		likes: 50
	},
	{
		title: 'painting',
		likes: 25
	}
];

console.log(blogs);

var warrior = {
	firstName: 'stefan',
	lastName: 'lazarevski',
	age: 25,
	blogs: ['drawing', 'painting', 'surfing', 'woodworking'],
	location: 'skopje',
	login()	{
		console.log('the user logged in');
	},
	logout()	{
		console.log('the user logged out');
	},
	logSkills()	{
		//console.log(this);
		console.log('this user has done some shit');
		this.blogs.forEach(blog =>{
			console.log(blog);
		});
	}
}

warrior.logout();
