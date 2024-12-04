const quotes = [
    "The journey of a thousand miles begins with one step.",
    "Done is better than perfect.",
    "Focus on progress, not perfection.",
    "Small steps every day add up to big results.",
    "Today's actions shape tomorrow's achievements.",
    "Start where you are. Use what you have. Do what you can.",
    "The only way to do great work is to love what you do.",
    "Your future self will thank you for what you do today.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Act as if what you do makes a difference. It does.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future depends on what you do today.",
    "You don't have to be great to start, but you have to start to be great.",
    "The secret of getting ahead is getting started.",
    "Your limitation—it's only your imagination."
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateQuote() {
    document.getElementById('inspirational-quote').textContent = getRandomQuote();
}

document.getElementById('new-quote').addEventListener('click', updateQuote);
document.addEventListener('DOMContentLoaded', updateQuote); 