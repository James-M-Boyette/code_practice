//  1. Convert an array of arrays into a hash.
//     For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.
// The first element of each nested pair/array becomes the key, and the second becomes the value

// const input = [[1, 3], [8, 9], [2, 16]];

// const arrayToObject = function() {
//   let output = {};
//   for (let element of input) {
//     output[element[0]] = element[1]
//   }
//   return output
// }

// console.log(arrayToObject())


//  2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
//     For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.
// 

// const arrayHash = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}]

// const unpack = (input) => {
//   let output = {};
//   for (let element of input){
//     output[element.id] = element
//   }
//   return output
// }

// console.log(unpack(arrayHash))

//  3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
//     For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.
// 

// const word = "bookkeeper";

// const counter = (input) => {
//   let output = {};
//   for (let element of input){
//     if(!output[element]){
//       output[element] = 1
//     }else{
//       output[element] ++
//     }
//   }
//   return output
// }

// console.log(counter(word));

//  4. Convert a hash into an array of arrays.
//     For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

// const hash = {"chair" : 100, "book" : 14};

// const objToArrays = (input) => {
//   let output = [];
//   for (const property in input){
//       const array = [];
//       array.push(property);
//       array.push(input[property]);
//       output.push(array);
//   }
//   return output
// }

// console.log(objToArrays(hash));

//  5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
//     For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].
// const userDB = {321 : {name: "Alice", age: 31}, 322 : {name: "Maria", age: 27}};

// const databaseConverter = (input) => {
//   let output = [];
//   for (const element in input){
//     // Store the current hash/object
//     let object = input[element];
//     // Add the key of "id" and the value of the current element (of the input)
//     object["id"] = element;
//     // Store this new object in an array
//     output.push(object)
//   }
//   return output
// }

// console.log(databaseConverter(userDB))

//  6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
//     For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

// const string = ["do", "or", "do", "not"]

// const counter = (input) => {
//   let output = {};
//   for (const element of input){
//     // console.log(element);
//     if (output[element]){
//       output[element] ++;
//     } else {
//       output[element] = 1
//     }
//   }
//   return output 
// }

// console.log(counter(string));

//  7. Convert a hash into a flat array containing all the hash’s keys and values.
//     For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

// const object1 = {"a" : 1, "b" : 2, "c" : 3, "d" : 4}

// const squash = (input) => {
//   let output = [];
//   for (const element in input){
//     output.push(element);
//     output.push(input[element])
//   }
//   return output
// }

// console.log(squash(object1))

//  8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
//     For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

// const prices = {"chair" : 75, "book" : 15};
// const items = [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}]

// const merge = (input1, input2) => {
//   let output = {};
//   let i = 0;
//   for (const element in input1){
//     delete input2[i].name
//     input2[i]["price"] = input1[element];
//     output[element] = input2[i];
//     i ++
//   }
//   return output
// }

// console.log(merge(prices,items));


//  9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
//     For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.
// Make a new object with Keys = the author names, and values = an array of one or more published works

// const thing = [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}];

// const catelogue = (input) => {
//   let output = {};
//   for (const element of input){
//     // console.log(element); // original objects
//     // console.log(element.author); // original objects
//     let author = element.author;
//     // console.log(output[element])
//     console.log(output[element.author])
//     if (!output[author]){ // The only conclusion I can draw, here, is that my logic was generally correct; specifically, however, "undefined" =/= "false"
//       output[author] = [element.title]
//     } else {
//       output[author].push(element.title)
//       // output.author.push(element.title)
//       // output[element.author].push(element.title)
//     }
//   }
//   return output
// }

// console.log(catelogue(thing))
// catelogue(thing)

// 10. Given a hash, create a new hash that has the keys and values switched.
//     For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.

const hash = {"a" : 1, "b" : 2, "c" : 3};

const switcher = (input) => {
  let output = {};
  for (const element in input){
    output[parseInt(input[element])] = element
  }
  return output
}

console.log(switcher(hash))

// SOLUTIONS: https://gist.github.com/peterxjang/216a7a6e8411ee5c05118e78022f2bc7
