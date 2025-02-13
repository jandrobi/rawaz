const quotes = [
    "ده‌توانم گاڵته‌ قبوڵ بكه‌م بەڵام بێ ڕێزی قبوڵ ناكه‌م، جیاوازیه‌كه‌ی بزانه‌🤎.",
    "من تێگه‌شتم ده‌بێت باوه‌ش بكه‌یت به‌ دڵی خۆتا خۆتت خۆش بوێت...",
    "نه‌گریام، ئه‌و شه‌وه‌ی كه‌ شكام نه‌گریام، به‌یانییه‌كه‌ی كا‌تێك جله‌كه‌م له‌ ده‌سكی ده‌رگا گیر بوو گریام...",
    "ئه‌گه‌ر نه‌م نوسیایه‌ ئه‌خنكام له‌ لافاوی ئه‌م قسانه‌ی كه‌ له‌ ناخمدایه‌...",
    "ژیان كورته‌، به‌ خه‌م به‌ڕێی مه‌كه‌ن🖤.",
    "هیچ كه‌سێك ناتوانێت من بێت هه‌تا ئه‌گه‌ر له‌ جێگه‌ی منیش دانیشێت.",
    "جوانی سوودی چیه‌ گه‌ر بێ عه‌قڵ بیت!"
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("wisdom-btn");

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

button.addEventListener("click", newQuote);

// هەر ١٠ چرکە پەندی نوێ بنوسە
setInterval(newQuote, 10000);

// پەندێکی سەرەتا بڵێ
newQuote();
