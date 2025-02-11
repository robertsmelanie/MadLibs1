function createParagraph(){
    var textOne =document.getElementById('textOne').value;
    var textTwo =document.getElementById('textTwo').value;
    var textThree =document.getElementById('textThree').value;
    var textFour =document.getElementById('textFour').value;
    var textFive =document.getElementById('textFive').value;
    var textSix =document.getElementById('textSix').value;
    var textSeven =document.getElementById('textSeven').value;
    var textEight =document.getElementById('textEight').value;
    var textNine =document.getElementById('textNine').value;
    var textTen =document.getElementById('textTen').value;
    var para = document.createElement('p');
    para.innerHTML = `Today, I went to the zoo and saw a(n) ${textOne}.<br>
It was very ${textTwo} and ${textThree} ${textFour}.<br>
There were also many ${textFive}. Suddenly, I heard someone shout,<br> "${textSix}!"<br>
I turned around and saw a zookeeper ${textSeven} towards a(n) ${textEight}.<br>
The zookeeper looked ${textNine} while ${textTen}.`;
    
    // document.getElementById('answer').appendChild(para);

    var answerDiv = document.getElementById('answer');
    answerDiv.innerHTML = "";
    answerDiv.appendChild(para);


}