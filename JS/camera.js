Webcam.set({
    width: 400,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
});
Webcam.attach('#mywebcam');

function takescreenshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('results').innerHTML = "<h2>Here is your image:</h2><img width='400' src='"+data_uri+"'>";
    })
};