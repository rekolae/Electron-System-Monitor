function mem () {
    let freeBytes = window.api.monitor.getFreeRAM();

    // Get free RAM in MiB and round it
    let freeMiB = Math.round(((freeBytes / (1024 * 1024)) + Number.EPSILON) * 100) / 100
    let totalGiB = window.api.monitor.totalRAM / (1024 * 1024 * 1024)
    
    $("#statsRAM").html(`${freeMiB} MiB free/available<sup>*</sup> of ${totalGiB} GiB`)

    // Show notice about "free" RAM on MacOS
    $("#notice").removeClass("hidden").addClass("show-notice")
}

function cpu () {
    // Insert CPU stats on button click
    let cpus = window.api.monitor.getCPUs()
    $("#statsCPU").text(`System has ${cpus.length} ${cpus[0].model} cores`)
}

// Event listeners
$("#showRAM").on("click", mem)
$("#showCPU").on("click", cpu)
