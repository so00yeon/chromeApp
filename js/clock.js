const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 이게 있어야 00:00:00가 안뜸, 초기 1초간 초기화
setInterval(getClock, 1000);

// 5초마다 sayHello 함수를 호출
// setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);

// "1".padStart(2, "0") -> "01"
// "12".padStart(2, "0") -> "12" 무조건 두자리 수가 오고 한자리면 앞에 0으로 시작
