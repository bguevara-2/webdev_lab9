function file(){
  var button = document.getElementById('entrybutton');

  function showText(){
    var text = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = text.value;
    alert("Bryan Guevara: " + text.value);
  }

  button.addEventListener('click', showText);
}

window.addEventListener('load', file);