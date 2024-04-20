document.getElementById('resume-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        // Perform scan or processing here
        // For demonstration purpose, let's just display file name as result
        document.getElementById('scan-results').innerText = `Scanned: ${file.name}`;
    }
});
