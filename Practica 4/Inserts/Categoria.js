/*
Insert (MongoDB) de Categoria generado por codigo
Autores: Laura Sanchez y Felipe Ruiz. (Pareja 11 del grupo 6212)
Gestion de Datos Biomedicos. Practica 4
*/

db.Categoria.drop();
db.Categoria.createIndex({Categ:1}, {unique:true});
var Categoria=
[
	{'Categ':'J00', 'DescripcionC':' Human resources for health'},
	{'Categ':'J01', 'DescripcionC':' Technical resources for health'},
	{'Categ':'J02', 'DescripcionC':' Population'}
];
db.Categoria.insertMany(Categoria)

