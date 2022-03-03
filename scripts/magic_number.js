let imgView = document.getElementById("imgView")
let imgNo = 0
let ans = 0

let yesNo = document.getElementById("yesNo")

function next(num) {
    switch (imgNo) {
        case 0 :
            imgView.innerHTML = '<img src="../assets/img/magic-num-img/first.jpg" alt="firstChoice">';
            imgNo++;
            if(num === 1) ans += 128
            yesNo.style.visibility = 'visible'
            break;
        case 1 :
            imgView.innerHTML = '<img src="../assets/img/magic-num-img/second.jpg" alt="firstChoice">';
            imgNo++;
            if(num === 1) ans += 64
            break;
        case 2 :
            imgView.innerHTML = '<img src="../assets/img/magic-num-img/third.jpg" alt="firstChoice">';
            imgNo++;
            if(num === 1) ans += 32
            break;
        case 3 :
            imgView.innerHTML = '<img src="../assets/img/magic-num-img/forth.jpg" alt="firstChoice">';
            imgNo++;
            if(num === 1) ans += 16
            break;
        case 4 :
            imgView.innerHTML = '<img src="../assets/img/magic-num-img/fifth.jpg" alt="firstChoice">';
            imgNo++;
            if(num === 1) ans += 8
            break;
        case 5 :
            imgView.innerHTML = '<img src="../assets/img/magic-num-img/sixth.jpg" alt="firstChoice">';
            imgNo++;
            if(num === 1) ans += 4
            break;
        case 6 :
            imgView.innerHTML = '<img src="../assets/img/magic-num-img/seventh.jpg" alt="firstChoice">';
            imgNo++;
            if(num === 1) ans += 2
            break;
        case 7 :
            imgNo++;
            if(num === 1) ans += 1
            result()
            break;
    }
}




function result(){
    if(ans <= 100) imgView.innerHTML = "You were thinking of " + ans
    else imgView.innerHTML = "You made some mistake, try again"
    yesNo.style.visibility = 'hidden'
    yesNo.innerHTML = '<button onclick="replay()"> Play Again </button>'
    yesNo.style.visibility = 'visible'
}

function replay(){
    ans = 0
    imgNo = 0
    imgView.innerHTML = '<h1> Think of a number from 0 to 100 </h1>\n' +
        '        <button onclick="next(0)"> Done! Let\'s Play </button>'
    yesNo.innerHTML = '<h1> Can You find that number here </h1>\n' +
        '        <button onclick="next(1)"> Yes </button>\n' +
        '        <button onclick="next(0)"> No </button>'
    yesNo.style.visibility = 'hidden'
}