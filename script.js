const connectInput = document.getElementById('connectCode');
const saveBtn = document.getElementById('saveCode');
const queueOutput = document.getElementById('queueOutput');

// Save connect code locally
saveBtn.addEventListener('click', () => {
    const code = connectInput.value.trim();
    if (code) {
        localStorage.setItem('connectCode', code);
        alert(`Connect Code saved: ${code}`);
    }
});

// Fetch queue JSON from GH Pages
async function fetchQueue() {
    try {
        const response = await fetch('queue.json'); // plik JSON w tym samym repo
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        queueOutput.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
        queueOutput.textContent = 'Failed to load queue: ' + err.message;
    }
}

// Fetch every 5 seconds
setInterval(fetchQueue, 5000);
fetchQueue(); // initial load
