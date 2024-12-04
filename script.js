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
    
    let attempts = 0;
    const maxAttempts = 5;
    
    function initQuotes() {
        console.log('Attempt:', attempts + 1);
        
        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');
        const newQuoteButton = document.getElementById('new-quote');
        
        if (!quoteText || !quoteAuthor || !newQuoteButton) {
            attempts++;
            if (attempts < maxAttempts) {
                console.log('Elements not found, retrying...');
                setTimeout(initQuotes, 500); // Try again in 500ms
                return;
            }
            console.error('Failed to find elements after', maxAttempts, 'attempts');
            return;
        }
        
        console.log('Elements found:', {
            quoteText: !!quoteText,
            quoteAuthor: !!quoteAuthor,
            newQuoteButton: !!newQuoteButton
        });

        function getRandomQuote() {
            return quotes[Math.floor(Math.random() * quotes.length)];
        }

        function updateQuote() {
            const quote = getRandomQuote();
            console.log('Updating quote:', quote);
            quoteText.textContent = quote.text;
            quoteAuthor.textContent = `— ${quote.author}`;
        }

        newQuoteButton.addEventListener('click', updateQuote);
        updateQuote();
    }
    
    initQuotes();
}); 