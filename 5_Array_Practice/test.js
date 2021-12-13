// console.log("Hello, my patient boo!")
// box1 = "stuff"
// box2 = "other stuff"

// box3 = box1 + box2
// console.log(box3)


const originalRhyme = 'This little piggy went to market, This little piggy stayed home, This little piggy had roast beef, This little piggy had none, And this little piggy went "Wee wee wee!" all the way home!';

console.log(originalRhyme);
let poem = '';

for (const internalElement of originalRhyme.split(",")) {
  // console.log(internalElement);
  poem += internalElement + '\n';
}

console.log(poem);