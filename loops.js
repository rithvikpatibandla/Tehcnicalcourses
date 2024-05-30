const cart = [
  { name: "Apple", price: 0.5, quantity: 4 },
  { name: "Banana", price: 0.25, quantity: 6 },
];

const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];

//   Ex 1.1: Combine cart + newItem
var carts = [...cart, ...newItems];

// Ex 1.2: Find total of cart
let ans = 0;
for (let i of carts) {
  ans += i.price * i.quantity;
}
console.log(ans);

// Ex 2: Rating 4.7 and above | Recommendations List
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

// Output
// ['A Brief History of Time', 'Clean Code', 'Sapiens' ]
let empty = [];
for (let i of books) {
  if (i.rating >= 4.7) {
    empty.push(i.title);
  } 
  }

console.log(empty);
