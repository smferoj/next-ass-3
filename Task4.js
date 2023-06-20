 
// 4.a=========creates a function x =========
function openWindow(url, width, height) {
    var windowFeatures = `width=${width},height=${height}`;
  
    window.open(url, '_blank', windowFeatures);
  }

 //4.b============implement the function (Date Object) =========
 function openWindow(url, width, height) {
    var windowFeatures = `width=${width},height=${height}`;
  
    window.open(url, '_blank', windowFeatures);
  }

 openWindow('https://www.example.com', 800, 600);