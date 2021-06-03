// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
	
	// Convert platform names to more well-known names
	const osMap = {
		win32: "Windows",
    	darwin: "macOS",
    	linux: "Linux"
	}  
  
	// Replace text from span elements
	const replaceText = (selector, text) => {
    	const element = document.getElementById(selector)
    	if (element) {
			element.innerText = text
		} 
    }
  
	// Insert dependency versions to the html file
    for (const dependency of ['chrome', 'node', 'electron']) {
    	replaceText(`${dependency}-version`, process.versions[dependency])
    }

	// Insert OS name to the HTML
    replaceText("os", osMap[process.platform])
  })
