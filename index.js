document.getElementById('sendDataButton').addEventListener('click', () => {
    const data = { message: 'Hello from Mini App!' };

    // Проверка наличия объекта Telegram WebApp
    if (window.Telegram.WebApp) {
        window.Telegram.WebApp.sendData(JSON.stringify(data));
    } else {
        console.log('Telegram WebApp object not found');
    }
});
