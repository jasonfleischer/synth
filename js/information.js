var information = {}

information.showAlert = function(){

	let contents = `
		<p onclick="openMailToDeveloper()">Thank you for using this website. If you wish to submit feedback, comment or report an error click <strong>here</strong>.</p>
		<p onclick="openURL('https://jasonfleischer.github.io/website/');">Information about the developer can be found <strong>here</strong>.</p>`
	alert.show("Information", contents)
}

information.dismissAlert = function(){
	alert.dismiss()
}

 function openURL(url){
	window.open(url, '_blank');
}

function openMailToDeveloper(){
	var subject = "Synth Website Feedback";
	subject = subject.replaceAll(" ", "%20");
	openURL("mailto:jason_fleischer@hotmail.ca?Subject=" + subject);
}