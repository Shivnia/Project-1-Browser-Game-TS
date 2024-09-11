interface Question {
    category: string;
    question: string;
    choices: string[];
    answer: string;
}

const questions: Question[] = [
    {
        category: "Geography",
        question: "What is the capital of Canada?",
        choices: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        answer: "Ottawa"
    },
    {
        category: "Geography",
        question: "Which is the longest river in the world?",
        choices: ["Amazon", "Mississippi", "Nile", "Yangtze"],
        answer: "Nile"
    },
    {
        category: "Geography",
        question: "What is the smallest country in the world?",
        choices: ["San Marino", "Nauru", "Vatican City", "Monaco"],
        answer: "Vatican City"
    },
    {
        category: "Geography",
        question: "What is the tallest building in the world?",
        choices: ["One World Trade Center", "Shanghai Tower", "Burj Khalifa", "Abraj Al-Bait Clock Tower"],
        answer: "Burj Khalifa"
    },
    {
        category: "Geography",
        question: "Which continent is the least populated?",
        choices: ["Asia", "Australia", "Africa", "Antarctica"],
        answer: "Antarctica"
    },
    {
        category: "Astronomy",
        question: "What is the closest star to Earth?",
        choices: ["Sirius", "Proxima Centauri", "Alpha Centauri", "Betelgeuse"],
        answer: "Alpha Centauri"
    },
    {
        category: "Astronomy",
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        choices: ["Mars", "Mercury", "Jupiter", "Venus"],
        answer: "Venus"
    },
    {
        category: "Astronomy",
        question: "What is the name of the galaxy that contains the Milky Way?",
        choices: ["Whirlpool", "Andromeda", "Pinwheel", "Sombrero"],
        answer: "Andromeda"
    },
    {
        category: "Astronomy",
        question: "Which planet is known as the 'Blue Planet'?",
        choices: ["Uranus", "Neptune", "Saturn", "Earth"],
        answer: "Earth"
    },
    {
        category: "Astronomy",
        question: "What is the phenomenon where a total solar eclipse occurs and the sun's corona is visible?",
        choices: ["Diamond Ring", "Umbra", "Penumbra", "Corona"],
        answer: "Corona"
    },
    {
        category: "Literature",
        question: "Who wrote the Harry Potter series?",
        choices: ["Suzanne Collins", "C.S. Lewis", "J.R.R. Tolkien", "J.K. Rowling"],
        answer: "J.K. Rowling"
    },
    {
        category: "Literature",
        question: "Which Shakespearean play features the character Hamlet?",
        choices: ["Macbeth", "Othello", "Hamlet", "Romeo and Juliet"],
        answer: "Hamlet"
    },
    {
        category: "Literature",
        question: "Who wrote '1984'?",
        choices: ["Ray Bradbury", "Aldous Huxley", "Arthur C. Clarke", "George Orwell"],
        answer: "George Orwell"
    },
    {
        category: "Literature",
        question: "Which novel by Jane Austen begins with the line 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife'?",
        choices: ["Mansfield Park", "Emma", "Sense and Sensibility", "Pride and Prejudice"],
        answer: "Pride and Prejudice"
    },
    {
        category: "Literature",
        question: "Who wrote 'The Great Gatsby'?",
        choices: ["Ernest Hemingway", "John Steinbeck", "William Faulkner", "F. Scott Fitzgerald"],
        answer: "F. Scott Fitzgerald"
    },
    {
        category: "Science",
        question: "What is the chemical symbol for sodium?",
        choices: ["Sd", "So", "Ni", "Na"],
        answer: "Na"
    },
    {
        category: "Science",
        question: "What is the pH value of pure water?",
        choices: ["9", "8", "6", "7"],
        answer: "7"
    },
    {
        category: "Science",
        question: "What is the process by which plants make their own food called?",
        choices: ["Respiration", "Transpiration", "Photosynthesis", "Fermentation"],
        answer: "Photosynthesis"
    },
    {
        category: "Science",
        question: "What is the densest element?",
        choices: ["Gold", "Lead", "Osmium", "Plutonium"],
        answer: "Osmium"
    },
    {
        category: "Science",
        question: "What is the unit of electrical resistance?",
        choices: ["Volt", "Ampere", "Watt", "Ohm"],
        answer: "Ohm"
    },
    {
        category: "Technology",
        question: "What does CPU stand for?",
        choices: ["Computer Processor Unit", "Core Processing Unit", "Central Processing Unit", "Central Processor Unit"],
        answer: "Central Processing Unit"
    },
    {
        category: "Technology",
        question: "Who founded Apple Inc.?",
        choices: ["Jeff Bezos", "Bill Gates", "Steve Jobs", "Steve Wozniak"],
        answer: "Steve Jobs"
    },
    {
        category: "Technology",
        question: "Which programming language was developed by Sun Microsystems in 1995?",
        choices: ["JavaScript", "Python", "C++", "Java"],
        answer: "Java"
    },
    {
        category: "Technology",
        question: "What is the full form of HTML?",
        choices: ["Home Tool Markup Language", "High Tech Markup Language", "Hyperlink and Text Markup Language", "Hyper Text Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        category: "Technology",
        question: "Who developed the World Wide Web?",
        choices: ["Bill Gates", "Mark Zuckerberg", "Steve Jobs", "Tim Berners-Lee"],
        answer: "Tim Berners-Lee"
    }
];

function getQuestionsByCategory(category: string): Question[] {
    return questions.filter(question => question.category === category);
}

const geographyQuestions = getQuestionsByCategory("Geography");
const astronomyQuestions = getQuestionsByCategory("Astronomy");
const literatureQuestions = getQuestionsByCategory("Literature");
const scienceQuestions = getQuestionsByCategory("Science");
const technologyQuestions = getQuestionsByCategory("Technology");

let currentQuestion: number = 0;
let score: number = 0;
let currentCategoryQuestions: Question[] = [];

const questionElement = document.getElementById('question') as HTMLElement;
const choicesElement = document.getElementById('choices') as HTMLElement;
const resultElement = document.getElementById('result') as HTMLElement;
const submitButton = document.getElementById('submit') as HTMLButtonElement;
submitButton.remove();
submitButton.removeEventListener('click', () => loadQuestion(currentCategoryQuestions[currentQuestion]));

function loadQuestion(question: Question) {
    questionElement.textContent = question.question;

    choicesElement.innerHTML = '';
    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice, question.answer);
        choicesElement.appendChild(button);
    });
}

function checkAnswer(choice: string, correctAnswer: string) {
    const buttons = choicesElement.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        }
        if (button.textContent === choice && choice !== correctAnswer) {
            button.classList.add('incorrect');
        }
    });

    if (choice === correctAnswer) {
        score++;
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < currentCategoryQuestions.length) {
            loadQuestion(currentCategoryQuestions[currentQuestion]);
        } else {
            showResult();
        }
    }, 2000);
}

function showResult() {
    questionElement.textContent = '';
    choicesElement.innerHTML = '';
    resultElement.textContent = `You scored ${score} out of ${currentCategoryQuestions.length}!`;
    submitButton.style.display = 'none';

    const retryButton = document.createElement('button');
    retryButton.textContent = 'Retry Quiz';
    retryButton.onclick = () => {
        score = 0;
        currentQuestion = 0;
        loadQuestion(currentCategoryQuestions[currentQuestion]);
        resultElement.textContent = '';
    };
    resultElement.appendChild(retryButton);

    const backButton = document.createElement('button');
    backButton.textContent = 'Back to Categories';
    backButton.onclick = () => {
        location.reload();
    };
    resultElement.appendChild(backButton);
}

submitButton.addEventListener('click', () => loadQuestion(currentCategoryQuestions[currentQuestion]));

function updateHeading(category: string) {
    const headingElement = document.querySelector('h1') as HTMLElement;
    headingElement.textContent = category + " Quiz";
}

function removeCategories() {
    const categoriesFieldset = document.getElementById('categories');
    categoriesFieldset?.remove();
}

const radioButtons = document.querySelectorAll('input[name="categories"]') as NodeListOf<HTMLInputElement>;
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', (event) => {
        const selectedCategory = (event.target as HTMLInputElement).value;
        currentCategoryQuestions = getQuestionsByCategory(selectedCategory);
        currentQuestion = 0;
        score = 0;
        loadQuestion(currentCategoryQuestions[currentQuestion]);

        updateHeading(selectedCategory);
        removeCategories();

        resultElement.textContent = '';
        const retryButton = document.querySelector('#result button');
        if (retryButton) {
            retryButton.remove();
        }

        const h2Element = document.querySelector('#quiz h2');
        if (h2Element) {
            h2Element.remove();
        }
    });
});
