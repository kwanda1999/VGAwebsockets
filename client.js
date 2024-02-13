const socket = io();

function postStatus () {
    const statusInput = document.getElementById ('statusUpload');
    const status = statusInput.ariaValueMax.trim();

    if (status !== '') {
        socket.emit('postStatus', status);
    statusInput.value = '';
    }
}

socket.on ('newStatus', (status) => {
    const status = document.getElementById('status_id');
    const li = document.createElement('li');
    li.textContent = status;
    status.appendChild (li);
});

