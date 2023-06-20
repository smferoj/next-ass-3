// 1.a=========creates a function (Date Object)=========

function getDayOfWeek(dateString) {
  var date = new Date(dateString);
  var options = { weekday: 'long' };
  var dayOfWeek = date.toLocaleDateString('en-US', options);
  return dayOfWeek;
}


//1.b============implement the function (Date Object) =========

function displayDayOfWeek() {
  var date = new Date();
  var options = { weekday: 'long' };
  var result = date.toLocaleDateString('en-US', options);
  console.log("Today is " + result);
}

displayDayOfWeek(); 