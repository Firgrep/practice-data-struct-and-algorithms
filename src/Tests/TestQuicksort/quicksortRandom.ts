import quicksort from "../../Algorithms/Quicksort/quicksort";

const randomize = () => Math.floor(Math.random() * 40);

let numbers = [];

for (let i = 0; i < 5; i++) {
    numbers.push(randomize());
}


console.log('Before quicksort:', numbers);
const sorted = quicksort(numbers, true);
console.log('After  quicksort:', sorted);
