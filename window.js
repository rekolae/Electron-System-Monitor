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
    "Shalom!",
    "Moi!"
]

const randomizeGreeting = () => {

    // Randomize greeting
    let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

    // If same greeting was randomized -> pick the next one!
    if (randomGreeting === greetingElement.textContent) {
        newIndex = greetings.indexOf(randomGreeting) + 1
        
        // ... If out-of-bounds -> subtract two to pick the previous one!
        if (newIndex >= greetings.length) {
            newIndex -= 2
        }

        randomGreeting = greetings[newIndex];
    }

    return randomGreeting
}

const changeGreeting = () => {

    // Ignore click events when animation is underway
    if (greetingElement.classList.contains("is-changing")) {
        return
    }

    // Start fade out animation
    greetingElement.classList.add("is-changing")
    greetingElement.classList.add("fade-text-out")
}

const fadeChange = () => {

    // Text has faded out
    if (greetingElement.classList.contains("fade-text-out")) {
        greetingElement.classList.remove("fade-text-out")

        // Change greeting text to a new one and start fade-in animation
        greetingElement.textContent = randomizeGreeting()
        greetingElement.classList.add("fade-text-in")
    }

    // Text has been faded in
    else {
        greetingElement.classList.remove("fade-text-in")
        greetingElement.classList.remove("is-changing")
    }
}

greetingElement.addEventListener("click", changeGreeting)
greetingElement.addEventListener("animationend", fadeChange)
