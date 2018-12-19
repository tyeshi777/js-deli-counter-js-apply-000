function takeANumber(line, person) {
  line.push(person);
  return `Welcome, ${person}. You are number ${line.push()} in line.`;
}
function nowServing(line) {
  if(!line.length) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}
function currentLine(line) {
  if (!line.length) {
    return `The line is currently empty.`;
  } 
  let lineAndPeople = [];
  for (let i = 0; i < line.length; i++) {
    lineAndPeople.push(`${i+1}. ${line[i]}`);
  }
  return `The line is currently: ${lineAndPeople.join(", ")}`;
  
}
let lineNumber = 0;
function takeANumber() {
  lineNumber += 1;
  return lineNumber;
}
takeANumber();
let whoIsCurrentlyServed = 0;
function nowServing(){
  whoIsCurrentlyServed += 1;
  return whoIsCurrentlyServed;
  if (whoIsCurrentlyServed === 0) {
    return `There is no one to be served.`
  }
}
