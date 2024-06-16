let lotto_number = prompt("put your favouite number")

document.getElementById("urnumber").innerText = lotto_number

document.getElementById("result").innerHTML = Math.floor(Math.random() * 100)