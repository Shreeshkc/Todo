const first = [1,2,3];
const second = [4,5,6];

const comb = first.concat(second);
const third = [...first,...second]; //we are spreading first array and second array.
//spread operator is done using 3 dots.

// Why using spread instead of concatenate ? well if we want to enter some element in the middle concatenate will only make it more complex but with spread it simpplifies it
const combined = [...first,'a',...second];

const fobj = {name: 'Shreesh'}
const sobj = {DOb: 2005};

const combobject = {...fobj, ...sobj, location: 'Tokyo'};
console.log(combobject)