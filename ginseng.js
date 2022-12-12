//게임 필드 구성 요소
var money = 300;
var ginseng = 0;
var redGinseng = 1000;
var ginsengCost = 10;
var count = 0;
var stage = 1;
var RG_To_Next = 5;
document.write("RG to next stage:");

function gameReStart() {
    money = 300;
    ginseng = 0;
    redGinseng = 0;
    stage = 1;
    RG_To_Next = 5;

    document.getElementById("money").innerHTML = money;
    document.getElementById("ginseng").innerHTML = ginseng;
    document.getElementById("redGinseng").innerHTML = redGinseng;
    document.getElementById("stage").innerHTML = stage;
    
    document.getElementById("eventFeild").style.visibility = "visible";
    document.getElementById("scoreFeild").style.visibility = "visible";
    document.getElementById("stageFeild").style.visibility = "visible";
    document.getElementById("gameOver").style.visibility = "hidden";
    document.getElementById("gameReStart").style.visibility = "hidden";
}

function checkGame() {
    if(money == 0 && ginseng == 0 && redGinseng == 0) {
        alert("게임 오버!");
        gameOver();
    }
}

function gameOver() {
    document.getElementById("eventFeild").style.visibility = "hidden";
    document.getElementById("scoreFeild").style.visibility = "hidden";
    document.getElementById("stageFeild").style.visibility = "hidden";
    document.getElementById("gameOver").style.visibility = "visible";
    document.getElementById("gameReStart").style.visibility = "visible";
}

function buyGinseng() {
    if(money <= 0) alert("인삼을 구매하기 위한 money가 부족합니다.");
    else {
        money -= ginsengCost;
        document.getElementById("money").innerHTML = money;
        ginseng++;
        document.getElementById("ginseng").innerHTML = ginseng;
    }
    checkGame();    
}

function makeRedGinseng() {
    if(ginseng <= 0) alert("홍삼은 인삼으로 만들 수 있습니다.\n인삼의 개수가 부족합니다.");
    else {
        ginseng -= 1;
        document.getElementById("ginseng").innerHTML = ginseng;
        var rv = Math.trunc(Math.random() * 100 + 1);
        if(1<=rv && 2>=rv) {
            alert("축하합니다! 고려 홍삼을 얻었습니다. (+3 RG)");
            redGinseng += 3;
            document.getElementById("redGinseng").innerHTML = redGinseng;
        }
        else if(3<=rv && rv<=10) {
            alert("축하합니다! 홍삼을 얻었습니다. (+1 RG)");
            redGinseng += 1;
            document.getElementById("redGinseng").innerHTML = redGinseng;
        }
        else {
            alert("홍삼 만들기에 실패했습니다.");
        }    
    }
    checkGame();
}

function sellRedGinseng() {
    if(redGinseng <= 0) alert("판매할 홍삼이 없습니다.");
    else {
        redGinseng -= 1;
        document.getElementById("redGinseng").innerHTML = redGinseng;
        money += 100;
        document.getElementById("money").innerHTML = money;
    }
}

function checkStage() {
    if(redGinseng >= RG_To_Next) {
        redGinseng -= RG_To_Next;
        document.getElementById("redGinseng").innerHTML = redGinseng;
        stageClear();
    }
    else alert("다음 스테이지로 넘어가기 위한 홍삼이 부족합니다.");
}

function stageClear() {
    stage++;
    document.getElementById("stage").innerHTML = stage;
    RG_To_Next = stage * 5;
    alert("스테이지 클리어! 보너스 +100G");
    money += 100;
    document.getElementById("money").innerHTML = money;
    document.getElementById("info").innerHTML = RG_To_Next;
}