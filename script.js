var text = document.getElementById("text-area");

text.addEventListener("input",function(){
    var text = this.value;
    var char = text.length;
    document.getElementById("char").innerHTML = char;
     text = text.trim()
    var words = text.split(" ");
    let cleancode = words.filter(function(elem){
           return elem != "";
    })
    document.getElementById("word").innerHTML = cleancode.length

})
    
   
