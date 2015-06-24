

function make_base_auth(user, password) {

        var tok = user + ':' + password;
        var hash = btoa(tok);
        return "Basic " + hash;
}   



$('.sendwoFormData').click(function(){
	var jsonObj = 
		{
		    "fields": {
		       "project":
		       { 
		          "key": "WO"
		       },
		       "summary": $('#operation').val(),
		       "description": $('#impact').val(),
		       "issuetype": {
		          "name": "Bug"
		       },

		        "assignee": {

        		"name": $('#email').val()

      			}
		   }
		};
    
 

	var parameters = JSON.stringify(jsonObj),
	    url = "http://localhost:9090/rest/api/2/issue/";
	    
	$.ajax({

	    url:url,
		type: "POST",
		cache : false,
		data: parameters,
		
		beforeSend: function(xhr){
		
		//xhr.setRequestHeader('Authorization', 'basic: '+make_base_auth("manabshy@gmail.com", "Online5759"));

		},
		
	    dataType: "json",
	    contentType: "application/json",
	    async: false,
	    success: function (issuedata) {
          $( "#dialog").text('WO Created in Jira:' + issuedata.key);	
          $( "#dialog" ).dialog();	    	
	      $('#woNumber').val(issuedata.key);
	    },
	    error: function(XMLHttpRequest, textStatus, errorThrown) {
	      console.log(JSON.parse(XMLHttpRequest.responseText).errors);	  
          $( "#errordialog").text("Error Posting data in Jira")  ;	
          $( "#errordialog" ).dialog();	    
	    }
	});
});

