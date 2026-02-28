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
    },
    {
        text: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        text: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Your limitation—it's only your imagination.",
        author: "Unknown"
    },
    {
        text: "The best way to get something done is to begin.",
        author: "Unknown"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "It does not matter how slowly you go, as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Small deeds done are better than great deeds planned.",
        author: "Peter Marshall"
    },
    {
        text: "Action is the foundational key to all success.",
        author: "Pablo Picasso"
    },
    {
        text: "Well done is better than well said.",
        author: "Benjamin Franklin"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "Inaction breeds doubt and fear. Action breeds confidence and courage.",
        author: "Dale Carnegie"
    },
    {
        text: "You are what you do, not what you say you'll do.",
        author: "Carl Jung"
    },
    {
        text: "Dreams don't work unless you take action.",
        author: "Roy T. Bennett"
    },
    {
        text: "The mountains are calling and I must go.",
        author: "John Muir"
    },
    {
        text: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "A year from now you may wish you had started today.",
        author: "Karen Lamb"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        text: "If you spend too much time thinking about a thing, you'll never get it done.",
        author: "Bruce Lee"
    },
    {
        text: "What we fear doing most is usually what we most need to do.",
        author: "Tim Ferriss"
    },
    {
        text: "Discipline is choosing between what you want now and what you want most.",
        author: "Abraham Lincoln"
    },
    {
        text: "The man who moves a mountain begins by carrying away small stones.",
        author: "Confucius"
    },
    {
        text: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison"
    },
    {
        text: "Knowing is not enough; we must apply. Willing is not enough; we must do.",
        author: "Johann Wolfgang von Goethe"
    },
    {
        text: "An ounce of action is worth a ton of theory.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "What you do today can improve all your tomorrows.",
        author: "Ralph Marston"
    },
    {
        text: "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena.",
        author: "Theodore Roosevelt"
    }
];

let currentQuoteIndex = -1;

function displayQuote() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const quoteBox = document.querySelector('.quote-box');
    
    // Prevent showing the same quote twice in a row
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex && quotes.length > 1);
    
    currentQuoteIndex = newIndex;
    const quote = quotes[currentQuoteIndex];
    
    // Add fade-out animation
    quoteBox.style.animation = 'fadeOut 0.3s ease-out forwards';
    
    setTimeout(() => {
        // Update content
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = `— ${quote.author}`;
        
        // Add fade-in animation
        quoteBox.style.animation = 'fadeIn 0.5s ease-out forwards';
    }, 300);
}

// Add fade animations to CSS dynamically
function addFadeAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(-20px); }
        }
        
        .quote-box.changing {
            animation: fadeOut 0.3s ease-out forwards;
        }
    `;
    document.head.appendChild(style);
}

// Add keyboard shortcut for new quote
function addKeyboardShortcut() {
    document.addEventListener('keydown', (e) => {
        // Press 'Space' or 'Enter' to get a new quote
        if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            document.getElementById('new-quote').click();
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    addFadeAnimations();
    displayQuote();

    const newQuoteBtn = document.getElementById('new-quote');
    newQuoteBtn.addEventListener('click', displayQuote);

    addKeyboardShortcut();
    
    // Auto-rotate quotes every 30 seconds (optional)
    // setInterval(displayQuote, 30000);
}); 