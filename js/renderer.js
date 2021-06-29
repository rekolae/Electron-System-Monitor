// Check that jQuery was loaded properly
window.onload = () => {
    if (window.jQuery) {  
        console.log("jQuery loaded!")
    } 
    
    else {
        console.log("jQuery not loaded!")
    }
}

const loadScript = (page) => {
    // Remove script element if it exists
    $("#dynamic-script").remove()
    
    // Add the new script element to the head
    let dynamicScript = document.createElement("script");
    dynamicScript.setAttribute("id", "dynamic-script")
    dynamicScript.setAttribute("src", `js/${page}.js`)
    document.head.appendChild(dynamicScript)
}

const loadPage = (page) => {
    let section = ""

    switch ($("li.is-active").first().attr("id")) {
        case "monitorPage":
            section = "monitor"
            break;
        
        case "aboutPage":
            section = "about"
            break;

        case "contactPage":
            section = "contact"
            break;
    }

    $('#pageContent').load("sections/" + section + ".html", () => {
        loadScript(section)
    })
}

const fadePage = () => {
    let $content = $("#pageContent")

    if ($content.hasClass("fade-content-out")) {
        $content.removeClass("fade-content-out")

        loadPage()

        $content.addClass("fade-content-in")
    }

    // Text has been faded in
    else {
        $content.removeClass("fade-content-in is-changing")
    }
}

// Load monitor page by default
$('#pageContent').load("sections/monitor.html", () => {
    loadScript("monitor")
});

$("#pageContent").on("animationend", fadePage)
