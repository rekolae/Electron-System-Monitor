const sideNav = $("#sidenav")
const navToggleButton = $("#navToggleButton")

let rotated = false
const rotateIcon = () => {

    // Rotate the sign back 
    if (rotated) {
        navToggleButton.css("transform", "rotate(0deg)")
        navToggleButton.css("color", "#b1b1b1")
    }

    // Rotate the "+" sign by 45 deg to act as an "x" close button
    else {
        navToggleButton.css("transform", "rotate(45deg)")
        navToggleButton.css("color", "rgb(255, 0, 0)")
    }

    // Keep track of sign rotation
    rotated = !rotated
}

const toggleNav = () => {

    // Collapse sidenav
    if (sideNav.css("width") === "150px") {
        sideNav.css("width", "50px")
        sideNav.addClass("is-minimized").removeClass("is-maximized")
    }

    // Expand sidenav
    else {
        sideNav.css("width", "150px")
        sideNav.addClass("is-maximized").removeClass("is-minimized")
    }

    rotateIcon()
}

const setActivePage = (event) => {

    // Ignore click events when setting new active page
    if ($("#pageContent").hasClass("is-changing")) {
        return
    }

    let oldActiveElement = $("li.is-active").first()
    let newActiveElement = $(event.target)

    let targetTag = event.target.tagName.toLowerCase();

    // If "div" or "i" element was clicked -> get parent "li" element
    if (targetTag === "div" || targetTag === "i") {
        newActiveElement = $(event.target.parentElement)
    }

    // If clicked element wasn't the currently active element -> change page
    if (!oldActiveElement.is(newActiveElement)) {
        oldActiveElement.removeClass("is-active")
        newActiveElement.addClass("is-active")
        $("#pageContent").addClass("is-changing fade-content-out")
    }
}

// Event listeners
$("#navToggleButton, #hideText").on("click", toggleNav)
$("ul#nav-sections").on("click", ".section", setActivePage)