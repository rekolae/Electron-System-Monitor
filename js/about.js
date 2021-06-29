var randomizeGreeting = () => {

    // Greetings in different languages
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
        "Namaste!",
        "Buon giorno!",
        "Zdravo!",
        "Shalom!",
        "Moi!"
    ]

    // Randomize greeting
    let randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

    // If same greeting was randomized -> pick the next one!
    if (randomGreeting === $("#greeting").text()) {
        newIndex = greetings.indexOf(randomGreeting) + 1
        
        // ... If out-of-bounds -> subtract two to pick the previous one!
        if (newIndex >= greetings.length) {
            newIndex -= 2
        }

        randomGreeting = greetings[newIndex];
    }

    return randomGreeting
}

function changeGreeting() {
    let $greeting = $("#greeting")

    // Ignore click events when animation is underway
    if ($greeting.hasClass("is-changing")) {
        return
    }

    // Start fade out animation
    $greeting.addClass("is-changing fade-text-out")
}

function fadeChange() {
    let $greeting = $("#greeting")

    // Text has faded out
    if ($greeting.hasClass("fade-text-out")) {
        $greeting.removeClass("fade-text-out")

        // Change greeting text to a new one and start fade-in animation
        $greeting.text(randomizeGreeting())
        $greeting.addClass("fade-text-in")
    }

    // Text has been faded in
    else {
        $greeting.removeClass("fade-text-in is-changing")
    }
}

// Insert OS info
$("#os").text(window.about.os)

// Insert dependency versions to the html file
$("#node-version").text(window.about.nodeVer)
$("#chrome-version").text(window.about.chromeVer)
$("#electron-version").text(window.about.electronVer)

// Event listeners
$("#greeting").on("click", changeGreeting)
$("#greeting").on("animationend", fadeChange)
