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
    
    // Create the new script element...
    let dynamicScript = document.createElement("script");

    // ... And add attributes for the element
    dynamicScript.setAttribute("id", "dynamic-script")
    dynamicScript.setAttribute("src", `js/${page}.js`)

    // Finally add the script element to the document head
    document.head.appendChild(dynamicScript)
}

const loadPage = () => {
    let section

    // Get the right section based on active page
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

    // Load given page and then load the corresponding .js file
    $('#pageContent').load(`sections/${section}.html`, () => {
        loadScript(section)
    })
}

const fadePage = () => {
    let $content = $("#pageContent")

    // Text has been faded out
    if ($content.hasClass("fade-content-out")) {
        $content.removeClass("fade-content-out")

        // Load page after old content is out of view
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

// Event listeners
$("#pageContent").on("animationend", fadePage)
