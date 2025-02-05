/*
Insert (MongoDB) de Agrupacion_Paises generado por codigo
Autores: Laura Sanchez y Felipe Ruiz. (Pareja 11 del grupo 6212)
Gestion de Datos Biomedicos. Practica 4
*/

db.Agrupacion_Paises.drop();
db.Agrupacion_Paises.createIndex({CodigoG:1}, {unique:true});
var Agrupacion_Paises=
[
	{'CodigoG':'WHO_EURO', 'Nombre_cortoG':'WHO European Region', 'Nombre_completoG':'WHO European Region', 'Paises':['ALB', 'AND', 'ARM', 'AUT', 'AZE', 'BLR', 'BEL', 'BIH', 'BGR', 'HRV', 'CYP', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'GEO', 'DEU', 'GRC', 'HUN', 'ISL', 'IRL', 'ISR', 'ITA', 'KAZ', 'KGZ', 'LVA', 'LTU', 'LUX', 'MLT', 'MCO', 'MNE', 'NLD', 'MKD', 'NOR', 'POL', 'PRT', 'MDA', 'ROU', 'RUS', 'SMR', 'SRB', 'SVK', 'SVN', 'ESP', 'SWE', 'CHE', 'TJK', 'TUR', 'TKM', 'UKR', 'GBR', 'UZB']},
	{'CodigoG':'EU_MEMBERS', 'Nombre_cortoG':'Members of the European Union', 'Nombre_completoG':'Members of the European Union', 'Paises':['AUT', 'BEL', 'BGR', 'HRV', 'CYP', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'IRL', 'ITA', 'LVA', 'LTU', 'LUX', 'MLT', 'NLD', 'POL', 'PRT', 'ROU', 'SVK', 'SVN', 'ESP', 'SWE', 'GBR']},
	{'CodigoG':'EU_BEFORE_MAY2004', 'Nombre_cortoG':'Members of the EU before May 2004 (EU15)', 'Nombre_completoG':'Members of the European Union before May 2004 (EU15)', 'Paises':['AUT', 'BEL', 'DNK', 'FIN', 'FRA', 'DEU', 'GRC', 'IRL', 'ITA', 'LUX', 'NLD', 'PRT', 'ESP', 'SWE', 'GBR']},
	{'CodigoG':'EU_AFTER_MAY2004', 'Nombre_cortoG':'Members of the EU after May 2004 (EU13)', 'Nombre_completoG':'Members of the European Union after May 2004 (EU13)', 'Paises':['BGR', 'HRV', 'CYP', 'CZE', 'EST', 'HUN', 'LVA', 'LTU', 'MLT', 'POL', 'ROU', 'SVK', 'SVN']},
	{'CodigoG':'CIS', 'Nombre_cortoG':'Commonwealth of Independent States', 'Nombre_completoG':'Commonwealth of Independent States', 'Paises':['ARM', 'AZE', 'BLR', 'KAZ', 'KGZ', 'MDA', 'RUS', 'TJK', 'TKM', 'UZB']},
	{'CodigoG':'CARINFONET', 'Nombre_cortoG':'Central Asian Republics Information Network members (CARINFONET)', 'Nombre_completoG':'Central Asian Republics Information Network members (CARINFONET)', 'Paises':['KAZ', 'KGZ', 'TJK', 'TKM', 'UZB']},
	{'CodigoG':'SEEHN', 'Nombre_cortoG':'South-eastern Europe Health Network members (SEEHN)', 'Nombre_completoG':'South-eastern Europe Health Network members (SEEHN)', 'Paises':['ALB', 'BIH', 'BGR', 'ISR', 'MNE', 'MKD', 'MDA', 'ROU', 'SRB']},
	{'CodigoG':'NORDIC', 'Nombre_cortoG':'Nordic countries', 'Nombre_completoG':'Nordic countries', 'Paises':['DNK', 'FIN', 'ISL', 'NOR', 'SWE']},
	{'CodigoG':'SMALL', 'Nombre_cortoG':'Small countries', 'Nombre_completoG':'Small countries', 'Paises':['AND', 'CYP', 'ISL', 'LUX', 'MLT', 'MCO', 'MNE', 'SMR']}
];
db.Agrupacion_Paises.insertMany(Agrupacion_Paises)

