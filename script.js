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

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteButton = document.getElementById('new-quote');
    
    console.log('Elements found:', {
        quoteText: !!quoteText,
        quoteAuthor: !!quoteAuthor,
        newQuoteButton: !!newQuoteButton
    });

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function updateQuote() {
        if (quoteText && quoteAuthor) {
            const quote = getRandomQuote();
            console.log('Updating quote:', quote);
            quoteText.textContent = quote.text;
            quoteAuthor.textContent = `— ${quote.author}`;
        } else {
            console.error('Quote elements not found');
        }
    }

    if (newQuoteButton) {
        newQuoteButton.addEventListener('click', updateQuote);
    }
    
    updateQuote();
}); 