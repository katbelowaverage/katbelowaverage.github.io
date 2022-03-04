function myFunction() {
  var x = document.getElementById("myText1").value;
  var y = document.getElementById("myText2").value;
  var z = document.getElementById("myText3").value;
  var s = (x + ", " + y + ", " + z + ": ") + (x*x<y&&y<z*z) + "<br>";
  document.getElementById("demo").innerHTML = s + document.getElementById("demo").innerHTML;
}
