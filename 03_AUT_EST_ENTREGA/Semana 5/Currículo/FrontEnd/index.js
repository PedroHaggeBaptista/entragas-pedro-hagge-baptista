function scrollPageEducation() {
    window.scroll(0, 350)
}

function scrollPageTechnologies() {
    window.scroll(0, 3200)
}

function passRedLight() {
    setTimeout(() => {
        $("#inner-circle").css("background-color", "red");
        setTimeout(() => {
            $("#inner-circle1").css("background-color", "red");
            setTimeout(() => {
                $("#inner-circle2").css("background-color", "red");
                setTimeout(() => {
                    $("#inner-circle3").css("background-color", "red");
                    setTimeout(() => {
                        $("#inner-circle4").css("background-color", "red");
                        setTimeout(() => {
                            $("#inner-circle").css("background-color", "#3b82f6");
                            $("#inner-circle1").css("background-color", "#3b82f6");
                            $("#inner-circle2").css("background-color", "#3b82f6");
                            $("#inner-circle3").css("background-color", "#3b82f6");
                            $("#inner-circle4").css("background-color", "#3b82f6");
                        }, 2000)
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)
}

passRedLight()
setInterval(passRedLight, 14000);