/*
Insert (MongoDB) de Tipo_de_Representacion generado por codigo
Autores: Laura Sanchez y Felipe Ruiz. (Pareja 11 del grupo 6212)
Gestion de Datos Biomedicos. Practica 4
*/

db.Tipo_de_Representacion.drop();
db.Tipo_de_Representacion.createIndex({Tipo:1}, {unique:true});
var Tipo_de_Representacion=
[
	{'Tipo':'RATIO', 'DescripcionR':'Ratio'},
	{'Tipo':'COUNT', 'DescripcionR':'Count'}
];
db.Tipo_de_Representacion.insertMany(Tipo_de_Representacion)

