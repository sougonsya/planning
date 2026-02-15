// Mock DOM and Global objects
const document = {
    getElementById: (id) => ({
        addEventListener: () => { },
        classList: {
            add: () => { },
            remove: () => { },
            toggle: () => { }
        },
        children: [],
        textContent: ''
    }),
    createElement: (tag) => ({
        classList: { add: () => { } },
        className: '',
        innerHTML: '',
        onclick: null
    })
};

const window = {
    alert: (msg) => console.log('ALERT:', msg),
    updateItemQuantity: null // placeholder
};

// MOCK DATA matching script.js
const categories = [
    { id: 'altar', items: [{ id: 'altar-2', price: 200000 }] },
    { id: 'fixed-costs', items: [{ id: 'fixed-set', price: 178000, fixed: true }] },
    {
        id: 'options', items: [
            { id: 'opt-sakaki', price: 1000, allowQuantity: true },
            { id: 'opt-microbus', price: 35000 }
        ]
    },
    { id: 'reception', isReception: true, items: [{ id: 'rec-gift', price: 1000 }] }
];

let state = {
    currentCategoryIndex: 0,
    selections: {},
    attendees: 10
};

// Simplified Logic
function init() {
    categories.forEach(cat => {
        cat.items.forEach(item => {
            if (item.fixed) {
                if (!state.selections[cat.id]) state.selections[cat.id] = {};
                state.selections[cat.id][item.id] = { ...item, quantity: 1 };
            }
        });
    });
}

function toggleSelection(categoryId, item) {
    if (item.fixed) return;
    if (!state.selections[categoryId]) state.selections[categoryId] = {};

    if (state.selections[categoryId][item.id]) {
        delete state.selections[categoryId][item.id];
    } else {
        state.selections[categoryId][item.id] = { ...item, quantity: 1 };
    }
}

function updateItemQuantity(categoryId, itemId, delta) {
    if (!state.selections[categoryId] || !state.selections[categoryId][itemId]) return;

    const item = state.selections[categoryId][itemId];
    let newQty = item.quantity + delta;

    if (newQty <= 0) {
        delete state.selections[categoryId][itemId];
    } else {
        state.selections[categoryId][itemId].quantity = newQty;
    }
}

function calculateTotal() {
    let total = 0;
    Object.keys(state.selections).forEach(catId => {
        const category = categories.find(c => c.id === catId);
        Object.values(state.selections[catId]).forEach(item => {
            if (category && category.isReception) {
                total += item.price * state.attendees * item.quantity;
            } else {
                total += item.price * item.quantity;
            }
        });
    });
    return total;
}

// --- TEST CASES ---
console.log('Starting Tests...');

init(); // Auto-select fixed costs (178,000)

// Test 1: Select Sakaki (1,000)
toggleSelection('options', categories[2].items[0]);
let total = calculateTotal();
// 178,000 + 200,000 (Altar) + 1,000 = 379,000
// Wait, init only selects fixed costs. Altar is NOT auto selected in logic unless we select it.
// The test script `init` only selects fixed.
// So: 178,000 + 1,000 = 179,000.
console.log(`Test 1 (Fixed + Sakaki x1): Expected 179000, Got ${total}`);
if (total !== 179000) console.error('FAIL');

// Test 2: Increase Sakaki Qty to 5
updateItemQuantity('options', 'opt-sakaki', 4); // 1 + 4 = 5
total = calculateTotal();
// 178,000 + (1,000 * 5) = 183,000
console.log(`Test 2 (Fixed + Sakaki x5): Expected 183000, Got ${total}`);
if (total !== 183000) console.error('FAIL');

// Test 3: Select Microbus (35,000)
toggleSelection('options', categories[2].items[1]);
total = calculateTotal();
// 183,000 + 35,000 = 218,000
console.log(`Test 3 (Previous + Microbus): Expected 218000, Got ${total}`);
if (total !== 218000) console.error('FAIL');

console.log('Tests Completed');
