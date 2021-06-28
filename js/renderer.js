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
    let section

    switch (page) {
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

    $('#app').load("sections/" + section + ".html", () => {
        loadScript(section)
    });
}

// Load monitor page by default
$('#app').load("sections/monitor.html", () => {
    loadScript("monitor")
});
