var happy = []

function forLoop(array){
  for(var i =0; i<25; i++){
    if (i === 1) {
    array.push("I am 1 strange loop.")}
    else{
      array.push(`I am ${i} strange loop.`)
  }
}
  return array;
}

function whileLoop(number){
  while(number>0){
    console.log(number--)
    
  }
 return 'done'
    }
  
  var sandwich = ["bread","jam","honey"]
  
  function doWhileLoop(array){
    var length = array.length
    do {return array}
    while(length>0);
    length--
  }
  
  
  