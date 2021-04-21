let fruits = prompt('Enter the string ') ;

if (fruits === 'red') {
    greeting = 'apple';
  } else if (fruits === 'yellow') {
    greeting = 'banana';
  } else if (fruits === 'green') {
    greeting = 'grass';
  } else if  (fruits.match(/^(circle|rectangle|square)$/)){
    greeting = 'shape';
  }
else  {
    greeting = "i don't know";
   
  }
  alert(greeting)
