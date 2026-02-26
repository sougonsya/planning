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
        title: '骨壺をお選びください<br><span style="font-size: 0.8rem; color: #666; font-weight: normal;">※すべて５寸壺になります。</span>',
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
        title: '遺影写真が必要な場合は選択してください',
        items: [
            // { id: 'photo-0', name: '無し', price: 0, img: 'assets/images/photo_0.jpg' }, // Removed
            { id: 'photo-1', name: '有り（カラー）', price: 20000, img: 'assets/images/photo_1.jpg' }
        ]
    },
    {
        id: 'pillow-flowers',
        name: '枕花',
        title: '枕花が必要な場合は選択してください',
        items: [
            // { id: 'pillow-0', name: '無し', price: 0, img: 'assets/images/flower_0.jpg' }, // Removed
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
        name: '接待費',
        title: '会葬者人数と接待品をお選びください<br><span style="font-size: 0.8rem; color: #d9534f; font-weight: normal;">※目安金額です、料理・品物により変動します</span>',
        isReception: true,
        items: [
            // { id: 'rec-none', name: 'お礼品無し', price: 0, img: 'assets/images/rec_none.jpg' }, // Removed
            { id: 'rec-gift', name: '御礼品（会葬礼状付き）', price: 1000, img: 'assets/images/rec_gift.jpg' },
            { id: 'rec-food', name: '料理', price: 2000, img: 'assets/images/rec_food.jpg' }
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
const btnEstimate = document.getElementById('btn-estimate');
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
    // Update Buttons
    btnPrev.disabled = state.currentCategoryIndex === 0;

    if (state.currentCategoryIndex === categories.length - 1) {
        btnNext.style.display = 'none'; // Hide on last step
    } else {
        btnNext.style.display = 'inline-block';
        btnNext.textContent = '次へ';
    }

    // Conditional Estimate Button
    const requiredCats = ['altar', 'coffin', 'urn', 'encoffinment', 'hearse'];
    const allSelected = requiredCats.every(id => state.selections[id] && Object.keys(state.selections[id]).length > 0);

    if (btnEstimate) {
        btnEstimate.style.display = allSelected ? 'inline-block' : 'none';
    }

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

        // ひとまずダミー画像を表示する
        const cleanName = item.name.replace(/<[^>]*>/g, '');
        const dummyImgUrl = `https://placehold.jp/e0e0e0/555555/400x300.png?text=${encodeURIComponent(cleanName)}`;

        // 存在する画像ファイルのリスト（手動定義）
        const availableImages = [
            'assets/images/encoffin_1.jpg',
            'assets/images/encoffin_2.jpg',
            'assets/images/encoffin_3.jpg',
            'assets/images/flower_1.jpg',
            'assets/images/opt_fruit.jpg',
            'assets/images/opt_stand1.jpg',
            'assets/images/opt_stand2.jpg'
        ];

        // 存在する画像があればそれを使い、無ければダミー画像を使う
        const bgImgUrl = availableImages.includes(item.img) ? item.img : dummyImgUrl;

        card.innerHTML = `
            <div class="card-img" style="background-image: url('${bgImgUrl}')"></div>
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
// Generate Estimate Sheet
function generateEstimate() {
    // Calculate Totals and Count Rows first
    let subtotal = 0;
    let rowCount = 0;
    let rowsHtml = '';

    categories.forEach(cat => {
        const catSelections = state.selections[cat.id];
        if (!catSelections) return;

        // Special handling for Fixed Costs
        if (cat.id === 'fixed-costs') {
            const item = Object.values(catSelections)[0];
            if (item) {
                const match = item.name.match(/<small>(.*?)<\/small>/);
                const noteText = match ? match[1] : '装具一式・供物一式・ご遺体保全（2日分）・奉仕料・搬送布団・寝台車（10kmまで）・斎場使用料';

                rowsHtml += `
                    <tr>
                        <td><strong>${cat.name}</strong></td>
                        <td class="num">${item.price.toLocaleString()}</td>
                        <td class="center">1</td>
                        <td class="num">${item.price.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td colspan="4" style="padding: 5px 10px; color: #666; font-size: 0.85em; border-top: none;">
                            <span style="font-size: 0.9em;">【内訳】 ${noteText}</span>
                        </td>
                    </tr>
                `;
                subtotal += item.price;
                rowCount += 2; // Fixed costs take 2 rows
            }
            return;
        }

        Object.values(catSelections).forEach(item => {
            let price = item.price;
            let quantity = item.quantity || 1;
            let totalItemPrice = 0;

            if (cat.isReception) {
                quantity = state.attendees * quantity;
                totalItemPrice = price * quantity;

                rowsHtml += `
                    <tr>
                        <td>${cat.name} - ${item.name.replace(/<[^>]*>/g, '')} <small>(${state.attendees}名)</small></td>
                        <td class="num">${price.toLocaleString()}</td>
                        <td class="center">${quantity}</td>
                        <td class="num">${totalItemPrice.toLocaleString()}</td>
                    </tr>
                 `;
            } else {
                totalItemPrice = price * quantity;
                rowsHtml += `
                    <tr>
                        <td>${cat.name} - ${item.name.replace(/<[^>]*>/g, '')}</td>
                        <td class="num">${price.toLocaleString()}</td>
                        <td class="center">${quantity}</td>
                        <td class="num">${totalItemPrice.toLocaleString()}</td>
                    </tr>
                `;
            }
            subtotal += totalItemPrice;
            rowCount++;
        });
    });

    // Dynamic Sizing Logic
    let styleSettings = {
        baseFont: '10pt',
        tableFont: '0.62rem', // Reduced ~1pt (approx 8.3px)
        cellPadding: '5px 4px',
        headerMargin: '10px',
        totalWidth: '45%',
        noteMargin: '20px'
    };

    if (rowCount > 25) {
        // Very Dense
        styleSettings = {
            baseFont: '8pt',
            tableFont: '0.52rem', // Reduced
            cellPadding: '2px 2px',
            headerMargin: '5px',
            totalWidth: '40%',
            noteMargin: '10px'
        };
    } else if (rowCount > 15) {
        // Compact
        styleSettings = {
            baseFont: '9pt',
            tableFont: '0.57rem', // Reduced
            cellPadding: '3px 3px',
            headerMargin: '8px',
            totalWidth: '45%',
            noteMargin: '15px'
        };
    }

    const tax = Math.floor(subtotal * 0.1);
    const total = subtotal + tax;
    const fmt = (num) => num.toLocaleString();

    const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>御見積書</title>
        <style>
            @page { size: A4; margin: 10mm; }
            body { font-family: 'Noto Sans JP', sans-serif; padding: 10px; width: 100%; max-width: 210mm; margin: 0 auto; color: #333; box-sizing: border-box; font-size: ${styleSettings.baseFont}; }
            .header { text-align: center; margin-bottom: ${styleSettings.headerMargin}; border-bottom: 2px solid #333; padding-bottom: 5px; }
            .header h1 { font-size: 1.6em; margin: 0; letter-spacing: 0.2em; }
            .date { text-align: right; margin-top: 0; font-size: 0.8em; }
            
            .client-info { margin-bottom: 15px; }
            .client-info table { width: 100%; border: none; border-collapse: collapse; }
            .client-info td { padding: 2px 5px; border: none; vertical-align: bottom; }
            .client-info .input-cell { border-bottom: 1px solid #ccc; }
            .client-info input { border: none; width: 100%; font-size: 1em; outline: none; background: transparent; }
            
            .estimate-table { width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: ${styleSettings.tableFont}; }
            .estimate-table th, .estimate-table td { border: 1px solid #ccc; padding: ${styleSettings.cellPadding}; }
            .estimate-table th { background-color: #f5f5f5; text-align: center; font-weight: bold; }
            .estimate-table td.num { text-align: right; }
            .estimate-table td.center { text-align: center; }
            
            .total-section { float: right; width: ${styleSettings.totalWidth}; margin-bottom: 10px; }
            .total-table { width: 100%; border-collapse: collapse; font-size: ${styleSettings.tableFont}; }
            .total-table th, .total-table td { padding: 4px; border-bottom: 1px solid #ccc; }
            .total-table .grand-total { font-size: 1.2em; font-weight: bold; border-bottom: 3px double #333; }
            
            .notes { clear: both; margin-top: ${styleSettings.noteMargin}; border: 1px solid #ccc; padding: 10px; border-radius: 5px; font-size: 0.65em; }
            .notes h4 { margin: 0 0 5px 0; }
            .notes ul { margin: 0; padding-left: 20px; }
            
            @media print {
                .no-print { display: none; }
                body { padding: 0; width: 100%; }
                input { background: transparent; }
            }

            @media screen and (max-width: 600px) {
                body { padding: 5px; width: 100%; font-size: 12px; }
                .header h1 { font-size: 1.4em; }
                .client-info table, .client-info tbody, .client-info tr, .client-info td { display: block; width: 100%; }
                .client-info td { padding: 5px 0; border: none; }
                .client-info .input-cell { border-bottom: 1px solid #ccc; margin-bottom: 10px; }
                
                .estimate-table { font-size: 0.75rem; }
                .estimate-table th, .estimate-table td { padding: 4px 2px; }
                
                .total-section { float: none; width: 100%; margin-top: 20px; }
                
                .notes { font-size: 0.75rem; }
                .notes ul { padding-left: 15px; }
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
                <tr>
                    <td width="80" style="white-space: nowrap;">ご相談者:</td>
                    <td class="input-cell"><input type="text"></td>
                    <td width="20"></td> <!-- Spacer -->
                    <td width="80" style="white-space: nowrap;">ご心配な方:</td>
                    <td class="input-cell"><input type="text"></td>
                </tr>
            </table>
        </div>

        <table class="estimate-table">
            <thead>
                <tr>
                    <th>項目名</th>
                    <th width="80">単価</th>
                    <th width="60">数量</th>
                    <th width="100">金額</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
                ${!subtotal ? '<tr><td colspan="4" class="center">選択された項目はありません</td></tr>' : ''}
            </tbody>
        </table>

        <div class="total-section">
            <table class="total-table">
                <tr>
                    <th>小計</th>
                    <td class="num">${fmt(subtotal)} 円</td>
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
            <ul style="padding-left: 20px; list-style-type: square;">
                <li>搬送回数、搬送距離が11km以上、夜間帯の搬送により追加料金が発生する場合があります。</li>
                <li>この見積書はシミュレーション結果に基づく概算です。実際のご契約時に詳細が変更となる場合がございます。</li>
                <li>接待費（料理・返礼品）は、ご会葬人数により変動いたします。</li>
            </ul>
        </div>

        <div class="no-print" style="text-align: center; margin-top: 20px;">
            <button onclick="window.print()" style="padding: 10px 25px; background: #333; color: white; border: none; border-radius: 4px; cursor: pointer;">印刷する</button>
            <button onclick="window.close()" style="padding: 10px 25px; background: #ccc; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;">閉じる</button>
        </div>
    </body>
    </html>
    `;

    const win = window.open('', '_blank');
    win.document.write(html);
    win.document.close();
}

function renderRow(item) { return ''; } // Deprecated
function renderReceptionItemRow(item) { return ''; } // Deprecated

// Start
document.addEventListener('DOMContentLoaded', init);
document.getElementById('btn-estimate').addEventListener('click', generateEstimate);
