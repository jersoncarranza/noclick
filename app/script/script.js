
var File = require('../websites/models/schema/files.js');

var BaseConocimiento = new File({
	subject: 'Base de Conocimiento',//nombre materia
	description: 'El contenido de esta materia es programar en prolog',//descripcion
	teacher: 'Ivan',//profesor
	level: '8',//nivel
	code: 'EIS54125',//codigo
	homework:[
		{partial_n:'1',
		 homework_n:[
			{description:'prolog los campesino',url:'wwww.mega.con'},
			{description:'Resumen de paper tecnico',url:'wwww.mega.con'}
		]},
		{partial_n:'2',
		 homework_n:[
			{description:'prolog los canibales',url:'wwww.mega.con'},
			{description:'resumen del capitulo 11',url:'wwww.mega.con'}
		]},
		{partial_n:'3',
		 homework_n:[
			{description:'Redsemantica',url:'wwww.mega.con'},
			{description:'Redsemeantica',url:'wwww.mega.con'}
		]}
		],
	exam:[
		{
			partial_n:'1',
			description:'Examanes teorico hasta el capitulo cinco',
			url:'www.mega.com/parcial'
		},
		{
			partial_n:'2',
			description:'Examen de canibales',
			url:'www.mega.com/parcial'
		}

		],
	materia:[
		{
		partial_n:'1',
		materia_n:[
			{description:'Capitulo 1', url:'www.mega.con/dddd'},
			{description:'Capitulo 2', url:'www.mega.con/aaa'}
			]
		},
		{
		partial_n:'2',
		materia_n:[
			{description:'Capitulo 4', url:'www.mega.con/capitulo4'},
			{description:'Capitulo 5', url:'www.mega.con/capitulo5'}
			]
		}
		]
	

	});//end red semantica	

BaseConocimiento.save(function (err, justin){
	console.log('Base de conocimiento guardada');		
});