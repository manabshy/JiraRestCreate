
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}
function make_base_auth(user, password) {

        var tok = user + ':' + password;
        var hash = btoa(tok);
        return "Basic " + hash;
}   



$('.sendwoFormData').click(function(){
	var issuekey = 'WO-1';
	var jsonObj = 
		{
		    "fields": {
		       "project":
		       { 
		          "key": "WO"
		       },
		       "summary": "I am again created using a browser webApp.",
		       "description": "Creating of an issue using project keys and issue type names using the REST API",
		       "issuetype": {
		          "name": "Bug"
		       }
		   }
		};

	var parameters = JSON.stringify(jsonObj);
	$.ajax({

	    url:"http://localhost:9090/rest/api/2/issue/",
		type: "POST",
		data: parameters,
		
		beforeSend: function(xhr){
		//var xhr = createCORSRequest('POST', "http://localhost:9090/rest/api/2/issue/");	
		//console.log('basic:%s', make_base_auth("manabshy@gmail.com", "Online5759"));
		
		//xhr.setRequestHeader('Authorization', 'basic: '+make_base_auth("manabshy@gmail.com", "Online5759"));

		},
		
	    dataType: "json",
	    contentType: "application/json",
	    async: false,
	    success: function (issuedata) {
	    	console.log('hola');
	 		console.log(issuedata);
	        if (issuedata.issues.length == 1)  {
	 
	                            // do something
	             alert("Success!");
	        } else {
	 
	            return 0;
	        }
	    },
	    error: function(response) {
	                    console.log("Error!");
	        return 0;
	    }
	});
});

