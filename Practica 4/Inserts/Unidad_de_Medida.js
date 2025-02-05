/*
Insert (MongoDB) de Unidad_de_Medida generado por codigo
Autores: Laura Sanchez y Felipe Ruiz. (Pareja 11 del grupo 6212)
Gestion de Datos Biomedicos. Practica 4
*/

db.Unidad_de_Medida.drop();
db.Unidad_de_Medida.createIndex({Unidad:1}, {unique:true});
var Unidad_de_Medida=
[
	{'Unidad':'PROFESS_100K', 'DescripcionU':'health professionals per 100 000 population'},
	{'Unidad':'NUM_PROFESS', 'DescripcionU':'number of professionals'},
	{'Unidad':'BEDS_100K', 'DescripcionU':'beds per 100 000 population'},
	{'Unidad':'NUM_BEDS', 'DescripcionU':'number of beds'},
	{'Unidad':'EQUIP_100K', 'DescripcionU':'equipments per 100 000 population'},
	{'Unidad':'NUM_EQUIP', 'DescripcionU':'number of equipments'},
	{'Unidad':'PERCENT', 'DescripcionU':'%'},
	{'Unidad':'FACIL_100K', 'DescripcionU':'facilities per 100 000 population'},
	{'Unidad':'NUM_FACIL', 'DescripcionU':'number of facilities'},
	{'Unidad':'NUM_PERS', 'DescripcionU':'number of persons'}
];
db.Unidad_de_Medida.insertMany(Unidad_de_Medida)

