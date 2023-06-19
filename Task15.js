function sendPOSTRequest() {
    var xhr = new XMLHttpRequest();
    var url = "https://api.example.com/submit";
    var data = {
      name: "John Doe",
      email: "johndoe@example.com"
    };
  
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var response = xhr.responseText;
          console.log(response); // You can handle the response data here
        } else {
          console.error("Request failed with status", xhr.status);
        }
      }
    };
  
    xhr.send(JSON.stringify(data));
  }