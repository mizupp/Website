$(document).ready(function() {
	
	
	//Takes the styling of the body and makes it so that we cannot see any on the page. Then this slowly fades in using the jquery method of "fadeIn". I have changed the fade in to the slightly faster since I don't want the user to wait a long time for body of the pages to fade in and out.
	
	$("body").css("display", "none");
    $("body").fadeIn(3000);
    
	//whereever the class of "fadingmiznapages" is used; this js code will apply it to the body of that page. This usually happen through a clicking link function. If the link that is leading you out of the page has this class; the body will "fadeOut" (jquery method). It then redirects you to the page that the link was supposed to take you.
	$("a.fadingmiznapages").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(3000, redirectPage);		
	});
	// this function shows that the window location is the link location; so you will be redirected to the page needed.	
	function redirectPage() {
		window.location = linkLocation;
	}
	
});


