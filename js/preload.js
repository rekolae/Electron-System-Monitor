const { cpus, freemem, totalmem } = require('os');
const { contextBridge } = require("electron");

// Convert platform names to more well-known names
const osMap = {
	win32: "Windows",
	darwin: "macOS",
	linux: "Linux"
}

// Expose info gathered by using node modules
contextBridge.exposeInMainWorld(
	"api",
	{
		about: {
			os: osMap[process.platform],
			chromeVer: process.versions["chrome"],
			nodeVer: process.versions["node"],
			electronVer: process.versions["electron"]
		},
		monitor: {
			totalRAM: totalmem(),
			getCPUs: () => (
				cpus()
			),
			getFreeRAM: () => (
				freemem()
			)
		}
	}
)
