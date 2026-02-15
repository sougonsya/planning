// Mock Objects
const window = {
    open: () => ({
        document: {
            write: (html) => console.log('HTML Generated (Length):', html.length),
            close: () => { }
        }
    })
};
const document = {
    getElementById: (id) => ({
        addEventListener: () => { },
        classList: { add: () => { }, remove: () => { }, toggle: () => { } },
        children: []
    })
};

// Mock State for Estimate
const state = {
    selections: {
        'altar': { 'altar-2': { name: '祭壇（20万）', price: 200000, quantity: 1 } },
        'fixed-costs': { 'fixed-set': { name: '固定費用一式', price: 178000, fixed: true, quantity: 1 } },
        'options': {
            'opt-sakaki': { name: '榊', price: 1000, quantity: 2, allowQuantity: true }
        },
        'reception': {
            'rec-gift': { name: 'お礼品有り', price: 1000, quantity: 1 }
        }
    },
    attendees: 10
};

// Simplified generateEstimate logic for testing
function testEstimateLogic() {
    console.log('Testing Estimate Logic...');

    // 1. Data Extraction
    const d = {
        altar: Object.values(state.selections['altar'] || {})[0],
        fixed: Object.values(state.selections['fixed-costs'] || {})[0]
    };

    console.log('Altar Name:', d.altar.name); // Expected: 祭壇（20万）
    console.log('Fixed Price:', d.fixed.price); // Expected: 178000

    // 2. Calculation
    let subtotal1 = 200000 + 178000; // 378,000
    let subtotal2 = (1000 * 2) + (1000 * 10 * 1); // Sakaki(2000) + Gift(10000) = 12,000
    let tax = Math.floor((subtotal1 + subtotal2) * 0.1);
    let total = subtotal1 + subtotal2 + tax;

    console.log('Subtotal 1:', subtotal1);
    console.log('Subtotal 2:', subtotal2);
    console.log('Total:', total);

    if (total === (378000 + 12000 + 39000)) {
        console.log('SUCCESS: Calculation Correct');
    } else {
        console.error('FAILURE: Calculation Incorrect');
    }
}

testEstimateLogic();
