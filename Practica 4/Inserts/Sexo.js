/*
Insert (MongoDB) de Sexo generado por codigo
Autores: Laura Sanchez y Felipe Ruiz. (Pareja 11 del grupo 6212)
Gestion de Datos Biomedicos. Practica 4
*/

db.Sexo.drop();
db.Sexo.createIndex({CodigoS:1}, {unique:true});
var Sexo=
[
	{'CodigoS':'FEMALE', 'DescripcionS':'Female'},
	{'CodigoS':'MALE', 'DescripcionS':'Male'},
	{'CodigoS':'ALL', 'DescripcionS':'All'}
];
db.Sexo.insertMany(Sexo)

