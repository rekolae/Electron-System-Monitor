const sideNav = $("#sidenav")
const navToggleButton = $("#navToggleButton")

let rotated = false
const rotateIcon = () => {
    if (rotated) {
        navToggleButton.css("transform", "rotate(0deg)")
        navToggleButton.css("color", "#b1b1b1")
    }

    else {
        navToggleButton.css("transform", "rotate(45deg)")
        navToggleButton.css("color", "rgb(255, 0, 0)")
    }

    rotated = !rotated
}

const toggleNav = () => {
    if (sideNav.css("width") === "150px") {
        sideNav.css("width", "50px")
        sideNav.addClass("is-minimized").removeClass("is-maximized")
    }

    else {
        sideNav.css("width", "150px")
        sideNav.addClass("is-maximized").removeClass("is-minimized")
    }

    rotateIcon()
}

const setActivePage = (event) => {
    let oldActiveElement = $("li.is-active").first()
    let newActiveElement = $(event.target)

    let targetTag = event.target.tagName.toLowerCase();

    if (targetTag === "div" || targetTag === "i") {
        newActiveElement = $(event.target.parentElement)
    }

    if (!oldActiveElement.is(newActiveElement)) {
        oldActiveElement.removeClass("is-active")
        newActiveElement.addClass("is-active")
        loadPage(newActiveElement.attr("id"))
    }
}

$("#navToggleButton, #hideText").on("click", toggleNav)
$("ul#nav-sections").on("click", ".section", setActivePage)