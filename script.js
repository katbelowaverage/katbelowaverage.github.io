function myFunction() {
var k = document.getElementById("input").value;
var r = "";
for(let i = k.length-1; i >= 0; i--){
	r += String.fromCharCode(
    (k.charCodeAt(i)-
    "AnyaChenQT".charAt((k.length-i-1)%10).charCodeAt(0))
    /("ilysm".charAt((k.length-i-1)%5).charCodeAt(0)-96));
}
var x = parseInt(document.getElementById("myText1").value);
  var y = parseInt(document.getElementById("myText2").value);
  var z = parseInt(document.getElementById("myText3").value);
  var s = (x + ", " + y + ", " + z + ": ") + eval(r) + "<br>";
  document.getElementById("demo").innerHTML = s + document.getElementById("demo").innerHTML;
  }
  //x*x<y&&y<z*z
  function myFunction2() {
  	var k = document.getElementById("input2").value;
var r = "";
for(let i = k.length-1; i >= 0; i--){
	r += String.fromCharCode(
    k.charCodeAt(i)*
    ("ilysm".charAt(i%5).charCodeAt(0)-96)
    +"AnyaChenQT".charAt(i%10).charCodeAt(0))
}
  document.getElementById("demo2").innerHTML = r;

  }
