if (navigator.bluetooth) {
    navigator.bluetooth.getDevices()
        .then(devices => {
            // Check if there are connected Bluetooth devices
            if (devices.length > 0) {
                // At least one Bluetooth device is connected
                window.location.href = 'https://github.com/muhammedadnanv';
            } else {
                // No Bluetooth devices are connected
                console.log('No Bluetooth devices connected');
                // You can provide an alternative action here if needed
            }
        })
        .catch(error => {
            console.error('Error checking connected Bluetooth devices:', error);
            // Handle the error as needed
        });
} else {
    // Handle the case where Bluetooth is not supported
    console.log('Bluetooth not supported on this device');
    // You can provide an alternative action here if needed
}
