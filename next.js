
//function toNext(){
//    
//    
//   for(i = 0; i < scenarios.length; i++){



var index = 0;
            

            
function  nextScene() {
            
                
    if(index === scenarios.length) return;
                
    var imageString = scenarios[index]["background"];
    document.body.style.backgroundImage = "url(" + imageString + ")";
            
            
    index += 1;
                
}
