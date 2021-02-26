//JavaScript Code untuk detect CapsLock

var capsLockEnabled = null;

function getChar(e) {

  if (e.which == null) {
    return String.fromCharCode(e.keyCode); // IE
  }
  if (e.which != 0 && e.charCode != 0) {
    return String.fromCharCode(e.which); // rest
  }

  return null;
}

document.onkeydown = function(e) {
  e = e || event;

  if (e.keyCode == 20 && capsLockEnabled !== null) {
    capsLockEnabled = !capsLockEnabled;
  }
}

document.onkeypress = function(e) {
  e = e || event;

  var chr = getChar(e);
  if (!chr) return; // special key

  if (chr.toLowerCase() == chr.toUpperCase()) {
    // caseless symbol, like whitespace 
    // can't use it to detect Caps Lock
    return;
  }

  capsLockEnabled = (chr.toLowerCase() == chr && e.shiftKey) || (chr.toUpperCase() == chr && !e.shiftKey);
}

/**
 * Check caps lock 
 */
function checkCapsWarning() {
  document.getElementById('caps').style.display = capsLockEnabled ? 'block' : 'none';
}

function removeCapsWarning() {
  document.getElementById('caps').style.display = 'none';
}
//JavScript Code untuk notifikasi recovery password
var ALERT_TITLE = "Hallo User";
var ALERT_BUTTON_TEXT = "Ok";

if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";
    
    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "login";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }

    alertObj.style.display = "block";
    
}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
function ful(){
alert('Alert this pages');
}

// javaScript Checkout Dibawah
// var cardDrop = document.getElementById('card-dropdown');
// var activeDropdown;
// cardDrop.addEventListener('click',function(){
//   var node;
//   for (var i = 0; i < this.childNodes.length-1; i++)
//     node = this.childNodes[i];
//     if (node.className === 'dropdown-select') {
//       node.classList.add('visible');
//        activeDropdown = node; 
//     };
// })

// window.onclick = function(e) {
//   console.log(e.target.tagName)
//   console.log('dropdown');
//   console.log(activeDropdown)
//   if (e.target.tagName === 'LI' && activeDropdown){
//     if (e.target.innerHTML === 'Master Card') {
//       document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
//           activeDropdown.classList.remove('visible');
//       activeDropdown = null;
//       e.target.innerHTML = document.getElementById('current-card').innerHTML;
//       document.getElementById('current-card').innerHTML = 'Master Card';
//     }
//     else if (e.target.innerHTML === 'American Express') {
//          document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
//           activeDropdown.classList.remove('visible');
//       activeDropdown = null;
//       e.target.innerHTML = document.getElementById('current-card').innerHTML;
//       document.getElementById('current-card').innerHTML = 'American Express';      
//     }
//     else if (e.target.innerHTML === 'Visa') {
//          document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
//           activeDropdown.classList.remove('visible');
//       activeDropdown = null;
//       e.target.innerHTML = document.getElementById('current-card').innerHTML;
//       document.getElementById('current-card').innerHTML = 'Visa';
//     }
//   }
//   else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
//     activeDropdown.classList.remove('visible');
//     activeDropdown = null;
//   }
// }

   