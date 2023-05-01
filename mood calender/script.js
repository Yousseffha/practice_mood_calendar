let days = document.querySelectorAll("#days-nums li")
let happy = document.getElementById("happy")
let angry = document.getElementById("angry")


happy.onclick = function() {
    happy.classList.toggle("selected")
    angry.classList.remove("selected")
    happy.style.border = "3px solid"
    angry.style.border = "none"
    angry.style.transform = "scale(1)"
    if(happy.classList.contains("selected")) {
        happy.style.transform = "scale(1.2)"
        days.forEach((e) => {
            e.onclick = function() {
                e.style.background = "green"
            }
        })
    }else {
        days.forEach((e) => {
            happy.style.transform = "scale(1)"
            happy.style.border = "none"
            e.onclick = function() {
                e.style.background = "#888888"
            }
        })
    }
}

angry.onclick = function() {
    angry.classList.toggle("selected")
    happy.classList.remove("selected")
    angry.style.border = "3px solid"
    happy.style.border = "none"
    happy.style.transform = ("scale(1)")
    if(angry.classList.contains("selected")) {
        angry.style.transform = "scale(1.2)"
        days.forEach((e) => {
            e.onclick = function() {
                e.style.background = "red"
            }
        })
    }else {
        angry.style.transform = "scale(1)"
        angry.style.border = "none"
        days.forEach((e) => {
            e.onclick = function() {
                e.style.background = "#888888"
            }
        })
    }
}