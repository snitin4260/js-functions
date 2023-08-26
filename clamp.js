
// Implement a function clamp(number, lower, upper) to restrict a number within the inclusive lower and upper bounds.




export default function clamp(value, lower, upper) {
    if (value  >=lower &&  value <= upper) return value;
 
    if(value < lower) return lower
 
 
    if(value > upper) { return upper}
 }