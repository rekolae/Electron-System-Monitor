const greetingElement = document.getElementById("greeting")
const greetings = [
    "Hello1!",
    "Hello2!",
    "Hello3!",
    "Hello4!",
    "Hello5!",
    "Hello6!",
    "Hello7!",
    "Hello8!",
    "Hello9!"
]

const changeGreeting = () => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    greetingElement.textContent = randomGreeting
}

greetingElement.addEventListener("click", changeGreeting)
