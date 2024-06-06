function notify(message) {
    let $notif = document.getElementById('notification');
    $notif.textContent = message;
    $notif.style.display = 'block';
    setTimeout(() => {
        $notif.style.display = 'none';
    }, 2000);
}