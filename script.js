const hiragana = {
    // あ行
    'あ': { romaji: 'a', pronunciation: 'as in "father"' },
    'い': { romaji: 'i', pronunciation: 'as in "meet"' },
    'う': { romaji: 'u', pronunciation: 'as in "boot"' },
    'え': { romaji: 'e', pronunciation: 'as in "bed"' },
    'お': { romaji: 'o', pronunciation: 'as in "more"' },
    
    // か行
    'か': { romaji: 'ka', pronunciation: 'k + a' },
    'き': { romaji: 'ki', pronunciation: 'k + i' },
    'く': { romaji: 'ku', pronunciation: 'k + u' },
    'け': { romaji: 'ke', pronunciation: 'k + e' },
    'こ': { romaji: 'ko', pronunciation: 'k + o' },
    
    // さ行
    'さ': { romaji: 'sa', pronunciation: 's + a' },
    'し': { romaji: 'shi', pronunciation: 'like "she"' },
    'す': { romaji: 'su', pronunciation: 's + u' },
    'せ': { romaji: 'se', pronunciation: 's + e' },
    'そ': { romaji: 'so', pronunciation: 's + o' },
    
    // た行
    'た': { romaji: 'ta', pronunciation: 't + a' },
    'ち': { romaji: 'chi', pronunciation: 'like "cheese"' },
    'つ': { romaji: 'tsu', pronunciation: 'like "tsunami"' },
    'て': { romaji: 'te', pronunciation: 't + e' },
    'と': { romaji: 'to', pronunciation: 't + o' },
    
    // な行
    'な': { romaji: 'na', pronunciation: 'n + a' },
    'に': { romaji: 'ni', pronunciation: 'n + i' },
    'ぬ': { romaji: 'nu', pronunciation: 'n + u' },
    'ね': { romaji: 'ne', pronunciation: 'n + e' },
    'の': { romaji: 'no', pronunciation: 'n + o' },
    
    // は行
    'は': { romaji: 'ha', pronunciation: 'h + a' },
    'ひ': { romaji: 'hi', pronunciation: 'h + i' },
    'ふ': { romaji: 'fu', pronunciation: 'similar to "who"' },
    'へ': { romaji: 'he', pronunciation: 'h + e' },
    'ほ': { romaji: 'ho', pronunciation: 'h + o' },
    
    // ま行
    'ま': { romaji: 'ma', pronunciation: 'm + a' },
    'み': { romaji: 'mi', pronunciation: 'm + i' },
    'む': { romaji: 'mu', pronunciation: 'm + u' },
    'め': { romaji: 'me', pronunciation: 'm + e' },
    'も': { romaji: 'mo', pronunciation: 'm + o' },
    
    // や行
    'や': { romaji: 'ya', pronunciation: 'as in "yard"' },
    'ゆ': { romaji: 'yu', pronunciation: 'as in "you"' },
    'よ': { romaji: 'yo', pronunciation: 'y + o' },
    
    // ら行
    'ら': { romaji: 'ra', pronunciation: 'r + a (soft r)' },
    'り': { romaji: 'ri', pronunciation: 'r + i (soft r)' },
    'る': { romaji: 'ru', pronunciation: 'r + u (soft r)' },
    'れ': { romaji: 're', pronunciation: 'r + e (soft r)' },
    'ろ': { romaji: 'ro', pronunciation: 'r + o (soft r)' },
    
    // わ行
    'わ': { romaji: 'wa', pronunciation: 'as in "water"' },
    'を': { romaji: 'wo', pronunciation: 'pronounced as "o"' },
    
    // ん
    'ん': { romaji: 'n', pronunciation: 'as in "sin"' },
    
    // 濁音 (が行)
    'が': { romaji: 'ga', pronunciation: 'g + a' },
    'ぎ': { romaji: 'gi', pronunciation: 'g + i' },
    'ぐ': { romaji: 'gu', pronunciation: 'g + u' },
    'げ': { romaji: 'ge', pronunciation: 'g + e' },
    'ご': { romaji: 'go', pronunciation: 'g + o' },
    
    // 濁音 (ざ行)
    'ざ': { romaji: 'za', pronunciation: 'z + a' },
    'じ': { romaji: 'ji', pronunciation: 'like "jeep"' },
    'ず': { romaji: 'zu', pronunciation: 'z + u' },
    'ぜ': { romaji: 'ze', pronunciation: 'z + e' },
    'ぞ': { romaji: 'zo', pronunciation: 'z + o' },
    
    // 濁音 (だ行)
    'だ': { romaji: 'da', pronunciation: 'd + a' },
    'ぢ': { romaji: 'ji', pronunciation: 'same as じ' },
    'づ': { romaji: 'zu', pronunciation: 'same as ず' },
    'で': { romaji: 'de', pronunciation: 'd + e' },
    'ど': { romaji: 'do', pronunciation: 'd + o' },
    
    // 濁音 (ば行)
    'ば': { romaji: 'ba', pronunciation: 'b + a' },
    'び': { romaji: 'bi', pronunciation: 'b + i' },
    'ぶ': { romaji: 'bu', pronunciation: 'b + u' },
    'べ': { romaji: 'be', pronunciation: 'b + e' },
    'ぼ': { romaji: 'bo', pronunciation: 'b + o' },
    
    // 半濁音 (ぱ行)
    'ぱ': { romaji: 'pa', pronunciation: 'p + a' },
    'ぴ': { romaji: 'pi', pronunciation: 'p + i' },
    'ぷ': { romaji: 'pu', pronunciation: 'p + u' },
    'ぺ': { romaji: 'pe', pronunciation: 'p + e' },
    'ぽ': { romaji: 'po', pronunciation: 'p + o' }
};

let timeLeft = 10;
let showHint = false;

function hideHints() {
    document.getElementById('romaji').textContent = '???';
    document.getElementById('pronunciation').textContent = '???';
}

function showHints(kana) {
    const info = hiragana[kana];
    document.getElementById('romaji').textContent = info.romaji;
    document.getElementById('pronunciation').textContent = info.pronunciation;
}

function updateDisplay() {
    const kanas = Object.keys(hiragana);
    const randomKana = kanas[Math.floor(Math.random() * kanas.length)];
    
    // 只更新假名，隱藏提示
    document.getElementById('kana').textContent = randomKana;
    hideHints();
    
    // 重置計時器和提示狀態
    timeLeft = 10;
    showHint = false;
    document.getElementById('timer').textContent = timeLeft;
}

function updateTimer() {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;

    // 在第5秒時顯示羅馬拼音和發音提示
    if (timeLeft === 5 && !showHint) {
        const currentKana = document.getElementById('kana').textContent;
        showHints(currentKana);
        showHint = true;
    }

    // 時間到時更新假名
    if (timeLeft <= 0) {
        updateDisplay();
    }
}

// 初始顯示
updateDisplay();

// 設定計時器
setInterval(updateTimer, 1000); 