var trabajo = require('../schemas/trabajo');

exports.addTrabajo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  titulo : String,
  descripcion : String,
  cargo: String,
  contacto: String,
  salario: Number
  handler: function(request, reply){
    var nuevoTrabajo = new trabajo{
      titulo: request.payload.titulo,
      descripcion: request.payload.descripcion,
      cargo: request.payload.cargo,
      contacto: request.payload.contacto,
      salario: request.payload.salario
    }
    nuevoTrabajo.save(function (err) {
      console.log(err);
      if(err){
        return reply(err));
      }else{
        return reply('agregado');
      };
   });
  }
}

exports.modTrabajo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var modificar = score.findByIdAndUpdate(request.params.trabajoId,
      {
        titulo: request.payload.titulo,
        descripcion: request.payload.descripcion,
        cargo: request.payload.cargo,
        contacto: request.payload.contacto,
        salario: request.payload.salario
      }
      function(err, modificado){
      if(err){
        reply(err);
      }
    });
  }
}
exports.delTrabajo = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    libro.findByIdAndRemove(request.params.trabajoId, function(err, eliminado) {
      if (err)
        reply(err);
      reply("trabajo fue borrado");
    });
  }
}
exports.showTrabajos = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'regular']
  },
  handler: function(request, reply){
    reply(trabajo.find({}));
  }
}
