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

// Add click effect to button
function enhanceButtonClick() {
    const button = document.getElementById('new-quote');
    
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// Add ripple effect styles
function addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    addFadeAnimations();
    addRippleStyles();
    displayQuote();
    
    const newQuoteBtn = document.getElementById('new-quote');
    newQuoteBtn.addEventListener('click', displayQuote);
    
    enhanceButtonClick();
    addKeyboardShortcut();
    
    // Auto-rotate quotes every 30 seconds (optional)
    // setInterval(displayQuote, 30000);
}); 