function copyIP() {
  var copyText = document.getElementById("serverIP");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  document.getElementById('serverIPtooltip').innerHTML = "Copied!";
  setTimeout(resetCopiedHoverText,2000);
  console.log("User copied text: ")
  console.log(copyText.value);
}
function resetCopiedHoverText(){
  document.getElementById('serverIPtooltip').innerHTML = "Click to copy!";
}

/* ======================== Dropdown ======================== */
// function fromDropdown() {document.getElementById("fromDropdown").classList.toggle("show");}
// function fromBlur() {document.getElementById("fromDropdown").classList.toggle("show");}
//
// function toDropdown() {document.getElementById("toDropdown").classList.toggle("show");}
// function toBlur() {document.getElementById("toDropdown").classList.toggle("show");}
//
// function fromFilterFunction() {
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("fromInput");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("fromDropdown");
//   a = div.getElementsByTagName("input").getAttribute("value");
//   document.getElementById("demo").innerHTML = a;
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }
//
// function toFilterFunction() {
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("toInput");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("toDropdown");
//   a = div.getElementsByTagName("a");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }

// To/From train stations
function evalStation() {
  var from, to;
  from = document.getElementById("fromInput").value;
  to = document.getElementById("toInput").value;
  from1 = from.replace("","");
  to1 = to.replace("","")
  var farechart = JSON.parse(fares);
  if (farechart[from1][to1] != null) {
    document.getElementById("SearchResult").innerHTML = "Fare from " + from + " to " + to + " is £"+farechart[from1][to1];
  } else {
    // Error code
    document.getElementById("SearchResult").innerHTML = "Sorry, but we could not find the stations specified. Please try again.";
  }
}
