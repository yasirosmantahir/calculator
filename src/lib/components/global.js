import { writable, derived } from 'svelte/store';

export let operation = writable([]);
export let result = writable(0);


// Reactive variable to hold the joined value
let joinedValue;
let previous_result;

// Reactive statement to update joinedValue whenever operation changes
$: {
  operation.subscribe(value => {
    joinedValue = value.join(''); // Join the elements with a comma
  });
}

$: {
  result.subscribe(value => {
    previous_result = value; // Update currentValue whenever result changes
  }); 
}

export function handleClick(label) {

  let perform = true;
  
  if(label=="C"){
    operation.update(current => {
      if (current.length > 0) {
        return current.slice(0, -1); // Remove the last element
      }
      return current; // Return the current array if it's empty
    }); // Update the store with the new label

  
  }
  else if(label == "AC"){
    operation.update(current => []); // Update the store with the new label

  }
  else if(label == "="){
    
    operation.update(current => [previous_result]); // Update the store with the new label
  }
  else {
    operation.update(current => [...current, label]); // Update the store with the new label

  }

  validateInput();
  calculate();

}


function validateInput() {

  const regex = /^(?:[\-]?[0-9]+[\+\-\*\/\%]?[0-9]*)+$/;
  console.log(joinedValue);
  

  let isValid = regex.test(joinedValue);
  console.log(isValid);
  if (isValid == false)
    operation.update(current => {
    // Return a new array replacing the old operator with the new one
    return current.slice(0, current.length - 2).concat(current.slice(current.length - 1));
    });
  
}


function calculate(){
  
  
  result.update(current => eval(joinedValue));
}


