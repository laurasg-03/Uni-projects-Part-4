/*
Insert (MongoDB) de Nivel_Profesional generado por codigo
Autores: Laura Sanchez y Felipe Ruiz. (Pareja 11 del grupo 6212)
Gestion de Datos Biomedicos. Practica 4
*/

db.Nivel_Profesional.drop();
db.Nivel_Profesional.createIndex({CodigoP:1}, {unique:true});
var Nivel_Profesional=
[
	{'CodigoP':'ALL', 'DescripcionP':'All'},
	{'CodigoP':'ASSOCIATE_PROF', 'DescripcionP':'Associate professional'},
	{'CodigoP':'PROFESSIONAL', 'DescripcionP':'Professional'}
];
db.Nivel_Profesional.insertMany(Nivel_Profesional)

