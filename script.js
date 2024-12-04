const quotes = [
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        text: "Done is better than perfect.",
        author: "Sheryl Sandberg"
    },
    {
        text: "Focus on progress, not perfection.",
        author: "Bill Phillips"
    },
    {
        text: "Small steps every day add up to big results.",
        author: "Satya Nani"
    },
    {
        text: "Today's actions shape tomorrow's achievements.",
        author: "Unknown"
    },
    {
        text: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Your future self will thank you for what you do today.",
        author: "Unknown"
    }
];

function initializeQuotes() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteButton = document.getElementById('new-quote');

    // Check if elements exist
    if (!quoteText || !quoteAuthor || !newQuoteButton) {
        console.error('Required quote elements not found. Retrying in 100ms...');
        // Retry initialization after a short delay
        setTimeout(initializeQuotes, 100);
        return;
    }

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function updateQuote() {
        try {
            const quote = getRandomQuote();
            if (quoteText && quoteAuthor) {
                quoteText.textContent = quote.text;
                quoteAuthor.textContent = `— ${quote.author}`;
            }
        } catch (error) {
            console.error('Error updating quote:', error);
        }
    }

    newQuoteButton.addEventListener('click', updateQuote);
    updateQuote(); // Show initial quote
}

// Try both DOMContentLoaded and load events
document.addEventListener('DOMContentLoaded', initializeQuotes);
window.addEventListener('load', initializeQuotes); 