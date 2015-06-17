function make_base_auth(user, password) {

        var tok = user + ':' + password;
        var hash = btoa(tok);
        return "Basic " + hash;
}   

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

var jsonObj = {
	    "fields": {
	       "project":
	       { 
	          "key": "WO"
	       },
	       "summary": "I am again created using curl.",
	       "description": "Creating of an issue using project keys and issue type names using the REST API",
	       "issuetype": {
	          "name": "Bug"
	       }
	   }
	};
	var parameters = JSON.stringify(jsonObj);                                      

jQuery.ajax({ type: "POST", 
		  url:  "http://localhost:9090/rest/api/2/issue/WO-2" , 
		  data: parameters, 
		  async: false,		
		  dataType: "json", 
		  contentType: "application/json" 
		});