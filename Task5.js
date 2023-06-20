// 5.a=========creates a function (Navigator Object)=========

function getBrowserInfo() {
  var userAgent = navigator.userAgent;
  var browserName;
  var browserVersion;

  if (userAgent.indexOf('Chrome') !== -1) {
    browserName = 'Chrome';
    browserVersion = userAgent.match(/Chrome\/(\d+)/)[1];
  } else if (userAgent.indexOf('Firefox') !== -1) {
    browserName = 'Firefox';
    browserVersion = userAgent.match(/Firefox\/(\d+)/)[1];
  } else {
    browserName = 'Unknown';
    browserVersion = 'Unknown';
  }
  return {
    name: browserName,
    version: browserVersion
  };

};

 //5.b============implement the function (Navigator Object) =========

 function getBrowserInfo() {
    var userAgent = navigator.userAgent;
    var browserName;
    var browserVersion;
  
  
    // Detect browser name and version
    if (userAgent.indexOf('Chrome') !== -1) {
      browserName = 'Chrome';
      browserVersion = userAgent.match(/Chrome\/(\d+)/)[1];
    } else if (userAgent.indexOf('Firefox') !== -1) {
      browserName = 'Firefox';
      browserVersion = userAgent.match(/Firefox\/(\d+)/)[1];
    } else {
      browserName = 'Unknown';
      browserVersion = 'Unknown';
    }
    return {
      name: browserName,
      version: browserVersion
    };
  
  };
  
 var browserInfo = getBrowserInfo();
console.log('Browser Name:', browserInfo.name);
console.log('Browser Version:', browserInfo.version);