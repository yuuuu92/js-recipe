const button = document.getElementById("button")

button.onclick = function () {
  alert("クリックしたね")
}

// input要素とinputイベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e.key)
}

inputText.oninput = logValue
inputDate.oninput = logValue
