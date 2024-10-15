document.getElementById('generate').addEventListener('click', function() {
    const url = document.getElementById('url').value;
    const qrcodeDiv = document.getElementById('qrcode');
    
    qrcodeDiv.innerHTML = '';

    if (url) {
        const canvas = document.createElement('canvas');
        qrcodeDiv.appendChild(canvas);

        QRCode.toCanvas(canvas, url, function(error) {
            if (error) {
                console.error(error);
            }
        });
    } else {
        alert('Please enter a valid URL.');
    }
});
