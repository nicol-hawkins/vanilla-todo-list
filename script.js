// Create a "close" button and append it to each list item
var myNewlist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNewlist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNewlist[i].appendChild(span);

}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
} 

// Create a new list item
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("listInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You didn't add anything!");
  } else {
    document.getElementById("myItems").appendChild(li);
  }

  //when uncommented, 'x' button dissapears from new list item...
  // document.getElementById("listItem").value = "";

  //Adds close button to newly spanned list items
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}