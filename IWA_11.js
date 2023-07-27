/***
 // script.js

const 1-root = document(order1),
const 1-biscuits: document(biscuits),
const 1-donuts: document(donuts),
const 1-pancakes: document(pancakes),
const 1-status: document(status)

const 2-root = document(order2),
const 2-biscuits: document(biscuits),
const 2-donuts: document(donuts),
const 2-pancakes: document(pancakes),
const 2-status: document(status)

const 3-root = document(order3),
const 3-biscuits: document(biscuits),
const 3-donuts: document(donuts),
const 3-pancakes: document(pancakes),
const 3-status: document(status)

1-biscuits= 1-root.biscuits,
1-donuts = 1-root.donuts,
1-pancakes = 1-root.pancakes,
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending* 
 */

// SOLUTION

function updateOrderData(root, biscuits, donuts, pancakes, status) {
    root.querySelector('.biscuits .count').textContent = biscuits;
    root.querySelector('.donuts .count').textContent = donuts;
    root.querySelector('.pancakes .count').textContent = pancakes;
    root.querySelector('.status dd').textContent = status ? 'Delivered' : 'Pending';
}

const order1Root = document.querySelector('[data-key="order1"]');
const order1Biscuits = parseInt(order1Root.getAttribute('data-biscuits'));
const order1Donuts = parseInt(order1Root.getAttribute('data-donuts'));
const order1Pancakes = parseInt(order1Root.getAttribute('data-pancakes'));
const order1Status = order1Root.getAttribute('data-delivered') === 'true';

updateOrderData(order1Root, order1Biscuits, order1Donuts, order1Pancakes, order1Status);

const order2Root = document.querySelector('[data-key="order2"]');
const order2Biscuits = parseInt(order2Root.getAttribute('data-biscuits'));
const order2Donuts = parseInt(order2Root.getAttribute('data-donuts'));
const order2Pancakes = parseInt(order2Root.getAttribute('data-pancakes'));
const order2Status = order2Root.getAttribute('data-delivered') === 'true';

updateOrderData(order2Root, order2Biscuits, order2Donuts, order2Pancakes, order2Status);

const order3Root = document.querySelector('[data-key="order3"]');
const order3Biscuits = parseInt(order3Root.getAttribute('data-biscuits'));
const order3Donuts = parseInt(order3Root.getAttribute('data-donuts'));
const order3Pancakes = parseInt(order3Root.getAttribute('data-pancakes'));
const order3Status = order3Root.getAttribute('data-delivered') === 'true';

updateOrderData(order3Root, order3Biscuits, order3Donuts, order3Pancakes, order3Status);
