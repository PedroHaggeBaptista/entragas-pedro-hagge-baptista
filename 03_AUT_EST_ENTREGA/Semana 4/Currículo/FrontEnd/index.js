function scrollPageEducation() {
    window.scroll(0, 350)
}

function scrollPageTechnologies() {
    window.scroll(0, 3200)
}

function passRedLight() {
    setTimeout(() => {
        document.getElementById("inner-circle").style.backgroundColor = 'red'
        setTimeout(() => {
            document.getElementById("inner-circle1").style.backgroundColor = 'red'
            setTimeout(() => {
                document.getElementById("inner-circle2").style.backgroundColor = 'red'
                setTimeout(() => {
                    document.getElementById("inner-circle3").style.backgroundColor = 'red'
                    setTimeout(() => {
                        document.getElementById("inner-circle4").style.backgroundColor = 'red'
                        setTimeout(() => {
                            document.getElementById("inner-circle").style.backgroundColor = '#3b82f6'
                            document.getElementById("inner-circle1").style.backgroundColor = '#3b82f6'
                            document.getElementById("inner-circle2").style.backgroundColor = '#3b82f6'
                            document.getElementById("inner-circle3").style.backgroundColor = '#3b82f6'
                            document.getElementById("inner-circle4").style.backgroundColor = '#3b82f6'
                        }, 2000)
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}

setInterval(passRedLight, 14000);