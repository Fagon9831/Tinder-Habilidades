const { response } = require('express')
const models = require('../models')
const { Op } = require('sequelize')
const holaMundo = (req, res) => {
  res.json({ "hola": "mundo" })
}
//params para el get bodypara el post

//const nombre=req.body.nombe
const CreateCities = async (req, res) => {
  const city = models.Ciudad
  const ciudad_p = req.body.ciudad
  const ciudad = await city.create({
    "ciudad": ciudad_p
  })
  res.json(ciudad)
}

const ConsultCities = async (req, res) => {
  const city = models.Ciudad
  const cities = await city.findAll()
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(cities)
}
const ConsultaDocumentos = async (req, res) => {
  const documento = models.Documento
  const documentos = await documento.findAll()
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(documentos)
}

const ConsultaHabilidades = async (req, res) => {
  const habilidad = models.Habilidad
  const habilidades = await habilidad.findAll()
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(habilidades)
}

const CrearAspirante = async (req, res) => {

  const aplicante = models.Aplicante
  const nombre = req.body.nombre
  const apellido = req.body.apellido
  const direccion = req.body.direccion
  const telefono = req.body.telefono
  const carrera = req.body.carrera
  const ciudad_id = req.body.ciudad_id
  const documento = req.body.doucumento
  const documento_id = req.body.documento_id
  const habilidad_1 = req.body.habilidad1_id
  const habilidad_2 = req.body.habilidad2_id
  const habilidad_3 = req.body.habilidad3_id
  const habilidad_4 = req.body.habilidad4_id
  const habilidad_5 = req.body.habilidad5_id
  const correo = req.body.correo
  const session_code = req.body.session_code
  const valor_hora = req.body.valor_hora
  const usuario = req.body.usuario
  const contraseña = req.body.contraseña
  const session = models.Session
  //const myArray = new Uint8Array(1);
  //const usuario=nombre.slice(0, 8) +""+ crypto.getRandomValues(myArray)
  const sessionC = await session.create({
    "usuario": usuario,
    "contraseña": contraseña,
    "code_session": session_code,
    "tipo_id": 1,

  })
  // res.json(sessionC)
  //--

  const aspirante = await aplicante.create({
    "nombre": nombre,
    "apellido": apellido,
    "direccion": direccion,
    "telefono": telefono,
    "carrera": carrera,
    "ciudad_id": ciudad_id,
    "documento": documento,
    "documento_id": documento_id,
    "habilidad1_id": habilidad_1,
    "habilidad2_id": habilidad_2,
    "habilidad3_id": habilidad_3,
    "habilidad4_id": habilidad_4,
    "habilidad5_id": habilidad_5,
    "correo": correo,
    "session_code": session_code,
    "valor_hora": valor_hora
  })
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(aspirante)
}


const CrearEmpresa = async (req, res) => {

  let {
    nombre,        
    direccion,    
    telefono,    
    sector,
    ciudad_id,
    documento,
    documento_id,
    correo,
    session_code,
    usuario,
    contraseña
    } = req.body//const myArray = new Uint8Array(1);
  //const usuario=nombre.slice(0, 8) +""+ crypto.getRandomValues(myArray)
  const session = models.Session
  const sessionC = await session.create({
    "usuario": usuario,
    "contraseña": contraseña,
    "code_session": session_code,
    "tipo_id": 2,

  })
  // res.json(sessionC)
  //--
  const empresaC = models.Empresa
  const empresa = await empresaC.create({
    "nombre": nombre,    
    "direccion": direccion,
    "telefono": telefono,
    "sector": sector,
    "ciudad_id": ciudad_id,
    "documento": documento,
    "documento_id": documento_id,
    "correo": correo,
    "session_code": session_code,
  })
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(empresa)
}

const iniciarSession = async (req, res) => {
  const sessiones = models.Session
  const usuariop = req.params.user
  const session = await sessiones.findAll({
    where:{
      "usuario":usuariop
    }
  })
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(session)
}

const ConsulAspirantes = async (req, res) => {
  const aplicantes = models.Aplicante
  const aplicante = await aplicantes.findAll()
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(aplicante)
}
const ConsulAspirantesID = async (req, res) => {
  const aplicantes = models.Aplicante
  const aplicante = await aplicantes.findAll({
    where:{
      session_code:req.params.id
    }
  })
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(aplicante)
}

const CreateMessage = async (req, res)=>{
  let {
    mensaje,        
    code_chat,
    session_e,
    session_a,
    fecha  
    } = req.body

  const mensajes = models.Chat
  const mensaje1 = await mensajes.create({
    "message": mensaje,
    "code_chat": code_chat,
    "sesion_e": session_e,    
    "sesion_a": session_a,
    "fecha": fecha
  })
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(mensaje1)
}
const searchUser = async (req, res) => {
  const sessiones = models.Session
  const usuariop = req.params.user
  let result
  const session = await sessiones.findAll({
    where:{
      "code_session":usuariop
    }
  })
 // const data = await session.json()
 console.log(session[0].tipo_id)
  if (session[0].tipo_id==1) {
    const aplicante=models.Aplicante
     result= await aplicante.findAll({
      where:{
        "session_code":usuariop
      }
    })
  } else {
    const empresa=models.Empresa
     result= await empresa.findAll({
      where:{
        "session_code":usuariop
      }
    })
  }
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(result)
}


const ConsultarChats = async (req, res) => {
  const chat = models.Chat
  const id = req.params.id
  const chats = await chat.findAll({
    where:{
      [Op.or]:[{"sesion_e":id},{"sesion_a":id}]      
    }
  })
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(chats)
  console.log(chats)
}
const ModificarChats = async (req, res) => {
  const chat = models.Chat
  const id = req.params.id
  const mensaje = req.body.mensaje
  const chats = await chat.findOne({
    where:{
      "code_chat":id      
    }
  })
  chats.message=chats.message+"/n"+mensaje  
  await chats.save()
  res.json(chats)
  //console.log(chats)
}
const ConsultarEmpresa = async (req, res) => {
  const empresa = models.Empresa
  const id = req.params.id
  //const mensaje = req.body.mensaje
  const empresas = await empresa.findAll({
    where:{
      "session_code":id      
    }
  })
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(empresas)
  
  //chats.message=chats.message+"/n"+mensaje  
  //await chats.save()
  //res.json(chats)
  //console.log(chats)
}

const CreateContrato = async (req, res)=>{
  let {           
ubicacion,          
tiempo,             
fecha_inicio,       
comentarios_finales,
session_a,
session_e,           
ciudad,             
estado_code,
funciones} = req.body

  const contrato = models.Contrato
  const contratos = await contrato.create({
    "ubicacion": ubicacion,
    "tiempo": tiempo,
    "fecha_inicio": fecha_inicio,    
    "comentarios_finales": comentarios_finales,
    "session_a": session_a,
    "session_e": session_e,
    "ciudad": ciudad,
    "estado_code": estado_code,
    "funciones":funciones

  })
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(contratos)
}

const ConsultarContratos = async (req, res) => {
  const id = req.params.id
  const contrato = models.Contrato
  const contratos = await contrato.findAll({
    where:{
      [Op.or]:[{"session_e":id},{"session_a":id}]      
    }
  })
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(contratos)
  
}

const UpdateContrato = async (req, res)=>{
  let { id,comentarioF,estado_code} = req.body

  const contrato = models.Contrato
  const contratos = await contrato.findOne({
    where:{
      "id_contrato":id      
    }
  })
  contratos.comentarios_finales=comentarioF
  contratos.estado_code=estado_code  
  await contratos.save()
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.json(contratos)
}


module.exports = { holaMundo, ConsultCities, CreateCities, ConsultaDocumentos, ConsultaHabilidades, CrearAspirante,CrearEmpresa,iniciarSession,ConsulAspirantes,CreateMessage,searchUser,ConsultarChats,ConsulAspirantesID,ModificarChats,ConsultarEmpresa,CreateContrato,ConsultarContratos,UpdateContrato }

