var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');
var xVar = document.getElementsByClassName('column');
var OuterVar = document.getElementsByClassName('outer_bottom');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
    	var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');
        
       	if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        for(var i=0; i< xVar.length;i++){
            xVar[i].style.width = "100%";
         }           
        for(var i=0; i< OuterVar.length;i++){
            OuterVar[i].style.padding = "16px 0px";
         }           
      
    } else {
        for(var i=0; i< xVar.length;i++){
            xVar[i].style.width = "50%";
         }       
        for(var i=0; i< OuterVar.length;i++){
            OuterVar[i].style.padding = "30px 60px";
         }        
    }
  }
  
  var x = window.matchMedia("(max-width: 600px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes