<title>Welcome to SyberShare</title>

<link rel="stylesheet" href="reset.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
</head>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
<script>
$(function(){
	$('.wrapper').css({
		position:'absolute',
		left: ($(window).width() - $('.wrapper').outerWidth())/2,
		top: ($(window).height() - $('.wrapper').outerHeight())/2
	});
	$("body").css("height",$(window).height());

})
</script>
<style>
body{
background:url(images/random.php) repeat top center;
	margin:0;
	padding:0;
	font-family: 'Open Sans', sans-serif;
}
.wrapper{
	position:absolute;
	width:500px;
	height:auto;
	text-align:center;
}
h1,h2{
	color:white;
	font-weight:300;
	font-size:30px;
	margin:0px 0px 5px 0px;
	text-shadow:1px 1px 2px black;
}
h2{
	font-size:24px;
}
a:link,a:hover,a:active,a:visited{
	color:white;
	text-shadow:1px 1px 2px black;
}
input{
height:40px;
width:250px;
margin-bottom:30px;
color:#acacac;
border:0;
-webkit-border-radius: 2px;
-moz-border-radius: 2px;
border-radius: 2px;
}
input:focus{
color:#787878;
}
input[type="text"]{
background: url(img/avatar.png) no-repeat scroll 7px 10px white;
background-size:23px 23px;
padding-left:35px;
padding-right:15px;
}
input[type="password"]{
background: url(img/lock.png) no-repeat scroll 10px 8px white;
background-size:30px 24px;
padding-left:35px;
padding-right:15px;
}
input[type="submit"]{
font-size:16px;
cursor:pointer;
color:white;
width:300px;
height:45px;
margin-bottom:3px;
background: #51a8ff; /* Old browsers */
background: -moz-linear-gradient(top, #51a8ff 0%, #1782ed 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#51a8ff), color-stop(100%,#1782ed)); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(top, #51a8ff 0%,#1782ed 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(top, #51a8ff 0%,#1782ed 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(top, #51a8ff 0%,#1782ed 100%); /* IE10+ */
background: linear-gradient(to bottom, #51a8ff 0%,#1782ed 100%); /* W3C */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#51a8ff', endColorstr='#1782ed',GradientType=0 ); /* IE6-9 */
-webkit-box-shadow: inset 0px 1px 0px rgba(255,255,255,0.4), 1px 1px 6px rgba(50, 50, 50, 0.83);
-moz-box-shadow:    inset 0px 1px 0px rgba(255,255,255,0.4), 1px 1px 6px rgba(50, 50, 50, 0.83);
box-shadow:         inset 0px 1px 0px rgba(255,255,255,0.4), 1px 1px 6px rgba(50, 50, 50, 0.83);
text-shadow:1px 1px 1px rgba(0,82,121,1);
}
input[type="submit"]:hover{
background: #2b95ff; /* Old browsers */
background: -moz-linear-gradient(top, #2b95ff 0%, #0f67bf 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#2b95ff), color-stop(100%,#0f67bf)); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(top, #2b95ff 0%,#0f67bf 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(top, #2b95ff 0%,#0f67bf 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(top, #2b95ff 0%,#0f67bf 100%); /* IE10+ */
background: linear-gradient(to bottom, #2b95ff 0%,#0f67bf 100%); /* W3C */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2b95ff', endColorstr='#0f67bf',GradientType=0 ); /* IE6-9 */
text-shadow:1px 1px 1px rgba(0,82,121,1);
}
</style>
<div class="wrapper">
<form id="user_form_login" enctype="application/x-www-form-urlencoded" class="global_form" action="http://sybershare.com/login" method="post">
<h1>Sign in to your account<h1>
<h2>Welcome, to SyberShare!</h2><br>


<input type="text" name="email" id="email" placeholder="Email address"><br>

<input type="password" name="password"  placeholder="Password">
<input type="submit" value="Login"><br>
<small><a href="http://sybershare.com/user/auth/forgot">Forgot password?</a><br><a href="http://sybershare.com/signup">Sign up!</a></small>
</form>
</div> </div>
</div>
</div>
</div>





