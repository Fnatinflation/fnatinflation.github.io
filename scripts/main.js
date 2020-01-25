function multiply() {
    let no1 = document.getElementById('no1').value
    let no2 = document.getElementById('no2').value
    let result = parseInt(no1) + parseInt(no2)
    alert(result)
}
function changeImage() {
    let testpic = document.getElementById('testpic').src
    if (testpic === "https://www.agf.dk/media/13273883/agf-logo.png?width=115&height=115") {
        document.getElementById('testpic').src = "https://media.pitchfork.com/photos/5e1cf1ac3c7695000833803c/1:1/w_320/circles.jpeg"
    } else {
        document.getElementById('testpic').src = "https://www.agf.dk/media/13273883/agf-logo.png?width=115&height=115"
    }

}
