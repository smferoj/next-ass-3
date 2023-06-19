function sendGETRequest() {
    var xhr = new XMLHttpRequest();
    var url = "https://api.example.com/data";
  
    xhr.open("GET", url, true);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = xhr.responseText;
        console.log(response); // You can handle the response data here
      }
    };
  
    xhr.send();
  }