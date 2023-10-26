document.getElementById("heading").innerHTML="<h2>Wellcome ! </h2>";

function displayGreeting(){
    const presentTimeH = new Date();
let presentTime = presentTimeH.getHours();
     result ='';
    if(presentTime >= 9 && presentTime < 15){
        result = 'Goog Afternoon !';
    }else if (presentTime > 15 && presentTime < 19){
        result = 'Good evening !';
    }else if(presentTime > 3 && presentTime < 9){
        result = 'Good morning !';
    }else{
        result = 'Good night !';
    }
    window.alert(result);
}
document.getElementById('greetButton').addEventListener('click', displayGreeting);

