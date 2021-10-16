function begin(){
    navigator.mediaDevices.getUserMedia({audio:true});
x= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TZ34XKa18/model.json',done);
}
function done(){
    x.classify(gotresult);
}
function gotresult(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results)
    document.getElementById("label").innerHTML="I can hear - "+results[0].label;
    document.getElementById("confidence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+" %"
  r=  Math.floor(Math.random() * 255) + 1;
  g=  Math.floor(Math.random() * 255) + 1;
  b=  Math.floor(Math.random() * 255) + 1;
  document.getElementById("label").style.color= "rgb("+r+","+g+","+b+")";
  document.getElementById("confidence").style.color= "rgb("+r+","+g+","+b+")";
f= document.getElementById("a1");
h=document.getElementById("a2");
i= document.getElementById("a3");
j=document.getElementById("a4");
if(results[0].label=="Clapping"){
    f.src='aliens-01.gif';
    h.src='aliens-02.png';
    i.src='aliens-03.png';
    j.src='aliens-04.png';
}
else if(results[0].label=="Snapping"){
    f.src='aliens-01.png';
    h.src='aliens-02.gif';
    i.src='aliens-03.png';
    j.src='aliens-04.png';
}
else if(results[0].label=="Background Noise"){
    f.src='aliens-01.png';
    h.src='aliens-02.png';
    i.src='aliens-03.gif';
    j.src='aliens-04.png';
}
else if(results[0].label=="Bell"){
    f.src='aliens-01.png';
    h.src='aliens-02.png';
    i.src='aliens-03.png';
    j.src='aliens-04.gif';
}
}
}

