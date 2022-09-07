//  1. Convert an array of arrays into a hash.
//     For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

// So, for each indecy of the *parent* array, we want to convert the first number into a key, and second into a value
// Moreover, we don't want to store these as an array of objects, but instead as a single object (w/ multiple keys and values)
const array1 = [
  [1, 3],
  [8, 9],
  [2, 16],
];

const arrayToObject = array1.reduce((acc, cur) => {
  // acc.cur[0] = cur[1];
  acc[cur[0]] = cur[1];
  return acc;
}, {});

console.log("arraytoObject:", arrayToObject);

// What did we learn:
// We're getting better at storing object KVs, but still don't know the syntax 100%: I thought you used '.' to add a new key, when in fact, this is how you call a pre-existing key (and then store something [new] with it)

//  2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
//     For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

// So, what starts as an array of objects needs to become an object with 1. every "id" value turned into a key, and 2. all other elements of the object converted to nested objects
const array2 = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];

const idObject = array2.reduce((acc, cur) => {
  acc[cur.id] = { color: cur.color, price: cur.price };
  return acc;
}, {});

console.log("idObject:", idObject);

// What did we learn?
// Firstly, the syntax for storing vs calling still isn't ingrained
// Secondly, that we could have done that python script - we just we're primed for it. Moreover, we need to do more work with objects in order to get more familiar with and comfortable using key invocation - it's so useful!

//  3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
//     For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.

// So, we begin with a string, and then create a "letter counter" - where an object that uses each letter as a key, and accumulates +1 each time that letter is called

const string1 = "bookkeeper";

const letterCounter = (string) => {
  // console.log("string:", string[0]);
  let count = {};
  for (let index = 0; index < string.length; index++) {
    // if (count[string[index]] === 1){} // Pretty hard to read ...
    // if (objectKeys.includes(string[index])){ // ... on the right track, but the wrong syntax ...
    if (string[index] in count) {
      count[string[index]] += 1;
    } else {
      count[string[index]] = 1;
    }
  }
  console.log("Letter Tallies:", count);
  return count;
};

const myStringCount = letterCounter(string1);

// What did we learn?
// First, we had the correct intuition that a basic if statement would be too illegible
// We also had the correct intuition that there was a less verbose way of asking "Does the key already exist in our object?"
// We learned that you can use "in" - and should review/practice this in the future ...

//  4. Convert a hash into an array of arrays.
//     For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

// So, we want to take each K:V and convert them into an array with two elements - and store all of these child arrays in a parent array

const object1 = { chair: 100, book: 14 };

const makeObjectAList = (object) => {
  let list = [];
  const keys = Object.keys(object);
  keys.forEach((element) => {
    list.push([element, object[element]]);
  });
  return list;
};

const myArray = makeObjectAList(object1);

console.log("myArray:", myArray);

// What did we learn?
// If anything, what I've observed here is that I should get better at writing code from the outset that does what I symantically say ... this took several itterations to make and I feel like

//  5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
//     For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

// So, we need to re-store the id # as a value of "id"

const object2 = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};

const revertToArray = (object) => {
  // make a container
  let array = [];
  // Store the parent keys of the object
  const keys = Object.keys(object);
  // Create a child object with 1. the key of "id", 2. the parent key, 3. the child object's keys and values merged into the child object
  keys.forEach((element) => {
    // Store the child object in the container to be returned
    array.push({ id: element, ...object[element] });
  });
  return array;
};

const myArray2 = revertToArray(object2);

console.log("myArray2:", myArray2);

// What did I learn?
// First, if I want to add an object, I can use the "spread" operator ("...") - interestingly, this can also be used for other itterable objects (arrays, maps, and sets)
// Second, I'm stilll struggling with object parsing - I to use <...object.element> when I should have used <...object[element]>

//  6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
//     For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.

// So, this is a counter for the strings

const array3 = ["do", "or", "do", "not"];

const stringCounter = (array) => {
  // create an object
  // itterate through the array and
  // store each element as a key +
  // increment up by one if it already exists
  const myObject = array.reduce(
    (acc, cur) => {
      if (acc[cur]) {
        acc[cur] += 1;
      } else {
        acc[cur] = 1;
      }
      return acc;
    },
    { do: 1 }
  );
  return myObject;
};

const myTalley = stringCounter(array3);
console.log("myTalley:", myTalley);

//  7. Convert a hash into a flat array containing all the hash’s keys and values.
//     For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

// So, simply change the hash into an array
const object3 = { a: 1, b: 2, c: 3, d: 4 };

function objectToArray(obj) {
  // Store the keys
  const keys = Object.keys(obj);
  // For each key, store it and it's value in an array
  const convertedArray = keys.reduce((acc, cur) => {
    acc.push(cur, obj[cur]);
    return acc;
  }, []);
  // return the array
  return convertedArray;
}

const myArray3 = objectToArray(object3);
console.log("myArray3:", myArray3);

//  8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
//     For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

// So, merge these two objects such that the prices of the hash are combined witht he name, color and weight of the arrayed objects - all attached as hashed values of the keys

const object4 = { chair: 75, book: 15 };
const array6 = [
  { name: "chair", color: "red", weight: 10 },
  { name: "book", color: "black", weight: 1 },
];

function fuser(obj, array) {
  const keys = Object.keys(obj);
  const newList = keys.reduce((acc, cur) => {
    array6.forEach((element) => {
      if (element.name == cur) {
        acc[cur] = {
          price: obj[cur], // give me the *value* of object4's/hash's cur[rent] key
          color: element.color, // give me the *value* array6's current index's/current hash's 'color' key
          weight: element.weight,
        };
      }
    });
    return acc;
  }, {});
  // for each key in our hash,
  // check whether it exists in one of the objects
  // if it does, store 'price' with the hashes value, the color and weight k:v's in an object ... all as the nested hash value of the original hash's key
  return newList;
}

const singleList = fuser(object4, array6);
console.log("singleList", singleList);

// What'd we learn?
// That we still don't understand hashes like we'd like to ... why is price's value called with brackets, but color and weight with '.' ?
// Also, that we're learning to return more complicated objects ... previoiusly, I think I needed to return a single value etc .. but I can return anything I want, it seems

//  9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
//     For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.
// [{key:value}, {}] => {author: title} where multiple titles are stored with the same author

const array9 = [
  { author: "Jeff Smith", title: "Bone" },
  { author: "George Orwell", title: "1984" },
  { author: "Jeff Smith", title: "RASL" },
];

function arrayHashToHashArrays(inputArray) {
  const hashedArrays = inputArray.reduce((acc, cur) => {
    const authorKey = cur.author;
    const writtenWorkTitle = cur.title;

    if (Object.keys(acc).includes(authorKey)) {
      console.log(`${authorKey} exists!`);
      acc[authorKey].push(writtenWorkTitle);
      return acc;
    } else {
      console.log(`${authorKey} does NOT exist...`);
      acc[authorKey] = [writtenWorkTitle];
      return acc;
    }
  }, {});
  return hashedArrays;
}
const result = arrayHashToHashArrays(array9);

console.log("Hashed author Arrays:", result);

// What'd we learn:
// - First, that in order to declare an object's key as the contents of another variable, we need to use square brackets ('[]') ... otherwise, the key will be interpreted as a new string declaration (so, "authorKey" is interpreted as `authorKey: 'some value'` while [authorKey] is interpreted as `'some key': 'some value'`)
// - Second, we struggled for a while in our conditional because we failed to properly check whether the current key already existed in the acc object ... because we were checking whether the accumulator's *value* matched the current *key* - as soon as we realized this, we did (thankfully) know to switch to Object.keys(acc).includes
// - Third, we forgot .push for a second, but immediately realized that would fix the author titles array (so not a big deal - but it wasn't the initial thought)
// - Fourth, we failed to write pseudo code ... need to fix that

// 10. Given a hash, create a new hash that has the keys and values switched.
//     For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.
// If we have {a: 1, b: 2} etc it should become {1: a, 2: b}

// myObject = { a: 1, b: 2, c: 3 }

// What do we want to do?
// 1. Run through the object, as if it were an array, switching keys for values
// > We can store the keys in an array using Objects.keys
// > Then we can call each key - by running some kind of loop on the Objects.keys array
// > We can store each key called in a variable called "keyToValue"
// > We can store each value in a variable called "valueToKey"
// 2. Storing the new K:Vs in a new object
// 3. returning that new object

// Edge Case questions:
// - What should happen if the value is an object (an hash, an array etc)?
// > Should the value be ignored?
// > Should the value be unpacked, and have its keys and values stored at the highest level (flattening the hash)?
// - What should happen if two values match? They would potentially have different keys - should those keys be combined into an array etc?

// result = { 1: "a", 2: "b", 3: "c" }

const object10 = { a: 1, b: 2, c: 3 };

function kvSwitcher(inputObect) {
  const keys = Object.keys(inputObect);
  const inverted = {};
  for (let i = 0; i < keys.length; i++) {
    // const key = keys[i];
    const keyToValue = keys[i];
    const valueToKey = inputObect[keyToValue];
    console.log("key, value:", valueToKey, keyToValue);
    inverted[valueToKey] = keyToValue;
  }
  // keys.reduce((acc, cur) => {
  //   const key = acc
  // });
  // console.log("keys:", keys);
  return inverted;
}

const reversedObject = kvSwitcher(object10);

console.log("kvSwitcher results:", reversedObject);

// SOLUTIONS: https://gist.github.com/peterxjang/216a7a6e8411ee5c05118e78022f2bc7
