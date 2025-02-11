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
    para.innerHTML =`Today, I went to the zoo and saw a(n) 1${textOne} .</p>
    <p>It was very 2 ${textTwo} and 3 ${textThree} 4 ${textFour} .</p>
    <p>
        There were also many 5${textFive} . Suddenly, I heard someone shout, "6 ${textSix} !"
    </p>
    <p>
        I turned around and saw a zookeeper 7${textSeven}  towards a(n) 8 ${textEight} .
    </p>
    <p>The zookeeper looked 9 ${textNine}  while 10 ${textTen}`;
    
    // document.getElementById('answer').appendChild(para);
    var answerDiv = document.getElementById('answer');
    answerDiv.innerHTML = "";
    answerDiv.appendChild(para);


}
