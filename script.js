const queueOutput = document.getElementById('queueOutput');

async function fetchQueue() {
    try {
        const response = await fetch('queue.json');
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();

        // Wyświetl JSON w panelu w formacie czytelnym
        queueOutput.textContent = JSON.stringify(data, null, 2);
    } catch (err) {
        queueOutput.textContent = 'Failed to load queue: ' + err.message;
    }
}

// Fetch co 5 sekund
setInterval(fetchQueue, 5000);

// Pierwsze ładowanie od razu
fetchQueue();
