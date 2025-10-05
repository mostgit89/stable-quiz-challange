// Quiz questions - 20 questions about Stable
const quizQuestions = [
    {
        id: 1,
        text: "What is Stable?",
        options: {
            A: "A wallet for USDT",
            B: "A blockchain built specifically for USDT",
            C: "A stablecoin issued by Tether",
            D: "A DeFi lending app"
        },
        correct: "B",
        difficulty: "Easy"
    },
    {
        id: 2,
        text: "What is Stable also called?",
        options: {
            A: "StableNet",
            B: "Stablechain",
            C: "TetherX",
            D: "Bitfinex Chain"
        },
        correct: "B",
        difficulty: "Easy"
    },
    {
        id: 3,
        text: "What is the primary native gas token used on Stable?",
        options: {
            A: "ETH",
            B: "BTC",
            C: "USDT",
            D: "STB"
        },
        correct: "C",
        difficulty: "Easy"
    },
    {
        id: 4,
        text: "What key advantage does Stable offer over other chains?",
        options: {
            A: "Gas-free peer transfers",
            B: "Proof-of-Work mining",
            C: "NFT marketplace integration",
            D: "No smart contract support"
        },
        correct: "A",
        difficulty: "Medium"
    },
    {
        id: 5,
        text: "Who is behind the development of Stable?",
        options: {
            A: "Binance and CZ",
            B: "Bitfinex and the USDT0 team",
            C: "Ethereum Foundation",
            D: "Solana Labs"
        },
        correct: "B",
        difficulty: "Medium"
    },
    {
        id: 6,
        text: "What transaction finality speed does Stable aim for?",
        options: {
            A: "10 minutes",
            B: "2 minutes",
            C: "Sub-second",
            D: "5 seconds"
        },
        correct: "C",
        difficulty: "Medium"
    },
    {
        id: 7,
        text: "Why was Stable created?",
        options: {
            A: "To replace the U.S. dollar",
            B: "To provide infrastructure optimized for stablecoins",
            C: "To host NFT marketplaces",
            D: "To create another DeFi chain"
        },
        correct: "B",
        difficulty: "Medium"
    },
    {
        id: 8,
        text: "How much annual stablecoin volume does Stable aim to serve?",
        options: {
            A: "$2 billion",
            B: "$27.6 trillion",
            C: "$500 million",
            D: "$10 trillion"
        },
        correct: "B",
        difficulty: "Medium"
    },
    {
        id: 9,
        text: "How many global stablecoin users are estimated currently?",
        options: {
            A: "10 million",
            B: "100 million",
            C: "500 million",
            D: "1 billion"
        },
        correct: "C",
        difficulty: "Medium"
    },
    {
        id: 10,
        text: "Which feature allows institutions to handle large-scale transactions efficiently on Stable?",
        options: {
            A: "Transfer Aggregator",
            B: "Gas Booster",
            C: "Block Compression",
            D: "USDT Converter"
        },
        correct: "A",
        difficulty: "Hard"
    },
    {
        id: 11,
        text: "What is 'Guaranteed Blockspace' in Stable?",
        options: {
            A: "Reserved space for NFT minting",
            B: "Dedicated blockspace for institutional transfers",
            C: "Unused block memory",
            D: "Validator reward pool"
        },
        correct: "B",
        difficulty: "Hard"
    },
    {
        id: 12,
        text: "Is Stable compatible with Ethereum dApps?",
        options: {
            A: "No, it uses a different VM",
            B: "Yes, it is fully EVM-compatible",
            C: "Only partially compatible",
            D: "Compatible only with layer-2 apps"
        },
        correct: "B",
        difficulty: "Easy"
    },
    {
        id: 13,
        text: "What's the main benefit of using USDT as native gas?",
        options: {
            A: "Higher gas fees",
            B: "Simpler user experience — no volatile tokens needed",
            C: "Faster validator rewards",
            D: "Easier NFT minting"
        },
        correct: "B",
        difficulty: "Medium"
    },
    {
        id: 14,
        text: "What does Stable aim to eliminate for everyday users?",
        options: {
            A: "The need to swap tokens for gas",
            B: "The ability to send USDT",
            C: "Smart contract support",
            D: "Wallet usage"
        },
        correct: "A",
        difficulty: "Easy"
    },
    {
        id: 15,
        text: "What is Stable's current development phase?",
        options: {
            A: "Public mainnet",
            B: "Public testnet",
            C: "Private testnet with invited partners",
            D: "Beta wallet only"
        },
        correct: "C",
        difficulty: "Medium"
    },
    {
        id: 16,
        text: "What kind of transactions are on Stable's roadmap?",
        options: {
            A: "Confidential transactions",
            B: "Anonymous mining",
            C: "Non-EVM smart contracts",
            D: "Token burning"
        },
        correct: "A",
        difficulty: "Medium"
    },
    {
        id: 17,
        text: "What is Stable's core mission?",
        options: {
            A: "To become a DeFi aggregator",
            B: "To power stablecoin payments globally",
            C: "To replace Bitcoin",
            D: "To host gaming projects"
        },
        correct: "B",
        difficulty: "Medium"
    },
    {
        id: 18,
        text: "What does 'real-dollar settlement' mean on Stable?",
        options: {
            A: "Transactions are backed by fiat US dollars instantly",
            B: "NFTs are priced in USD",
            C: "Users must link a U.S. bank",
            D: "Stable uses proof-of-dollar mining"
        },
        correct: "A",
        difficulty: "Medium"
    },
    {
        id: 19,
        text: "What makes Stable ideal for institutions?",
        options: {
            A: "Confidential transactions and guaranteed blockspace",
            B: "Low mining difficulty",
            C: "Free NFT minting",
            D: "AI trading automation"
        },
        correct: "A",
        difficulty: "Hard"
    },
    {
        id: 20,
        text: "What's the long-term vision of Stable?",
        options: {
            A: "To become the global settlement layer for digital dollars",
            B: "To replace Ethereum",
            C: "To build a gaming metaverse",
            D: "To be a meme coin platform"
        },
        correct: "A",
        difficulty: "Hard"
    }
];

// Game state
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timer;
let timeLeft = 5;

// DOM Elements
const screens = {
    landing: document.getElementById('landingScreen'),
    warning: document.getElementById('warningScreen'),
    quiz: document.getElementById('quizScreen'),
    end: document.getElementById('endScreen')
};

const elements = {
    enterBtn: document.getElementById('enterBtn'),
    startBtn: document.getElementById('startBtn'),
    restartBtn: document.getElementById('restartBtn'),
    currentQuestion: document.getElementById('currentQuestion'),
    currentScore: document.getElementById('currentScore'),
    questionText: document.getElementById('questionText'),
    optionsContainer: document.getElementById('optionsContainer'),
    feedback: document.getElementById('feedback'),
    endTitle: document.getElementById('endTitle'),
    endMessage: document.getElementById('endMessage'),
    confetti: document.getElementById('confetti'),
    timerProgress: document.getElementById('timerProgress'),
    timeLeft: document.getElementById('timeLeft')
};

// Event Listeners
elements.enterBtn.addEventListener('click', showWarningScreen);
elements.startBtn.addEventListener('click', startQuiz);
elements.restartBtn.addEventListener('click', restartQuiz);

// Screen Management
function showScreen(screen) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screen].classList.add('active');
}

function showWarningScreen() {
    showScreen('warning');
}

function startQuiz() {
    showScreen('quiz');
    loadQuestion();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    clearTimeout(timer);
    updateProgress();
    showScreen('landing');
}

// Timer Functions
function startTimer() {
    timeLeft = 5;
    elements.timeLeft.textContent = `${timeLeft}s`;
    elements.timerProgress.style.width = '100%';
    elements.timerProgress.style.transition = 'width 1s linear';
    
    timer = setInterval(() => {
        timeLeft--;
        elements.timeLeft.textContent = `${timeLeft}s`;
        elements.timerProgress.style.width = `${(timeLeft / 5) * 100}%`;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeUp();
        }
    }, 1000);
}

function handleTimeUp() {
    const question = quizQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-btn');
    
    // Disable all buttons
    options.forEach(btn => btn.disabled = true);
    
    // Find correct answer button
    const correctBtn = Array.from(options).find(btn => 
        btn.textContent.startsWith(question.correct + '.')
    );
    
    // Show correct answer
    correctBtn.classList.add('correct');
    elements.feedback.textContent = 'Time\'s up! ⏰';
    elements.feedback.className = 'feedback incorrect';
    
    // Store user answer as incorrect (timeout)
    userAnswers.push({
        question: question.text,
        userAnswer: 'TIMEOUT',
        correctAnswer: question.correct,
        isCorrect: false
    });
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

function stopTimer() {
    clearInterval(timer);
}

// Quiz Logic
function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showEndScreen();
        return;
    }

    const question = quizQuestions[currentQuestionIndex];
    updateProgress();

    // Set question text
    elements.questionText.textContent = question.text;

    // Clear previous options
    elements.optionsContainer.innerHTML = '';

    // Create option buttons
    Object.entries(question.options).forEach(([letter, text]) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `<strong>${letter}.</strong> ${text}`;
        button.addEventListener('click', () => {
            stopTimer();
            selectAnswer(letter);
        });
        elements.optionsContainer.appendChild(button);
    });

    // Clear feedback
    elements.feedback.textContent = '';
    elements.feedback.className = 'feedback';

    // Start timer for this question
    startTimer();
}

function selectAnswer(selectedAnswer) {
    const question = quizQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-btn');
    
    // Disable all buttons
    options.forEach(btn => btn.disabled = true);
    
    // Find correct answer button
    const correctBtn = Array.from(options).find(btn => 
        btn.textContent.startsWith(question.correct + '.')
    );
    
    // Find selected answer button
    const selectedBtn = Array.from(options).find(btn => 
        btn.textContent.startsWith(selectedAnswer + '.')
    );
    
    if (selectedAnswer === question.correct) {
        // Correct answer
        score++;
        selectedBtn.classList.add('correct');
        elements.feedback.textContent = 'Correct! 🎉';
        elements.feedback.className = 'feedback correct';
    } else {
        // Wrong answer
        selectedBtn.classList.add('incorrect');
        correctBtn.classList.add('correct');
        elements.feedback.textContent = `Wrong! Correct answer was ${question.correct}`;
        elements.feedback.className = 'feedback incorrect';
    }
    
    // Store user answer
    userAnswers.push({
        question: question.text,
        userAnswer: selectedAnswer,
        correctAnswer: question.correct,
        isCorrect: selectedAnswer === question.correct
    });
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

function updateProgress() {
    elements.currentQuestion.textContent = currentQuestionIndex + 1;
    elements.currentScore.textContent = score;
}

function showEndScreen() {
    showScreen('end');
    
    if (score === quizQuestions.length) {
        // Perfect score
        elements.endTitle.textContent = "CONGRATULATIONS!";
        elements.endMessage.textContent = "YOU ARE REAL STABLIAN OG";
        createConfetti();
    } else {
        // Not perfect score
        elements.endTitle.textContent = "Quiz Complete!";
        elements.endMessage.textContent = `You scored ${score} out of ${quizQuestions.length}. Try again to prove you're a REAL STABLIAN OG!`;
    }
}

function createConfetti() {
    // Simple confetti effect using CSS animations
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = getRandomColor();
        confetti.style.borderRadius = '50%';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
        confetti.style.opacity = '0.8';
        elements.confetti.appendChild(confetti);
    }
    
    // Add CSS animation for confetti
    if (!document.querySelector('#confettiStyles')) {
        const style = document.createElement('style');
        style.id = 'confettiStyles';
        style.textContent = `
            @keyframes confettiFall {
                0% {
                    transform: translateY(-100px) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(600px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function getRandomColor() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Initialize the app
updateProgress();
