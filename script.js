const video = document.getElementById ('video')

Promise.all([
    faceapi.net.tnyFaceDetector.lodaFromURI('/models')
])

function startVideo() {
    navigator.getUserMedia(
    { video: { } },
    stream => video.srcObject = stream,
    err => console.error(err)
    )
}

startVideo()