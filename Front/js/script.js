//const { Console } = require("console");

let ciudades = []
function loadResultForm() {
    document.querySelector('.section-results').innerHTML = "";
    document.querySelector('.section-options').innerHTML = "";
    let buttonP = document.createElement('button');
    let form = document.querySelector('.section-results')
    buttonP.textContent = "Registar Persona"
    buttonP.classList.add("section-option-p__button");
    buttonP.id = "regPerson"
    buttonP.addEventListener("click", async () => {
        document.querySelector('.section-results').innerHTML = "";
        let spanAplicantes = document.createElement('span')
        spanAplicantes.textContent = "Registrarse como Aplicante"
        spanAplicantes.classList.add("section-results__form-tittle")
        form.appendChild(spanAplicantes)

        let spanNombreA = document.createElement('span')
        spanNombreA.textContent = "Nombre"
        spanNombreA.classList.add("section-results__form")
        form.appendChild(spanNombreA)
        let nameA = document.createElement('input');
        nameA.classList.add("section-results__form");
        nameA.id = "iName"
        form.appendChild(nameA)

        let spanApellidoA = document.createElement('span')
        spanApellidoA.textContent = "Apellido"
        spanApellidoA.classList.add("section-results__form")
        form.appendChild(spanApellidoA)
        let apellidoA = document.createElement('input');
        apellidoA.classList.add("section-results__form");
        apellidoA.id = "iApellido"
        form.appendChild(apellidoA)

        let spanDireccionA = document.createElement('span')
        spanDireccionA.textContent = "Direccion"
        spanDireccionA.classList.add("section-results__form")
        form.appendChild(spanDireccionA)
        let direccionA = document.createElement('input');
        direccionA.classList.add("section-results__form");
        direccionA.id = "iDireccion"
        form.appendChild(direccionA)

        let spanTelefonoA = document.createElement('span')
        spanTelefonoA.textContent = "Telefono"
        spanTelefonoA.classList.add("section-results__form")
        form.appendChild(spanTelefonoA)
        let telefonoA = document.createElement('input');
        telefonoA.classList.add("section-results__form");
        telefonoA.id = "iTelefono"
        form.appendChild(telefonoA)

        let spanCiudadA = document.createElement('span')
        spanCiudadA.textContent = "Ciudad"
        spanCiudadA.classList.add("section-results__form")
        form.appendChild(spanCiudadA)
        const response = await fetch('http://localhost:3000/Ciudades')
        const result = await response.json()
        let ciudad = document.createElement('select');
        ciudad.classList.add("section-results__form");
        ciudad.id = "iCiudad"
        ciudad.innerHTML = "<option>Seleccione la ciudad</option>"
        form.appendChild(ciudad)
        result.forEach(element => {
            let opcionS = document.createElement('option');
            opcionS.classList.add("section-results__form");
            opcionS.id = element.id
            opcionS.textContent = element.ciudad
            ciudad.appendChild(opcionS)
        });

        let spanCarreraA = document.createElement('span')
        spanCarreraA.textContent = "Carrera"
        spanCarreraA.classList.add("section-results__form")
        form.appendChild(spanCarreraA)
        let carreraA = document.createElement('input');
        carreraA.classList.add("section-results__form");
        carreraA.id = "iTelefono"
        form.appendChild(carreraA)

        let spanDocumentoTA = document.createElement('span')
        spanDocumentoTA.textContent = "Tipo de Documento"
        spanDocumentoTA.classList.add("section-results__form")
        form.appendChild(spanDocumentoTA)

        const responseD = await fetch('http://localhost:3000/Documentos')
        const resultD = await responseD.json()
        let documentoS = document.createElement('select');
        documentoS.classList.add("section-results__form");
        documentoS.id = "iDocumento"
        documentoS.innerHTML = "<option>Seleccione el tipo de documento</option>"
        form.appendChild(documentoS)
        resultD.forEach(element => {
            let opcionS = document.createElement('option');
            opcionS.classList.add("section-results__form");
            opcionS.id = element.id_documento
            opcionS.textContent = element.tipo_documento
            documentoS.appendChild(opcionS)
        });

        let spanDocumentoA = document.createElement('span')
        spanDocumentoA.textContent = "N° de Documento"
        spanDocumentoA.classList.add("section-results__form")
        form.appendChild(spanDocumentoA)
        let documentoA = document.createElement('input');
        documentoA.classList.add("section-results__form");
        documentoA.id = "iDocumento"
        form.appendChild(documentoA)

        let spanHabilidadA = document.createElement('span')
        spanHabilidadA.textContent = "Habilidades"
        spanHabilidadA.classList.add("section-results__form")
        form.appendChild(spanHabilidadA)

        const responseH = await fetch('http://localhost:3000/Habilidades')
        const resultH = await responseH.json()
        let habilidad = document.createElement('select');
        habilidad.classList.add("section-results__form");
        habilidad.id = "iHabilidad"
        habilidad.innerHTML = "<option>Seleccione la habilidad</option>"
        form.appendChild(habilidad)
        resultH.forEach(element => {
            let opcionS = document.createElement('option');
            opcionS.classList.add("section-results__form");
            opcionS.id = element.id_habilidad
            opcionS.textContent = element.habilidad
            habilidad.appendChild(opcionS)
        });
        let habilidad2 = document.createElement('select');
        habilidad2.classList.add("section-results__form");
        habilidad2.id = "iHabilidad2"
        habilidad2.innerHTML = "<option>Seleccione la habilidad</option>"
        form.appendChild(habilidad2)
        resultH.forEach(element => {
            let opcionS = document.createElement('option');
            opcionS.classList.add("section-results__form");
            opcionS.id = element.id_habilidad
            opcionS.textContent = element.habilidad
            habilidad2.appendChild(opcionS)
        });
        let habilidad3 = document.createElement('select');
        habilidad3.classList.add("section-results__form");
        habilidad3.id = "iHabilidad3"
        habilidad3.innerHTML = "<option>Seleccione la habilidad</option>"
        form.appendChild(habilidad3)
        resultH.forEach(element => {
            let opcionS = document.createElement('option');
            opcionS.classList.add("section-results__form");
            opcionS.id = element.id_habilidad
            opcionS.textContent = element.habilidad
            habilidad3.appendChild(opcionS)
        });
        let habilidad4 = document.createElement('select');
        habilidad4.classList.add("section-results__form");
        habilidad4.id = "iHabilidad4"
        habilidad4.innerHTML = "<option>Seleccione la habilidad</option>"
        form.appendChild(habilidad4)
        resultH.forEach(element => {
            let opcionS = document.createElement('option');
            opcionS.classList.add("section-results__form");
            opcionS.id = element.id_habilidad
            opcionS.textContent = element.habilidad
            habilidad4.appendChild(opcionS)
        });
        let habilidad5 = document.createElement('select');
        habilidad5.classList.add("section-results__form");
        habilidad5.id = "iHabilidad5"
        habilidad5.innerHTML = "<option>Seleccione la habilidad</option>"
        form.appendChild(habilidad5)
        resultH.forEach(element => {
            let opcionS = document.createElement('option');
            opcionS.classList.add("section-results__form");
            opcionS.id = element.id_habilidad
            opcionS.textContent = element.habilidad
            habilidad5.appendChild(opcionS)
        });

        let spanCorreoA = document.createElement('span')
        spanCorreoA.textContent = "Correo"
        spanCorreoA.classList.add("section-results__form")
        form.appendChild(spanCorreoA)
        let correoA = document.createElement('input');
        correoA.classList.add("section-results__form");
        correoA.id = "iCorreo"
        form.appendChild(correoA)

        let spanValorHoraA = document.createElement('span')
        spanValorHoraA.textContent = "Valor Hora"
        spanValorHoraA.classList.add("section-results__form")
        form.appendChild(spanValorHoraA)
        let valorHoraA = document.createElement('input');
        valorHoraA.classList.add("section-results__form");
        valorHoraA.id = "iValorHora"
        form.appendChild(valorHoraA)

        let button = document.createElement('button');
        button.textContent = "Registar Aspirante"
        button.classList.add("section-results__form");
        button.addEventListener("click", async () => {

            const myArray = new BigUint64Array(1);
            let Sname = document.getElementById('iName').value
            var now = new Date();
            let codeSession = Sname.slice(0, 8) + "+" + crypto.getRandomValues(myArray) + "" + now.getFullYear() + "" + (now.getMonth() + 1) + "" + now.getDate()
            let productid = document.getElementById('iCiudad')
            let CityId = productid.options[productid.selectedIndex].id
            let H1 = habilidad.options[habilidad.selectedIndex].id
            let H2 = habilidad2.options[habilidad2.selectedIndex].id
            let H3 = habilidad3.options[habilidad3.selectedIndex].id
            let H4 = habilidad4.options[habilidad4.selectedIndex].id
            let H5 = habilidad5.options[habilidad5.selectedIndex].id
            let doc = documentoS.options[documentoS.selectedIndex].id
            let usuariodef = nameA.value.slice(0, 8) + "" + crypto.getRandomValues(myArray);
            let usuario = usuariodef.slice(0, 10);
            let contraseña = usuariodef.slice(0, 10);
            var infoSend = {
                nombre: nameA.value,
                apellido: apellidoA.value,
                direccion: direccionA.value,
                telefono: telefonoA.value,
                carrera: carreraA.value,
                ciudad_id: CityId,
                doucumento: documentoA.value,
                documento_id: doc,
                habilidad1_id: H1,
                habilidad2_id: H2,
                habilidad3_id: H3,
                habilidad4_id: H4,
                habilidad5_id: H5,
                correo: correoA.value,
                session_code: codeSession,
                valor_hora: valorHoraA.value,
                usuario: usuario,
                contraseña: contraseña
            }
            console.log(infoSend);
            const response = await fetch('http://localhost:3000/CrearAspirante', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(infoSend)
            })
        })
        form.appendChild(button)

    })
    document.querySelector(".section-option-p").appendChild(buttonP)

    let buttonE = document.createElement('button');
    buttonE.textContent = "Registar Empresa"
    buttonE.classList.add("section-option-p__button");
    buttonE.addEventListener("click", async () => {
        document.querySelector('.section-results').innerHTML = "";
        let spanAplicantes = document.createElement('span')
        spanAplicantes.textContent = "Registrarse como Empresa"
        spanAplicantes.classList.add("section-results__form-tittle")
        form.appendChild(spanAplicantes)

        let spanNombreE = document.createElement('span')
        spanNombreE.textContent = "Nombre"
        spanNombreE.classList.add("section-results__form")
        form.appendChild(spanNombreE)
        let nameE = document.createElement('input');
        nameE.classList.add("section-results__form");
        nameE.id = "iName"
        form.appendChild(nameE)

        let spanDireccionE = document.createElement('span')
        spanDireccionE.textContent = "Direccion"
        spanDireccionE.classList.add("section-results__form")
        form.appendChild(spanDireccionE)
        let direccionE = document.createElement('input');
        direccionE.classList.add("section-results__form");
        direccionE.id = "iDireccion"
        form.appendChild(direccionE)

        let spanTelefonoE = document.createElement('span')
        spanTelefonoE.textContent = "Telefono"
        spanTelefonoE.classList.add("section-results__form")
        form.appendChild(spanTelefonoE)
        let telefonoE = document.createElement('input');
        telefonoE.classList.add("section-results__form");
        telefonoE.id = "iTelefono"
        form.appendChild(telefonoE)

        let spanCiudadE = document.createElement('span')
        spanCiudadE.textContent = "Ciudad"
        spanCiudadE.classList.add("section-results__form")
        form.appendChild(spanCiudadE)
        const response = await fetch('http://localhost:3000/Ciudades')
        const result = await response.json()
        let ciudad = document.createElement('select');
        ciudad.classList.add("section-results__form");
        ciudad.id = "iCiudad"
        ciudad.innerHTML = "<option>Seleccione la ciudad</option>"
        form.appendChild(ciudad)
        result.forEach(element => {
            let opcionS = document.createElement('option');
            opcionS.classList.add("section-results__form");
            opcionS.id = element.id
            opcionS.textContent = element.ciudad
            ciudad.appendChild(opcionS)
        });

        let spanSectorE = document.createElement('span')
        spanSectorE.textContent = "Carrera"
        spanSectorE.classList.add("section-results__form")
        form.appendChild(spanSectorE)
        let SectorE = document.createElement('input');
        SectorE.classList.add("section-results__form");
        SectorE.id = "iTelefono"
        form.appendChild(SectorE)

        let spanDocumentoTE = document.createElement('span')
        spanDocumentoTE.textContent = "Tipo de Documento"
        spanDocumentoTE.classList.add("section-results__form")
        form.appendChild(spanDocumentoTE)

        const responseD = await fetch('http://localhost:3000/Documentos')
        const resultD = await responseD.json()
        let documentoS = document.createElement('select');
        documentoS.classList.add("section-results__form");
        documentoS.id = "iDocumento"
        documentoS.innerHTML = "<option>Seleccione el tipo de documento</option>"
        form.appendChild(documentoS)
        resultD.forEach(element => {
            let opcionS = document.createElement('option');
            opcionS.classList.add("section-results__form");
            opcionS.id = element.id_documento
            opcionS.textContent = element.tipo_documento
            documentoS.appendChild(opcionS)
        });

        let spanDocumentoE = document.createElement('span')
        spanDocumentoE.textContent = "N° de Documento"
        spanDocumentoE.classList.add("section-results__form")
        form.appendChild(spanDocumentoE)
        let documentoE = document.createElement('input');
        documentoE.classList.add("section-results__form");
        documentoE.id = "iDocumento"
        form.appendChild(documentoE)


        let spanCorreoE = document.createElement('span')
        spanCorreoE.textContent = "Correo"
        spanCorreoE.classList.add("section-results__form")
        form.appendChild(spanCorreoE)
        let correoE = document.createElement('input');
        correoE.classList.add("section-results__form");
        correoE.id = "iCorreo"
        form.appendChild(correoE)

        let button = document.createElement('button');
        button.textContent = "Registar Aspirante"
        button.classList.add("section-results__form");
        button.addEventListener("click", async () => {

            const myArray = new BigUint64Array(1);
            let Sname = document.getElementById('iName').value
            var now = new Date();
            let codeSession = Sname.slice(0, 8) + "" + crypto.getRandomValues(myArray) + "" + now.getFullYear() + "" + (now.getMonth() + 1) + "" + now.getDate()
            let productid = document.getElementById('iCiudad')
            let CityId = productid.options[productid.selectedIndex].id
            let doc = documentoS.options[documentoS.selectedIndex].id
            let usuariodef = nameE.value.slice(0, 8) + "" + crypto.getRandomValues(myArray);
            let usuario = usuariodef.slice(0, 10);
            let contraseña = usuariodef.slice(0, 10);
            var infoSend = {
                nombre: nameE.value,
                direccion: direccionE.value,
                telefono: telefonoE.value,
                sector: SectorE.value,
                ciudad_id: CityId,
                documento: documentoE.value,
                documento_id: doc,
                correo: correoE.value,
                session_code: codeSession,
                usuario: usuario,
                contraseña: contraseña
            }
            console.log(infoSend);
            const response = await fetch('http://localhost:3000/CrearEmpresa', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(infoSend)
            })
        })
        form.appendChild(button)

    })
    document.querySelector(".section-option-p").appendChild(buttonE)

}

function iniciarSession() {
    let usuarioE = ""
    document.querySelector('.section-results').innerHTML = "";
    document.querySelector('.section-options').innerHTML = "";
    let sectionLog = document.createElement('section')
    sectionLog.classList.add('form_login')

    let form = document.querySelector('.section-results')
    let spanUsuarioA = document.createElement('span')
    spanUsuarioA.textContent = "Usuario"
    spanUsuarioA.classList.add("section-results__form")
    sectionLog.appendChild(spanUsuarioA)
    let usuario = document.createElement('input');
    usuario.classList.add("section-results__form");
    usuario.id = "iUsuario"
    sectionLog.appendChild(usuario)

    let spanContraseñaA = document.createElement('span')
    spanContraseñaA.textContent = "Contraseña"
    spanContraseñaA.classList.add("section-results__form")
    sectionLog.appendChild(spanContraseñaA)
    let contraseñaA = document.createElement('input');
    contraseñaA.classList.add("section-results__form");
    contraseñaA.id = "iContraseña"
    sectionLog.appendChild(contraseñaA)

    let contraseñaB = document.createElement('button');
    contraseñaB.classList.add("section-results__form");
    contraseñaB.id = "iButtonPwd"
    contraseñaB.textContent = "Iniciar sesion"
    contraseñaB.classList.add("section-results__form");
    contraseñaB.addEventListener("click", async () => {
        const response = await fetch(`http://localhost:3000/IniciarSession/${usuario.value}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(infoSend)
        })
        const data = await response.json()
        const dataA = data[0]

        if (dataA.contraseña == contraseñaA.value) {
            console.log('Inicio de sesion exitoso')
            document.querySelector('.section-results').innerHTML = "";
            document.querySelector('.section-options').innerHTML = "";

            if (dataA.tipo_id == 2) {
                usuarioE = dataA.code_session
                let sectionbuttons = document.createElement('section')
                sectionbuttons.classList.add('sectionbuttons')

                let spanSearchA = document.createElement('button')
                spanSearchA.textContent = "Buscar Aspirante"
                spanSearchA.id = "searchAspirante"
                spanSearchA.classList.add("section-options__form")
                spanSearchA.addEventListener("click", async () => {
                    let sectionPrincipal = document.querySelector('.section-principal');
                    if (sectionPrincipal) {
                        sectionPrincipal.remove();
                    }


                    const response = await fetch('http://localhost:3000/Aspirantes/', {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        //body: JSON.stringify(infoSend)
                    })
                    const data = await response.json()
                    //const rta=''
                    console.log(data)
                    let cont = 0
                    let sectionP = document.createElement('section')
                    sectionP.classList.add('section-principal')
                    data.forEach(() => {
                        let sectionC = document.createElement('section')
                        sectionC.classList.add('section-card')
                        sectionC.id = data[cont].session_code

                        let img = document.createElement('img')
                        img.classList.add("section-card__img")
                        img.setAttribute("src", `../Front/images/${cont + 1}.jpg`)
                        sectionC.appendChild(img)
                        let textBox = document.createElement('p')
                        textBox.classList.add("section-card__txt")
                        textBox.innerHTML = `<span>Nombre: ${data[cont].nombre} Apellido: ${data[cont].apellido}</span>
                        <span>Telefono: ${data[cont].telefono} Ciudad: ${data[cont].ciudad} Carrera: ${data[cont].carrera}</span>                     
                        <span>Habilidades:${data[cont].habilidad1_id}, ${data[cont].habilidad2_id}, ${data[cont].habilidad3_id}, ${data[cont].habilidad4_id}, ${data[cont].habilidad5_id}. </span>`
                        sectionC.appendChild(textBox)
                        //console.log(data[cont].nombre)
                        let buttonOK = document.createElement('button');
                        buttonOK.textContent = "✔"
                        buttonOK.classList.add("section-card__button-c");
                        buttonOK.id = "iConfirm" + data[cont].session_code
                        buttonOK.addEventListener("click", async () => {
                            let cadena = buttonOK.id
                            let cadena2 = cadena.slice(8, cadena.length)
                            //APLICANTE
                            const responseAs = await fetch(`http://localhost:3000/CargarUsuario/${cadena2}`, {
                                method: "GET",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                //body: JSON.stringify(infoSend)
                            })
                            const data = await responseAs.json()
                            const aplicante = data[0]
                            //info aplicante
                            const responseES = await fetch(`http://localhost:3000/CargarUsuario/${usuarioE}`, {
                                method: "GET",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                //body: JSON.stringify(infoSend)
                            })
                            const data2 = await responseES.json()
                            const empresa = data2[0]

                            var now = new Date();
                            let date = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()

                            var infoSend = {
                                mensaje: `Hola Sr(a). ${aplicante.nombre} ${aplicante.apellido} somos ${empresa.nombre}, nos gustaria adquirir tus serivicios, para nuestra compañia.`,
                                code_chat: `${empresa.session_code}_${aplicante.session_code}`,
                                session_e: empresa.session_code,
                                session_a: aplicante.session_code,
                                fecha: date,
                            }
                            console.log(infoSend);
                            const response = await fetch('http://localhost:3000/Chats/', {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(infoSend)
                            })
                        })
                        sectionC.appendChild(buttonOK)
                        let buttonREC = document.createElement('button');
                        buttonREC.textContent = "X"
                        buttonREC.classList.add("section-card__button-r");
                        buttonREC.id = "iRec" + data[cont].session_code
                        buttonREC.addEventListener("click", () => {
                            let cadena = buttonOK.id
                            let cadena2 = cadena.slice(8, cadena.length)
                            document.getElementById(cadena2).remove()
                        })
                        sectionC.appendChild(buttonREC)
                        cont++
                        sectionP.appendChild(sectionC)

                    })
                    form.appendChild(sectionP)

                })
                sectionbuttons.appendChild(spanSearchA)

                let spanChatA = document.createElement('button')
                spanChatA.textContent = "Chats"
                spanChatA.addEventListener("click", async () => {
                    let sectionPrincipal = document.querySelector('.section-principal');
                    if (sectionPrincipal) {
                        sectionPrincipal.remove();
                    }
                    const response = await fetch(`http://localhost:3000/ConsultarChats/${usuarioE}`, {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        //body: JSON.stringify(infoSend)
                    })
                    const data = await response.json()
                    //const rta=''
                    console.log(data)
                    let cont = 0
                    let sectionP = document.createElement('section')
                    sectionP.classList.add('section-principal')
                    let sectionS = document.createElement('section')
                    sectionS.classList.add('section-chats')
                    for (let item of data) {

                        //   data.forEach(async element  => {

                        const response2 = await fetch(`http://localhost:3000/AspirantesID/${data[cont].sesion_a}`, {
                            method: "GET",
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        const dataR = await response2.json()
                        //console.log(data2)
                        const aspirante = dataR[0]
                        let sectionC = document.createElement('section')
                        sectionC.classList.add('section-card')
                        sectionC.id = aspirante.session_code

                        let nameAsp = document.createElement('button')
                        nameAsp.classList.add("section-card__span")
                        nameAsp.textContent = aspirante.nombre + " " + aspirante.apellido
                        nameAsp.addEventListener("click", () => {

                            let v2 = document.getElementById('boxChat')

                            if (v2) {
                                v2.remove()
                            }

                            let sectionC2 = document.createElement('section')
                            sectionC2.classList.add('section-message')
                            sectionC2.id = 'boxChat'

                            let spamtest = document.createElement('span')
                            let text=item.message.split('/n').join('<br>')
                            spamtest.innerHTML = `<p>${text} </p>`                            
                            spamtest.classList.add('section-message')
                            sectionC2.appendChild(spamtest)

                            let inputText = document.createElement('textarea')
                            inputText.placeholder = "Escribe el mensaje"
                            inputText.id = 'TextChat'
                            sectionC2.appendChild(inputText)

                            let sectionC3 = document.createElement('section')
                            sectionC3.classList.add('section-message__button')                            

                            let inputBTN = document.createElement('button')
                            inputBTN.textContent = "Enviar nuevo mensaje"
                            inputBTN.id = 'btnInput'
                            inputBTN.addEventListener("click", async () => {
                                var now = new Date();
                                let date = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()

                                var infoSend = {
                                    mensaje: inputText.value,
                                    code_chat: `${usuarioE}_${aspirante.session_code}`,
                                    session_e: usuarioE,
                                    session_a: aspirante.session_code,
                                    fecha: date,
                                }                
                                const response = await fetch(`http://localhost:3000/ModificarChats/${usuarioE}_${aspirante.session_code}`, {
                                    method: "POST",
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(infoSend)
                                })
                            })
                            sectionC3.appendChild(inputBTN)
                            let inputBTN2 = document.createElement('button')
                            inputBTN2.textContent = "Crear Contrato"
                            inputBTN2.id = 'btnInput2'
                            inputBTN2.addEventListener("click", async () => {                                
                                let sectionCont =document.createElement('section')
                                sectionCont.classList.add('section-contrato')
                                
                                let principal = document.querySelector('.section-message')
                                principal.innerHTML = ""

                                const respuesta = await fetch(`http://localhost:3000/ConsultarEmpresas/${usuarioE}`, {
                                    method: "GET",
                                    headers: {
                                        'Content-Type': 'application/json'
                                    }
                                })
                                const empresa = await respuesta.json()
                                const infoEmpresa = empresa[0]
                                var now = new Date();
                                let date = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
                                let contratoElement = document.createElement('p');                                
                                contratoElement.innerHTML = `CONTRATO DE PRESTACIÓN DE SERVICIOS <br> ENTRE ${infoEmpresa.nombre}, con domicilio en ${infoEmpresa.direccion}, en adelante denominado "EL CONTRATANTE", por una parte, y ${aspirante.nombre} ${aspirante.apellido}, con domicilio en ${aspirante.direccion}, en adelante denominado "EL CONTRATISTA", por la otra parte,<br> ACUERDAN LO SIGUIENTE:<br> 1. OBJETO: EL CONTRATISTA se compromete a prestar sus servicios a EL CONTRATANTE, los cuales consistirán en <input type='text' id='funciones'> y se realizaran en la ubicacion <input type='text' id='ubicacion'>.<br> 2. DURACIÓN: Este contrato tendrá una duración de <input type='number' id='TiempoContrato'> horas, comenzando el <input type='datetime-local' id='fechaInicial'>.<br> 3. PAGO: Por los servicios prestados, EL CONTRATANTE pagará a EL CONTRATISTA la suma de $ ${aspirante.valor_hora} a pagar en efectivo o transferencia por cada hora laborada.<br> 4. CONFIDENCIALIDAD: EL CONTRATISTA se compromete a mantener en confidencialidad toda la información que reciba de EL CONTRATANTE durante la vigencia de este contrato.<br> 5. TERMINACIÓN: Cualquiera de las partes puede terminar este contrato con un preaviso por escrito de 7 dias.<br> Firmado en ${infoEmpresa.ciudad_id} el ${date},<br> Contratante: ${infoEmpresa.nombre}    Contratista: ${aspirante.nombre}`;
                                sectionCont.appendChild(contratoElement)

                                let inputBTN3 = document.createElement('button')
                                inputBTN3.textContent = "Enviar Borrador Contrato"
                                inputBTN3.id = 'btnInput3'
                                inputBTN3.addEventListener("click", async () => {

                                    const myArray = new BigUint64Array(1);
                                    let codeContrato = crypto.getRandomValues(myArray)
                                    var infoSend = {

                                        ubicacion: document.getElementById('ubicacion').value,
                                        tiempo: document.getElementById('TiempoContrato').value,
                                        fecha_inicio: document.getElementById('fechaInicial').value,
                                        comentarios_finales: '',
                                        session_a: aspirante.session_code,
                                        session_e: infoEmpresa.session_code,
                                        ciudad: infoEmpresa.ciudad_id,
                                        estado_code: 1,
                                        funciones: document.getElementById('funciones').value,
                                    }                            
                                    const response = await fetch(`http://localhost:3000/CrearContrato/`, {
                                        method: "POST",
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(infoSend)
                                    })

                                })
                                sectionCont.appendChild(inputBTN3)
                                principal.appendChild(sectionCont)
                            })

                            sectionC3.appendChild(inputBTN2)
                            sectionC2.appendChild(sectionC3)                            
                            sectionP.appendChild(sectionC2)
                            sectionP.appendChild(sectionS)
                        })
                        sectionC.appendChild(nameAsp)
                        cont++
                        sectionS.appendChild(sectionC)
                        sectionP.appendChild(sectionS)
                    }
                    form.appendChild(sectionP)
                })
                spanChatA.classList.add("section-options__form")
                sectionbuttons.appendChild(spanChatA)

                let spanContratosA = document.createElement('button')
                spanContratosA.textContent = "Contratos"
                spanContratosA.classList.add("section-options__form")
                spanContratosA.addEventListener("click", async () => {
                    let sectionPrincipal = document.querySelector('.section-principal');
                    if (sectionPrincipal) {
                        sectionPrincipal.remove();
                    }
                    const response = await fetch(`http://localhost:3000/ConsultarContratos/${usuarioE}`, {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    const data = await response.json()
                    console.log(data)
                    let cont = 0
                    let sectionP = document.createElement('section')
                    sectionP.classList.add('section-principal')
                    for (let item of data) {

                        const response2 = await fetch(`http://localhost:3000/AspirantesID/${data[cont].session_a}`, {
                            method: "GET",
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        const dataR = await response2.json()                        
                        const aspirante = dataR[0]

                        let sectionC = document.createElement('section')
                        sectionC.classList.add('section-card')
                        sectionC.id = aspirante.session_code

                        let nameAsp = document.createElement('button')
                        nameAsp.classList.add("section-card__span")
                        nameAsp.textContent = aspirante.nombre + " " + aspirante.apellido
                        nameAsp.addEventListener("click", async () => {
                            const respuesta = await fetch(`http://localhost:3000/ConsultarEmpresas/${usuarioE}`, {
                                method: "GET",
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                            const empresa = await respuesta.json()
                            const infoEmpresa = empresa[0]
                            var now = new Date();
                            let date = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
                            let contratoElement = document.createElement('p');                            
                            contratoElement.innerHTML = `CONTRATO DE PRESTACIÓN DE SERVICIOS\n
                            ENTRE ${infoEmpresa.nombre}, con domicilio en ${infoEmpresa.direccion}, en adelante denominado "EL CONTRATANTE", por una parte,                            
                            y ${aspirante.nombre} ${aspirante.apellido}, con domicilio en ${aspirante.direccion}, en adelante denominado "EL CONTRATISTA", por la otra parte,\n                            
                            ACUERDAN LO SIGUIENTE:\n                            
                            1. OBJETO: EL CONTRATISTA se compromete a prestar sus servicios a EL CONTRATANTE, los cuales consistirán en ${item.funciones} y se realizaran en la ubicacion ${item.ubicacion}.\n                            
                            2. DURACIÓN: Este contrato tendrá una duración de ${item.tiempo}, comenzando el ${item.fecha_inicio}.\n                            
                            3. PAGO: Por los servicios prestados, EL CONTRATANTE pagará a EL CONTRATISTA la suma de $ ${aspirante.valor_hora} a pagar en efectivo o transferencia por cada hora laborada.\n                            
                            4. CONFIDENCIALIDAD: EL CONTRATISTA se compromete a mantener en confidencialidad toda la información que reciba de EL CONTRATANTE durante la vigencia de este contrato.\n                            
                            5. TERMINACIÓN: Cualquiera de las partes puede terminar este contrato con un preaviso por escrito de 7 dias.\n                            
                            Firmado en ${infoEmpresa.ciudad_id} el ${date},\n                                                        
                            Contratante: ${infoEmpresa.nombre}    Contratista: ${aspirante.nombre}\n`;
                            document.querySelector('.section-principal').appendChild(contratoElement)
                            console.log(contratoElement)
                            if (item.estado_code == 2) {
                                let inputACT = document.createElement('button')
                                inputACT.textContent = "Iniciar Contrato"
                                inputACT.id = 'btnInputStart'
                                inputACT.addEventListener("click", async () => {

                                    var infoSendC = {
                                        id: item.id_contrato,
                                        comentarioF: '',
                                        estado_code: 3
                                    }
                                    console.log(infoSendC);
                                    const response = await fetch(`http://localhost:3000/ActualizarContrato/`, {
                                        method: "POST",
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(infoSendC)
                                    })

                                })
                                document.querySelector('.section-principal').appendChild(inputACT)
                            } else if (item.estado_code == 3) {
                                let inputComments = document.createElement('textarea')
                                inputComments.id = 'iComments'
                                document.querySelector('.section-principal').appendChild(inputComments)

                                let inputACT = document.createElement('button')
                                inputACT.textContent = "Finalizar Contrato"
                                inputACT.id = 'btnInputAC'
                                inputACT.addEventListener("click", async () => {

                                    var infoSendC = {
                                        id: item.id_contrato,
                                        comentarioF: document.getElementById('iComments').value,
                                        estado_code: 4
                                    }
                                    console.log(infoSendC);
                                    const response = await fetch(`http://localhost:3000/ActualizarContrato/`, {
                                        method: "POST",
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(infoSendC)
                                    })

                                })
                                document.querySelector('.section-principal').appendChild(inputACT)

                            }


                        })
                        sectionC.appendChild(nameAsp)

                        cont++
                        sectionP.appendChild(sectionC)
                    }
                    form.appendChild(sectionP)
                })
                sectionbuttons.appendChild(spanContratosA)
                form.appendChild(sectionbuttons)



            } else if (dataA.tipo_id == 1) {
                usuarioE = dataA.code_session
                let spanChatA = document.createElement('button')
                spanChatA.textContent = "Chats"
                spanChatA.addEventListener("click", async () => {
                    let sectionPrincipal = document.querySelector('.section-principal');
                    if (sectionPrincipal) {
                        sectionPrincipal.remove();
                    }
                    const response = await fetch(`http://localhost:3000/ConsultarChats/${usuarioE}`, {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                    const data = await response.json()
                    console.log(data)
                    let cont = 0
                    let sectionP = document.createElement('section')
                    sectionP.classList.add('section-principal')
                    for (let item of data) {
                        console.log(data[cont].sesion_e)
                        const response2 = await fetch(`http://localhost:3000/ConsultarEmpresas/${data[cont].sesion_e}`, {
                            method: "GET",
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        const dataR = await response2.json()
                        console.log("info empresa")
                        console.log(dataR)
                        const empresa = dataR[0]
                        let sectionC = document.createElement('section')
                        sectionC.classList.add('section-card')
                        sectionC.id = empresa.session_code

                        let nameAsp = document.createElement('button')
                        nameAsp.classList.add("section-card__span")
                        nameAsp.textContent = empresa.nombre
                        nameAsp.addEventListener("click", () => {

                            let v2 = document.getElementById('boxChat')

                            if (v2) {
                                v2.remove()
                            }

                            let sectionC2 = document.createElement('section')
                            sectionC2.classList.add('section-message')
                            sectionC2.id = 'boxChat'

                            let spamtest = document.createElement('span')
                            let text=item.message.split('/n').join('<br>')
                            spamtest.innerHTML = `<p>${text} </p>`                                                                
                            spamtest.classList.add('section-message')
                            sectionC2.appendChild(spamtest)

                            let inputText = document.createElement('textarea')
                            inputText.placeholder = "Escribe el mensaje"
                            inputText.id = 'TextChat'
                            sectionC2.appendChild(inputText)

                            let inputBTN = document.createElement('button')
                            inputBTN.textContent = "Enviar nuevo mensaje"
                            inputBTN.id = 'btnInput'
                            inputBTN.addEventListener("click", async () => {
                                var now = new Date();
                                let date = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()

                                var infoSend = {
                                    mensaje: inputText.value,
                                    code_chat: `${empresa.session_code}_${usuarioE}`,
                                    session_e: usuarioE,
                                    session_a: empresa.session_code,
                                    fecha: date,
                                }
                                console.log(infoSend);
                                const response = await fetch(`http://localhost:3000/ModificarChats/${empresa.session_code}_${usuarioE}`, {
                                    method: "POST",
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(infoSend)
                                })
                            })
                            sectionC2.appendChild(inputBTN)
                            sectionP.appendChild(sectionC2)
                        })
                        sectionC.appendChild(nameAsp)
                        cont++
                        sectionP.appendChild(sectionC)
                    }
                    form.appendChild(sectionP)
                })
                spanChatA.classList.add("section-options__form")
                form.appendChild(spanChatA)

                let spanContratosA = document.createElement('button')
                spanContratosA.textContent = "Contratos"
                spanContratosA.classList.add("section-options__form")
                spanContratosA.addEventListener("click", async () => {
                    let sectionPrincipal = document.querySelector('.section-principal');
                    if (sectionPrincipal) {
                        sectionPrincipal.remove();
                    }
                    console.log("CONSULTAR CONTRATOS")
                    console.log(usuarioE)
                    const response = await fetch(`http://localhost:3000/ConsultarContratos/${usuarioE}`, {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    const data = await response.json()
                    console.log(data)
                    let cont = 0
                    let sectionP = document.createElement('section')
                    sectionP.classList.add('section-principal')
                    for (let item of data) {

                        const response2 = await fetch(`http://localhost:3000/ConsultarEmpresas/${data[cont].session_e}`, {
                            method: "GET",
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        const dataR = await response2.json()
                        const empresa = dataR[0]

                        let sectionC = document.createElement('section')
                        sectionC.classList.add('section-card')
                        sectionC.id = empresa.session_code

                        let nameAsp = document.createElement('button')
                        nameAsp.classList.add("section-card__span")
                        nameAsp.textContent = empresa.nombre
                        nameAsp.addEventListener("click", async () => {
                            const respuestaA = await fetch(`http://localhost:3000/AspirantesID/${usuarioE}`, {
                                method: "GET",
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                            const aspirantes = await respuestaA.json()
                            const aspirante = aspirantes[0]
                            var now = new Date();
                            let date = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
                            let contratoElement = document.createElement('p');                                                        
                            contratoElement.innerHTML = `CONTRATO DE PRESTACIÓN DE SERVICIOS\n
                            ENTRE ${empresa.nombre}, con domicilio en ${empresa.direccion}, en adelante denominado "EL CONTRATANTE", por una parte,                            
                            y ${aspirante.nombre} ${aspirante.apellido}, con domicilio en ${aspirante.direccion}, en adelante denominado "EL CONTRATISTA", por la otra parte,\n                            
                            ACUERDAN LO SIGUIENTE:\n                            
                            1. OBJETO: EL CONTRATISTA se compromete a prestar sus servicios a EL CONTRATANTE, los cuales consistirán en ${item.funciones} y se realizaran en la ubicacion ${item.ubicacion}.\n                            
                            2. DURACIÓN: Este contrato tendrá una duración de ${item.tiempo}, comenzando el ${item.fecha_inicio}.\n                            
                            3. PAGO: Por los servicios prestados, EL CONTRATANTE pagará a EL CONTRATISTA la suma de $ ${aspirante.valor_hora} a pagar en efectivo o transferencia por cada hora laborada.\n                            
                            4. CONFIDENCIALIDAD: EL CONTRATISTA se compromete a mantener en confidencialidad toda la información que reciba de EL CONTRATANTE durante la vigencia de este contrato.\n                            
                            5. TERMINACIÓN: Cualquiera de las partes puede terminar este contrato con un preaviso por escrito de 7 dias.\n                            
                            Firmado en ${empresa.ciudad_id} el ${date},\n                                                        
                            Contratante: ${empresa.nombre}    Contratista: ${aspirante.nombre}\n`;
                            document.querySelector('.section-principal').appendChild(contratoElement)
                            let inputACT = document.createElement('button')
                            inputACT.textContent = "Aprobar Contrato"
                            inputACT.id = 'btnInputAC'
                            inputACT.addEventListener("click", async () => {

                                var infoSendC = {
                                    id: item.id_contrato,
                                    comentarioF: '',
                                    estado_code: 2
                                }
                                console.log(infoSendC);
                                const response = await fetch(`http://localhost:3000/ActualizarContrato/`, {
                                    method: "POST",
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(infoSendC)
                                })

                            })
                            document.querySelector('.section-principal').appendChild(inputACT)

                        })
                        sectionC.appendChild(nameAsp)

                        cont++
                        sectionP.appendChild(sectionC)
                    }
                    form.appendChild(sectionP)
                })
                form.appendChild(spanContratosA)
            }

        } else {
            console.log('Inicio de sesion fallido')
        }
    })

    sectionLog.appendChild(contraseñaB)
    form.appendChild(sectionLog)

}

let loadResultPerson = document.getElementById('register-person')
loadResultPerson.addEventListener("click", loadResultForm)


let loginPerson = document.getElementById('login-person')
loginPerson.addEventListener("click", iniciarSession)