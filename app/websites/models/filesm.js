var mongoose = require('mongoose');
var modelArticle = require('./schema/files.js');

var archivos = function  (conf) {
	conf = conf || {};
	this.model = modelArticle;
}

//guardar y actualizar
archivos.prototype.save = function(data,callback) {
	this.model.findOneAndUpdate({

		nombre :data.nombre,
		url: data.url,
		promedio: data.promedio,
		comentario: data.comentario
		
	},data,{upsert:true}).exec(function(err,doc){
		callback(doc);
	});
};
//========================obtener todos==================================
archivos.prototype.findAll = function(callback) {
	this.model
	.find(
		{},
		{ _id:0, nombre: 1,url :1, promedio:1 , comentario:1 })
	.exec(function(err, data){
			if(err) throw err;
			callback(data);
	})
};
//obtener los datos de un archivo por un atributo
archivos.prototype.findLevel = function(leveln, callback) {
	this.model.find(
		{level:leveln},
		{_id: 0, nombre:1, url:1, promedio:1, comentario:1})
		.exec(function(err, doc){
		callback(doc)
	})
};
//================================================================
archivos.prototype.findId = function(id, callback) {
	this.model.findOne(
		{_id:id},
		{_id: 0, nombre:1, url:1, promedio:1, comentario:1})
		.exec(function(err, doc){
			if(err) throw err;
			callback(doc);
		})
};

//==========================borrar x id==================================
archivos.prototype.delete_id = function(id, callback) {
	this.model.remove({_id:id})
		.exec(function(err, doc){
			if(err) throw err;
			callback();
	})
};
//=======================actualizar=================================
archivos.prototype.update = function(id,data,callback) {
	this.model.findOneAndUpdate(
		{_id:id},
		{_id: 0, nombre:1, url:1, promedio:1, comentario:1})
		.exec(function(err,data){
			if(err) throw err;
			callback(data);	
		})
};

module.exports = archivos;