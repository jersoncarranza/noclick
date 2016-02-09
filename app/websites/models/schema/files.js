var mongoose = require('mongoose'),
	Schema	 = mongoose.Schema;
	

/*mongoose.connect('mongodb://localhost/naruto2');*/
//mongoose.connect('mongodb://nodejitsu:4f4c928a06a7a407bd144a7a8eecbc37@troup.mongohq.com:10047/nodejitsudb2096137921');
// mongoose.connect('mongodb://snatly:k0985527750@ds041157.mongolab.com:41157/dbsnatly')  
 mongoose.connect('mongodb://votosistemas:liss@ds061954.mongolab.com:61954/votos')  

var FileSchema = new Schema({
	nombre: {type:String, require:true},//nombre del profesor
	url: {type:String, require:true},//nombre de la url
	promedio:{type:String, require:true},//promedio
	comentario:{type:String, require:true}

});

FileSchema.set('toJSON',{
	transform: function (doc, ret, options) {
		ret.id = ret._id;
		delete ret._id;
		delete ret._v;
	}
});

var File = mongoose.model('File', FileSchema);
module.exports = File;