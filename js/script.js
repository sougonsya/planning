// Data Definitions
const categories = [
    {
        id: 'altar',
        name: '祭壇',
        title: '祭壇をお選びください',
        items: [
            { id: 'altar-2', name: '祭壇（20万）', price: 200000, img: 'assets/images/altar_2.jpg' },
            { id: 'altar-3', name: '祭壇（30万）', price: 300000, img: 'assets/images/altar_3.jpg' },
            { id: 'altar-4', name: '祭壇（50万）', price: 500000, img: 'assets/images/altar_4.jpg' },
            { id: 'altar-5', name: '祭壇（80万）', price: 800000, img: 'assets/images/altar_5.jpg' }
        ]
    },
    {
        id: 'coffin',
        name: '棺',
        title: '棺をお選びください',
        items: [
            { id: 'coffin-1', name: '平棺', price: 50000, img: 'assets/images/coffin_1.jpg' },
            { id: 'coffin-2', name: '布（白）', price: 80000, img: 'assets/images/coffin_2.jpg' },
            { id: 'coffin-3', name: '布（桃）', price: 80000, img: 'assets/images/coffin_3.jpg' },
            { id: 'coffin-4', name: '刺繍（白）', price: 100000, img: 'assets/images/coffin_4.jpg' },
            { id: 'coffin-5', name: '刺繍（桃）', price: 100000, img: 'assets/images/coffin_5.jpg' },
            { id: 'coffin-6', name: '刺繍（黒）', price: 100000, img: 'assets/images/coffin_6.jpg' }
        ]
    },
    {
        id: 'urn',
        name: '骨壺',
        title: '骨壺をお選びください<br><span style="font-size: 0.9rem; color: #666;">※すべて５寸壺になります。</span>',
        items: [
            { id: 'urn-1', name: '白壺', price: 10000, img: 'assets/images/urn_1.jpg' },
            { id: 'urn-2', name: 'メッセージ', price: 10000, img: 'assets/images/urn_2.jpg' },
            { id: 'urn-3', name: '瑠璃（白）', price: 15000, img: 'assets/images/urn_3.jpg' },
            { id: 'urn-4', name: '瑠璃（藍）', price: 15000, img: 'assets/images/urn_4.jpg' },
            { id: 'urn-5', name: '瑠璃（翡翠）', price: 15000, img: 'assets/images/urn_5.jpg' },
            { id: 'urn-6', name: 'ルリシクラメン', price: 20000, img: 'assets/images/urn_6.jpg' },
            { id: 'urn-7', name: 'みやび桜', price: 20000, img: 'assets/images/urn_7.jpg' },
            { id: 'urn-8', name: 'プラチナブラック', price: 20000, img: 'assets/images/urn_8.jpg' }
        ]
    },
    {
        id: 'portrait',
        name: '遺影写真',
        title: '遺影写真のスタイルをお選びください',
        items: [
            { id: 'photo-0', name: '無し', price: 0, img: 'assets/images/photo_0.jpg' },
            { id: 'photo-1', name: '有り（カラー）', price: 20000, img: 'assets/images/photo_1.jpg' }
        ]
    },
    {
        id: 'pillow-flowers',
        name: '枕花',
        title: '枕花をお選びください',
        items: [
            { id: 'pillow-0', name: '無し', price: 0, img: 'assets/images/flower_0.jpg' },
            { id: 'pillow-1', name: '有り', price: 10000, img: 'assets/images/flower_1.jpg' }
        ]
    },
    {
        id: 'encoffinment',
        name: '納棺',
        title: '納棺の儀式をお選びください',
        items: [
            { id: 'encoffin-1', name: '納棺のみ', price: 10000, img: 'assets/images/encoffin_1.jpg' },
            { id: 'encoffin-2', name: '化粧納棺', price: 60000, img: 'assets/images/encoffin_2.jpg' },
            { id: 'encoffin-3', name: '湯灌納棺', price: 70000, img: 'assets/images/encoffin_3.jpg' }
        ]
    },
    {
        id: 'hearse',
        name: '霊柩車',
        title: '霊柩車をお選びください',
        items: [
            { id: 'hearse-1', name: 'バン型霊柩車', price: 20000, img: 'assets/images/hearse_1.jpg' },
            { id: 'hearse-2', name: '洋型霊柩車', price: 30000, img: 'assets/images/hearse_2.jpg' }
        ]
    },
    {
        id: 'fixed-costs',
        name: '固定費用',
        title: '必須項目（固定費用）',
        items: [
            {
                id: 'fixed-set',
                name: '【固定費用一式】<br><span style="font-size: 0.9rem; color: #d9534f; display: block; margin: 5px 0;">※ご葬儀を行う上で必須となる項目になります。</span><small>装具一式・供物一式・ご遺体保全（2日分）・奉仕料・搬送布団・寝台車（10kmまで）・斎場使用料</small>',
                price: 178000,
                img: 'assets/images/fixed_set.jpg',
                fixed: true
            }
        ]
    },
    {
        id: 'options',
        name: '追加オプション',
        title: 'その他オプション',
        items: [
            { id: 'opt-sakaki', name: '榊<br><span style="font-size: 0.8rem; color: #d9534f;">※神道の方は必須となります</span>', price: 1000, img: 'assets/images/opt_sakaki.jpg', allowQuantity: true },
            { id: 'opt-dryice', name: 'ドライアイス（1日分）', price: 10000, img: 'assets/images/opt_dryice.jpg', allowQuantity: true },
            { id: 'opt-stand-1', name: 'スタンド花 1段', price: 15000, img: 'assets/images/opt_stand1.jpg', allowQuantity: true },
            { id: 'opt-stand-2', name: 'スタンド花 2段', price: 20000, img: 'assets/images/opt_stand2.jpg', allowQuantity: true },
            { id: 'opt-fruit', name: '果物籠', price: 12000, img: 'assets/images/opt_fruit.jpg', allowQuantity: true },
            { id: 'opt-incense', name: '線香ローソクセット', price: 10000, img: 'assets/images/opt_incense.jpg', allowQuantity: true },
            { id: 'opt-coffin-flower', name: '棺上飾り花', price: 15000, img: 'assets/images/opt_flower.jpg' },
            { id: 'opt-microbus', name: 'マイクロバス', price: 35000, img: 'assets/images/opt_bus.jpg' }
        ]
    },
    {
        id: 'reception',
        name: '接待費・人数',
        title: '会葬者人数と接待品をお選びください<br><span style="font-size: 0.9rem; color: #d9534f;">※あくまで参考価格です</span>',
        isReception: true,
        items: [
            { id: 'rec-none', name: 'お礼品無し', price: 0, img: 'assets/images/rec_none.jpg' },
            { id: 'rec-gift', name: 'お礼品有り', price: 1000, img: 'assets/images/rec_gift.jpg' },
            { id: 'rec-food', name: '通夜振る舞い', price: 1500, img: 'assets/images/rec_food.jpg' }
        ]
    }
];

// App State
let state = {
    currentCategoryIndex: 0,
    selections: {}, // { categoryId: { itemId: itemData, quantity: 1 } }
    attendees: 10
};

// DOM Elements
const categoryListEl = document.getElementById('category-list');
const itemsGridEl = document.getElementById('items-grid');
const receptionItemsGridEl = document.getElementById('reception-items-grid');
const currentCategoryTitleEl = document.getElementById('current-category-title');
const currentStepEl = document.getElementById('current-step');
const totalStepsEl = document.getElementById('total-steps');
const totalAmountEl = document.getElementById('total-amount');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const receptionAreaEl = document.getElementById('reception-area');
const attendeeCountEl = document.getElementById('attendee-count');

// Initialize
function init() {
    // Auto-select fixed items
    categories.forEach(cat => {
        cat.items.forEach(item => {
            if (item.fixed) {
                toggleSelection(cat.id, item);
            }
        });
    });

    renderCategoryNav();
    updateUI();

    // Global Event Listeners
    document.getElementById('btn-increase').addEventListener('click', () => updateAttendees(1));
    document.getElementById('btn-decrease').addEventListener('click', () => updateAttendees(-1));
    btnNext.addEventListener('click', nextCategory);
    btnPrev.addEventListener('click', prevCategory);
}

// Render Side Navigation
function renderCategoryNav() {
    categoryListEl.innerHTML = '';
    categories.forEach((cat, index) => {
        const li = document.createElement('li');
        li.textContent = cat.name;
        li.onclick = () => jumpToCategory(index);
        if (index === state.currentCategoryIndex) {
            li.classList.add('active');
        }
        categoryListEl.appendChild(li);
    });
}

// Update UI based on state
function updateUI() {
    const currentCat = categories[state.currentCategoryIndex];

    // Update Header
    currentCategoryTitleEl.innerHTML = currentCat.title;
    currentStepEl.textContent = state.currentCategoryIndex + 1;
    totalStepsEl.textContent = categories.length;

    // Update Nav Active State
    const navItems = categoryListEl.children;
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.toggle('active', i === state.currentCategoryIndex);
    }

    // Show/Hide Reception Items Layout
    if (currentCat.isReception) {
        itemsGridEl.classList.add('hidden');
        receptionAreaEl.classList.remove('hidden');
        renderItems(currentCat, receptionItemsGridEl);
    } else {
        itemsGridEl.classList.remove('hidden');
        receptionAreaEl.classList.add('hidden');
        renderItems(currentCat, itemsGridEl);
    }

    // Update Buttons
    btnPrev.disabled = state.currentCategoryIndex === 0;
    btnNext.textContent = state.currentCategoryIndex === categories.length - 1 ? '完了' : '次へ進む';

    updateTotalAmount();
}

// Render Items Grid
function renderItems(category, container) {
    container.innerHTML = '';
    category.items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';

        // Apply wide style for fixed items
        if (item.fixed) {
            card.classList.add('wide');
        }

        // Check if selected
        const selection = state.selections[category.id] && state.selections[category.id][item.id];
        const isSelected = !!selection;
        if (isSelected) {
            card.classList.add('selected');
        }

        // Display price (multiply by attendees if reception item)
        let displayPrice = item.price;
        let priceSuffix = '円';
        if (category.isReception) {
            priceSuffix = '円 / 人';
        } else if (item.allowQuantity) {
            priceSuffix = '円 / 個';
        }

        let controlHtml = `<button class="select-btn">${isSelected ? '選択中' : '選択する'}</button>`;

        // Quantity Control UI for allowed items IF selected
        if (item.allowQuantity && isSelected) {
            controlHtml = `
                <div class="item-quantity-control">
                    <button class="qty-btn minus" onclick="event.stopPropagation(); updateItemQuantity('${category.id}', '${item.id}', -1)">-</button>
                    <span class="qty-val">${selection.quantity}</span>
                    <button class="qty-btn plus" onclick="event.stopPropagation(); updateItemQuantity('${category.id}', '${item.id}', 1)">+</button>
                </div>
            `;
        } // For fixed items, show nothing or just text
        else if (item.fixed) {
            controlHtml = `<div class="fixed-label">必須項目</div>`;
        }

        card.innerHTML = `
            <div class="card-img" style="background-image: url('${item.img}')"></div>
            <div class="card-body">
                <div class="card-title">${item.name}</div>
                <div class="card-price">${displayPrice.toLocaleString()}${priceSuffix}</div> 
                ${controlHtml}
            </div>
        `;

        if (!item.fixed && !item.allowQuantity) {
            card.onclick = () => toggleSelection(category.id, item);
        } else if (item.allowQuantity && !isSelected) {
            card.onclick = () => toggleSelection(category.id, item);
        } else if (item.allowQuantity && isSelected) {
            // If already selected and allows quantity, clicking card usually does nothing or deselects? 
            // Let's make it so clicking the card area (not buttons) toggles it off or does nothing.
            // For better UX, let's keep toggle behavior on card click, buttons handle quantity.
            card.onclick = () => toggleSelection(category.id, item);
        }

        container.appendChild(card);
    });
}

// Toggle Item Selection
function toggleSelection(categoryId, item) {
    if (item.fixed && state.selections[categoryId] && state.selections[categoryId][item.id]) {
        return; // Cannot deselect fixed items
    }

    const category = categories.find(c => c.id === categoryId);

    if (!state.selections[categoryId]) {
        state.selections[categoryId] = {};
    }

    // Logic for single select vs multi select
    // Reception items: Allow multiple (food + gift)
    // Options: Allow multiple
    // Others: Single select

    if (category.isReception || category.id === 'options') {
        if (state.selections[categoryId][item.id]) {
            delete state.selections[categoryId][item.id];
        } else {
            state.selections[categoryId][item.id] = { ...item, quantity: 1 };
        }
    } else {
        // Single select logic: clear others
        if (state.selections[categoryId][item.id]) {
            delete state.selections[categoryId][item.id];
        } else {
            state.selections[categoryId] = {}; // Clear previous
            state.selections[categoryId][item.id] = { ...item, quantity: 1 };
        }
    }

    updateUI();
}

// Update Item Quantity (Global function needed for onclick)
window.updateItemQuantity = function (categoryId, itemId, delta) {
    if (!state.selections[categoryId] || !state.selections[categoryId][itemId]) return;

    const item = state.selections[categoryId][itemId];
    let newQty = item.quantity + delta;

    if (newQty <= 0) {
        // Remove item if quantity becomes 0
        delete state.selections[categoryId][itemId];
    } else {
        state.selections[categoryId][itemId].quantity = newQty;
    }

    updateUI();
};

// Update Attendee Count
function updateAttendees(change) {
    let newCount = state.attendees + change;
    if (newCount < 0) newCount = 0;
    state.attendees = newCount;
    attendeeCountEl.textContent = state.attendees;
    updateTotalAmount();
}

// Calculate and Update Total
function updateTotalAmount() {
    let total = 0;

    Object.keys(state.selections).forEach(catId => {
        const catSelections = state.selections[catId];
        const category = categories.find(c => c.id === catId);

        Object.values(catSelections).forEach(item => {
            if (category.isReception) {
                // Reception items cost * attendees * quantity (usually 1)
                total += item.price * state.attendees * item.quantity;
            } else {
                total += item.price * item.quantity;
            }
        });
    });

    totalAmountEl.textContent = total.toLocaleString();
}

// Navigation
function nextCategory() {
    if (state.currentCategoryIndex < categories.length - 1) {
        state.currentCategoryIndex++;
        updateUI();
    } else {
        alert('プラン作成が完了しました。合計金額: ' + totalAmountEl.textContent + '円');
    }
}

function prevCategory() {
    if (state.currentCategoryIndex > 0) {
        state.currentCategoryIndex--;
        updateUI();
    }
}

function jumpToCategory(index) {
    state.currentCategoryIndex = index;
    updateUI();
}

// Generate Estimate Sheet
function generateEstimate() {
    // Collect Data
    const d = {
        altar: Object.values(state.selections['altar'] || {})[0],
        coffin: Object.values(state.selections['coffin'] || {})[0],
        urn: Object.values(state.selections['urn'] || {})[0],
        portrait: Object.values(state.selections['portrait'] || {})[0],
        pillow: Object.values(state.selections['pillow-flowers'] || {})[0],
        encoffin: Object.values(state.selections['encoffinment'] || {})[0],
        hearse: Object.values(state.selections['hearse'] || {})[0],
        fixed: Object.values(state.selections['fixed-costs'] || {})[0]
    };

    const options = state.selections['options'] || {};
    const reception = state.selections['reception'] || {};

    // Calculate Totals
    let subtotal1 = 0;
    const basicItems = [d.altar, d.coffin, d.urn, d.portrait, d.pillow, d.encoffin, d.hearse, d.fixed];
    basicItems.forEach(item => { if (item) subtotal1 += item.price; });

    let subtotal2 = 0;
    // Map options to list
    const optionItems = Object.values(options);
    const receptionItems = Object.values(reception);

    optionItems.forEach(item => subtotal2 += item.price * item.quantity);
    receptionItems.forEach(item => subtotal2 += item.price * state.attendees * item.quantity);

    const tax = Math.floor((subtotal1 + subtotal2) * 0.1);
    const total = subtotal1 + subtotal2 + tax;

    // Helper for formatting price
    const fmt = (num) => num ? num.toLocaleString() : '';
    // Helper to get item name/price safely
    const getName = (obj) => obj ? obj.name.split('<')[0] : '';
    const getPrice = (obj) => obj ? fmt(obj.price) : '';

    // Fixed Set details handling (if fixed set exists, mark others as included)
    const fixedIncluded = d.fixed ? 'セットに含む' : '';

    const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>御見積書</title>
        <style>
            body { font-family: 'Noto Sans JP', sans-serif; padding: 40px; max-width: 900px; margin: 0 auto; color: #333; }
            .header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #333; padding-bottom: 20px; }
            .header h1 { font-size: 2rem; margin: 0; letter-spacing: 0.2em; }
            .date { text-align: right; margin-top: 10px; font-size: 0.9rem; }
            
            .client-info { margin-bottom: 30px; }
            .client-info table { width: 100%; border: none; }
            .client-info td { padding: 5px; border: none; border-bottom: 1px solid #ccc; }
            .client-info input { border: none; width: 100%; font-size: 1rem; }
            
            .estimate-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
            .estimate-table th, .estimate-table td { border: 1px solid #ccc; padding: 12px 8px; }
            .estimate-table th { background-color: #f5f5f5; text-align: center; font-weight: bold; }
            .estimate-table td.num { text-align: right; }
            .estimate-table td.center { text-align: center; }
            
            .total-section { float: right; width: 40%; }
            .total-table { width: 100%; border-collapse: collapse; }
            .total-table th, .total-table td { padding: 10px; border-bottom: 1px solid #ccc; }
            .total-table .grand-total { font-size: 1.5rem; font-weight: bold; border-bottom: 3px double #333; }
            
            .notes { clear: both; margin-top: 50px; border: 1px solid #ccc; padding: 20px; border-radius: 5px; }
            
            @media print {
                .no-print { display: none; }
                body { padding: 0; }
                input { background: transparent; }
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>御 見 積 書</h1>
            <div class="date">発行日: ${new Date().toLocaleDateString('ja-JP')}</div>
        </div>

        <div class="client-info">
            <table>
                <tr><td width="120">相談者氏名:</td><td><input type="text" placeholder="（手書き用スペース）"></td></tr>
                <tr><td>ご心配な方:</td><td><input type="text" placeholder="（手書き用スペース）"></td></tr>
            </table>
        </div>

        <table class="estimate-table">
            <thead>
                <tr>
                    <th>項目名</th>
                    <th width="100">単価</th>
                    <th width="80">数量</th>
                    <th width="120">金額</th>
                </tr>
            </thead>
            <tbody>
                <!-- Basic Items -->
                ${renderRow(d.altar)}
                ${renderRow(d.coffin)}
                ${renderRow(d.urn)}
                ${renderRow(d.portrait)}
                ${renderRow(d.hearse)}
                ${renderRow(d.encoffin)}
                ${d.fixed ? renderRow(d.fixed) : ''}
                ${d.fixed ? '<tr><td colspan="4" style="color:#666; font-size:0.9rem; padding-left:20px;">（内訳：装具一式、供物一式、ご遺体保全、奉仕料、搬送布団、寝台車、斎場使用料）</td></tr>' : ''}
                
                <!-- Additional Options -->
                ${optionItems.map(item => renderRow(item)).join('')}
                
                <!-- Reception Items -->
                ${receptionItems.map(item => renderReceptionItemRow(item)).join('')}
                
                ${(!subtotal1 && !subtotal2) ? '<tr><td colspan="4" class="center">選択された項目はありません</td></tr>' : ''}
            </tbody>
        </table>

        <div class="total-section">
            <table class="total-table">
                <tr>
                    <th>小計</th>
                    <td class="num">${fmt(subtotal1 + subtotal2)} 円</td>
                </tr>
                <tr>
                    <th>消費税 (10%)</th>
                    <td class="num">${fmt(tax)} 円</td>
                </tr>
                <tr class="grand-total">
                    <th>合計金額</th>
                    <td class="num">${fmt(total)} 円</td>
                </tr>
            </table>
        </div>

        <div class="notes">
            <h4>【備考】</h4>
            <p>※ この見積書はシミュレーション結果に基づく概算です。実際のご契約時に詳細が変更となる場合がございます。</p>
            <p>※ 接待費（料理・返礼品）は、ご会葬人数により変動いたします。</p>
        </div>

        <div class="no-print" style="text-align: center; margin-top: 50px;">
            <button onclick="window.print()" style="padding: 12px 30px; background: #333; color: white; border: none; border-radius: 4px; cursor: pointer;">印刷する</button>
            <button onclick="window.close()" style="padding: 12px 30px; background: #ccc; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;">閉じる</button>
        </div>
    </body>
    </html>
    `;

    const win = window.open('', '_blank');
    win.document.write(html);
    win.document.close();
}

function renderRow(item) {
    if (!item) return '';
    if (item.price === 0 && !item.name.includes('無し')) return ''; // Hide 0 yen items unless strictly "None" selected? Actually showing "None" is good.
    // Clean name (remove html tags)
    const name = item.name.replace(/<[^>]*>/g, '');
    const total = item.price * (item.quantity || 1);
    return `
        <tr>
            <td>${name}</td>
            <td class="num">${item.price.toLocaleString()}</td>
            <td class="center">${item.quantity || 1}</td>
            <td class="num">${total.toLocaleString()}</td>
        </tr>
    `;
}

function renderReceptionItemRow(item) {
    if (!item) return '';
    const name = item.name.replace(/<[^>]*>/g, '');
    const qty = state.attendees * (item.quantity || 1);
    const total = item.price * qty;
    return `
        <tr>
            <td>${name} <small>(${state.attendees}名)</small></td>
            <td class="num">${item.price.toLocaleString()}</td>
            <td class="center">${qty}</td>
            <td class="num">${total.toLocaleString()}</td>
        </tr>
    `;
}

// Start
document.addEventListener('DOMContentLoaded', init);
document.getElementById('btn-estimate').addEventListener('click', generateEstimate);
