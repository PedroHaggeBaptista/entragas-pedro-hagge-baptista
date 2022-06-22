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

function sendInfos() {
    $.ajax({
        url: "http://localhost:3001/postContact",
        type: "POST",
        data: {
            "email": $("#emailContato").val(),
            "name": $("#nomeContato").val(),
            "message": $("#mensagemContato").val()
        },
        success: function(resul) { 
            console.log(resul)
            alert('Enviado com sucesso')
        }
    })
}

function verifyInfos() {
    $.ajax({
        url: "http://localhost:3001/getContact",
        type: "GET",
        success: function(resul) { 
            console.log(resul)
            resul.map((contact) => {
                document.getElementById('infosContacts').innerHTML += `
                    <div>
                        <h1>${contact.name}</h1>
                        <p>${contact.message}</p>
                    </div>
                `
            })
        }
    })
}

function deleteInfos() {
    $.ajax({
        url: "http://localhost:3001/removeContact",
        type: "DELETE",
        data: {
            "email": $("#emailContato").val(),
        },
        success: function(resul) {
            console.log(resul)
            alert("Mensagem deletada com sucesso")
            window.location.reload()
        },
        fail: function(err) {
            console.log(err)
            alert(err)
        },
    })
}

function editInfos() {
    $.ajax({
        url: "http://localhost:3001/updateContact",
        type: "PUT",
        data: {
            "email": $("#emailContato").val(),
            "message": $("#mensagemContato").val()
        },
        success: function(resul) {
            console.log(resul)
            alert("Mensagem atualizada com sucesso")
            window.location.reload()
        },
        fail: function(err) {
            console.log(err)
            alert(err)
        },
    })
}

passRedLight()
setInterval(passRedLight, 14000);