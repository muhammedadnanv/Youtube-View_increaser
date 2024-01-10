const videoUrl = document.getElementById(`videoUrl${index}`).value;
    const videoId = extractVideoId(videoUrl);

    if (videoId) {
        const playerContainer = document.getElementById(`player${index}`);
        playerContainer.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    } else {
        alert('Invalid YouTube URL');
    }
}

function extractVideoId(url) {
    const regExp =
        /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}
