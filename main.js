
var Background_Noise = 0;
var Cat = 0;
var Dog = 0;
var Forest_Bird = 0;
var Hamster = 0;

function prkrfvr()
{
navigator.mediaDevices.getUserMedia({audio:true});
Classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/raTK7ktFy/model.json",MODEL)
}

function MODEL()
{
    Classifier.classify(AURA);
}

function AURA(error,result)
{
if(error)
{
    console.error(error);
}
else
{
    console.log(result);
    r = Math.floor(Math.random()*255)+1;
    g = Math.floor(Math.random()*255)+1;
    b = Math.floor(Math.random()*255)+1;

    document.getElementById("number").innerHTML = "Detected Cat" + Cat + "Detected Dog" + Dog + "Detected Forest Bird" + Forest_Bird + "Detected Hamster" + Hamster;
    document.getElementById("name").innerHTML = "Detected Voice is of a:" + result[0].label;
    document.getElementById("name").style.color = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("number").style.color = "rgb(" + r + "," + g + "," + b + ")";
    img = document.getElementById("Dio-Da");
     if (result[0].label == "Cat") {
      Cat = Cat + 1;
      img.src = "https://th.bing.com/th/id/OIP.ZkBHm4tDsOF13ejG9EnfmgHaE8?pid=ImgDet&rs=1";
     }    
     
     else if (result[0].label == "Dog") {
        Dog = Dog + 1;
        img.src = "https://th.bing.com/th/id/R.09cef2f3669d9e1194792060bc6c1918?rik=RjRe6mqgJSzCeA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-KAq0zTHPwPY%2fT21jk7Z49GI%2fAAAAAAAAAcY%2fQlWPm1OA2fI%2fs1600%2fBeagle%2bPuppies%2bPictures2.jpg&ehk=bDl6Ba6jk%2bmxdUFhNVDfjXbwaYjWGMHH82E2NqZ%2bNaE%3d&risl=&pid=ImgRaw&r=0";
       } 

       else if (result[0].label == "Forest Bird") {
        Forest_Bird = Forest_Bird + 1;
        img.src = "https://th.bing.com/th/id/R.3f636b201c87e2e1b88a01e42a7a3d8d?rik=sj84irRZ7izRgA&pid=ImgRaw&r=0";
       }
       else if (result[0].label == "Hamster") {
        Hamster = Hamster + 1;
        img.src = "https://th.bing.com/th/id/R.a4245cb3a58648e34eb3e4c931fd8711?rik=cPIDyAEcZscivw&pid=ImgRaw&r=0";
       }

}
}