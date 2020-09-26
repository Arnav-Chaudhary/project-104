Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+ data_uri +'">';
    console.log("inside takesnapshot function");
    });
}
console.log('ml5 version:' ,ml5.version);

Classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aV4boVHPE/model.json', modelLoaded);
function modelLoaded(){
    console.log('model loaded')
}

