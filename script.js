const facts = [
    "The first computer programmer was Ada Lovelace.",
    "The first computer virus was created in 1983.",
    "The first high-level programming language was Fortran, developed in the 1950s.",
    "The term 'bug' in programming was popularized by Grace Hopper.",
    "Python is named after the comedy series Monty Python's Flying Circus."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const factDisplay = document.getElementById('fact-display');
    factDisplay.textContent = facts[randomIndex];
}
