async function fetchQueue() {
    try {
        const response = await fetch('https://deleyevr.github.io/Amongusqueueapi/queue.json');
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();
        document.getElementById('queueOutput').textContent = JSON.stringify(data, null, 2);
    } catch (err) {
        document.getElementById('queueOutput').textContent = 'Failed to load queue: ' + err.message;
    }
}

// Fetch co 5 sekund
setInterval(fetchQueue, 5000);
fetchQueue(); // initial
