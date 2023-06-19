 
// 4.a=========creates a function =========
function openWindow(url, width, height) {
    var windowFeatures = `width=${width},height=${height}`;
  
    window.open(url, '_blank', windowFeatures);
  }

 //4.b============implement the function =========
 function openWindow(url, width, height) {
    var windowFeatures = `width=${width},height=${height}`;
  
    window.open(url, '_blank', windowFeatures);
  }

 openWindow('https://www.example.com', 800, 600);