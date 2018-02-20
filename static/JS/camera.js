let webCam = Webcam.set({
    width: 400,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach('#mywebcam');

function takescreenshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('results').innerHTML = "<img width='400' src='"+data_uri+"'><h3>Your Picture</h3>";
        document.getElementById('mywebcam').style.display = "none";
        document.getElementById('camera-button').style.display = "none";
        let base64Code = data_uri.split(',')[1];
        console.log(base64Code);  
    })
};
