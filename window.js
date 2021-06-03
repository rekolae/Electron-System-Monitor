const greetingElement = document.getElementById("greeting")
const greetings = [
    "Hello!",
    "Bonjour!",
    "Hola!",
    "Konnichiwa!",
    "Guten Tag!",
    "Anyoung haseyo!",
    "Asalaam alaikum!",
    "God dag!",
    "Zdravstvuyte!",
    "namaste!",
    "buon giorno!",
    "zdravo!",
    "Shalom!"
]

const changeGreeting = () => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    greetingElement.textContent = randomGreeting
}

greetingElement.addEventListener("click", changeGreeting)
