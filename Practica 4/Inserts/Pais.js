/*
Insert (MongoDB) de Pais generado por codigo
Autores: Laura Sanchez y Felipe Ruiz. (Pareja 11 del grupo 6212)
Gestion de Datos Biomedicos. Practica 4
*/

db.Pais.drop();
db.Pais.createIndex({CodigoPa:1}, {unique:true});
var Pais=
[
	{'CodigoPa':'ALB', 'CodigoOMS':'ALB', 'Nombre_cortoP':'Albania', 'Nombre_completoP':'Albania', 'Agrup':['WHO_EURO', 'SEEHN']},
	{'CodigoPa':'AND', 'CodigoOMS':'AND', 'Nombre_cortoP':'Andorra', 'Nombre_completoP':'Andorra', 'Agrup':['WHO_EURO', 'SMALL']},
	{'CodigoPa':'ARM', 'CodigoOMS':'ARM', 'Nombre_cortoP':'Armenia', 'Nombre_completoP':'Armenia', 'Agrup':['WHO_EURO', 'CIS']},
	{'CodigoPa':'AUT', 'CodigoOMS':'AUT', 'Nombre_cortoP':'Austria', 'Nombre_completoP':'Austria', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004']},
	{'CodigoPa':'AZE', 'CodigoOMS':'AZE', 'Nombre_cortoP':'Azerbaijan', 'Nombre_completoP':'Azerbaijan', 'Agrup':['WHO_EURO', 'CIS']},
	{'CodigoPa':'BLR', 'CodigoOMS':'BLR', 'Nombre_cortoP':'Belarus', 'Nombre_completoP':'Belarus', 'Agrup':['WHO_EURO', 'CIS']},
	{'CodigoPa':'BEL', 'CodigoOMS':'BEL', 'Nombre_cortoP':'Belgium', 'Nombre_completoP':'Belgium', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004']},
	{'CodigoPa':'BIH', 'CodigoOMS':'BIH', 'Nombre_cortoP':'Bosnia and Herzegovina', 'Nombre_completoP':'Bosnia and Herzegovina', 'Agrup':['WHO_EURO', 'SEEHN']},
	{'CodigoPa':'BGR', 'CodigoOMS':'BUL', 'Nombre_cortoP':'Bulgaria', 'Nombre_completoP':'Bulgaria', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_AFTER_MAY2004', 'SEEHN']},
	{'CodigoPa':'HRV', 'CodigoOMS':'CRO', 'Nombre_cortoP':'Croatia', 'Nombre_completoP':'Croatia', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_AFTER_MAY2004']},
	{'CodigoPa':'CYP', 'CodigoOMS':'CYP', 'Nombre_cortoP':'Cyprus', 'Nombre_completoP':'Cyprus', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_AFTER_MAY2004', 'SMALL']},
	{'CodigoPa':'CZE', 'CodigoOMS':'CZH', 'Nombre_cortoP':'Czechia', 'Nombre_completoP':'Czech Republic', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_AFTER_MAY2004']},
	{'CodigoPa':'DNK', 'CodigoOMS':'DEN', 'Nombre_cortoP':'Denmark', 'Nombre_completoP':'Denmark', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004', 'NORDIC']},
	{'CodigoPa':'EST', 'CodigoOMS':'EST', 'Nombre_cortoP':'Estonia', 'Nombre_completoP':'Estonia', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_AFTER_MAY2004']},
	{'CodigoPa':'FIN', 'CodigoOMS':'FIN', 'Nombre_cortoP':'Finland', 'Nombre_completoP':'Finland', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004', 'NORDIC']},
	{'CodigoPa':'FRA', 'CodigoOMS':'FRA', 'Nombre_cortoP':'France', 'Nombre_completoP':'France', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004']},
	{'CodigoPa':'GEO', 'CodigoOMS':'GEO', 'Nombre_cortoP':'Georgia', 'Nombre_completoP':'Georgia', 'Agrup':['WHO_EURO']},
	{'CodigoPa':'DEU', 'CodigoOMS':'DEU', 'Nombre_cortoP':'Germany', 'Nombre_completoP':'Germany', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004']},
	{'CodigoPa':'GRC', 'CodigoOMS':'GRE', 'Nombre_cortoP':'Greece', 'Nombre_completoP':'Greece', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004']},
	{'CodigoPa':'HUN', 'CodigoOMS':'HUN', 'Nombre_cortoP':'Hungary', 'Nombre_completoP':'Hungary', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_AFTER_MAY2004']},
	{'CodigoPa':'ISL', 'CodigoOMS':'ICE', 'Nombre_cortoP':'Iceland', 'Nombre_completoP':'Iceland', 'Agrup':['WHO_EURO', 'NORDIC', 'SMALL']},
	{'CodigoPa':'IRL', 'CodigoOMS':'IRE', 'Nombre_cortoP':'Ireland', 'Nombre_completoP':'Ireland', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004']},
	{'CodigoPa':'ISR', 'CodigoOMS':'ISR', 'Nombre_cortoP':'Israel', 'Nombre_completoP':'Israel', 'Agrup':['WHO_EURO', 'SEEHN']},
	{'CodigoPa':'ITA', 'CodigoOMS':'ITA', 'Nombre_cortoP':'Italy', 'Nombre_completoP':'Italy', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004']},
	{'CodigoPa':'KAZ', 'CodigoOMS':'KAZ', 'Nombre_cortoP':'Kazakhstan', 'Nombre_completoP':'Kazakhstan', 'Agrup':['WHO_EURO', 'CIS', 'CARINFONET']},
	{'CodigoPa':'KGZ', 'CodigoOMS':'KGZ', 'Nombre_cortoP':'Kyrgyzstan', 'Nombre_completoP':'Kyrgyzstan', 'Agrup':['WHO_EURO', 'CIS', 'CARINFONET']},
	{'CodigoPa':'LVA', 'CodigoOMS':'LVA', 'Nombre_cortoP':'Latvia', 'Nombre_completoP':'Latvia', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_AFTER_MAY2004']},
	{'CodigoPa':'LTU', 'CodigoOMS':'LTU', 'Nombre_cortoP':'Lithuania', 'Nombre_completoP':'Lithuania', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_AFTER_MAY2004']},
	{'CodigoPa':'LUX', 'CodigoOMS':'LUX', 'Nombre_cortoP':'Luxembourg', 'Nombre_completoP':'Luxembourg', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004', 'SMALL']},
	{'CodigoPa':'MLT', 'CodigoOMS':'MAT', 'Nombre_cortoP':'Malta', 'Nombre_completoP':'Malta', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_AFTER_MAY2004', 'SMALL']},
	{'CodigoPa':'MCO', 'CodigoOMS':'MON', 'Nombre_cortoP':'Monaco', 'Nombre_completoP':'Monaco', 'Agrup':['WHO_EURO', 'SMALL']},
	{'CodigoPa':'MNE', 'CodigoOMS':'MNE', 'Nombre_cortoP':'Montenegro', 'Nombre_completoP':'Montenegro', 'Agrup':['WHO_EURO', 'SEEHN', 'SMALL']},
	{'CodigoPa':'NLD', 'CodigoOMS':'NET', 'Nombre_cortoP':'Netherlands', 'Nombre_completoP':'Netherlands', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004']},
	{'CodigoPa':'MKD', 'CodigoOMS':'MKD', 'Nombre_cortoP':'North Macedonia', 'Nombre_completoP':'North Macedonia', 'Agrup':['WHO_EURO', 'SEEHN']},
	{'CodigoPa':'NOR', 'CodigoOMS':'NOR', 'Nombre_cortoP':'Norway', 'Nombre_completoP':'Norway', 'Agrup':['WHO_EURO', 'NORDIC']},
	{'CodigoPa':'POL', 'CodigoOMS':'POL', 'Nombre_cortoP':'Poland', 'Nombre_completoP':'Poland', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_AFTER_MAY2004']},
	{'CodigoPa':'PRT', 'CodigoOMS':'POR', 'Nombre_cortoP':'Portugal', 'Nombre_completoP':'Portugal', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004']},
	{'CodigoPa':'MDA', 'CodigoOMS':'MDA', 'Nombre_cortoP':'Republic of Moldova', 'Nombre_completoP':'Republic of Moldova', 'Agrup':['WHO_EURO', 'CIS', 'SEEHN']},
	{'CodigoPa':'ROU', 'CodigoOMS':'ROM', 'Nombre_cortoP':'Romania', 'Nombre_completoP':'Romania', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_AFTER_MAY2004', 'SEEHN']},
	{'CodigoPa':'RUS', 'CodigoOMS':'RUS', 'Nombre_cortoP':'Russian Federation', 'Nombre_completoP':'Russian Federation', 'Agrup':['WHO_EURO', 'CIS']},
	{'CodigoPa':'SMR', 'CodigoOMS':'SMR', 'Nombre_cortoP':'San Marino', 'Nombre_completoP':'San Marino', 'Agrup':['WHO_EURO', 'SMALL']},
	{'CodigoPa':'SRB', 'CodigoOMS':'SRB', 'Nombre_cortoP':'Serbia', 'Nombre_completoP':'Serbia', 'Agrup':['WHO_EURO', 'SEEHN']},
	{'CodigoPa':'SVK', 'CodigoOMS':'SVK', 'Nombre_cortoP':'Slovakia', 'Nombre_completoP':'Slovakia', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_AFTER_MAY2004']},
	{'CodigoPa':'SVN', 'CodigoOMS':'SVN', 'Nombre_cortoP':'Slovenia', 'Nombre_completoP':'Slovenia', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_AFTER_MAY2004']},
	{'CodigoPa':'ESP', 'CodigoOMS':'SPA', 'Nombre_cortoP':'Spain', 'Nombre_completoP':'Spain', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004']},
	{'CodigoPa':'SWE', 'CodigoOMS':'SWE', 'Nombre_cortoP':'Sweden', 'Nombre_completoP':'Sweden', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004', 'NORDIC']},
	{'CodigoPa':'CHE', 'CodigoOMS':'SWI', 'Nombre_cortoP':'Switzerland', 'Nombre_completoP':'Switzerland', 'Agrup':['WHO_EURO']},
	{'CodigoPa':'TJK', 'CodigoOMS':'TJK', 'Nombre_cortoP':'Tajikistan', 'Nombre_completoP':'Tajikistan', 'Agrup':['WHO_EURO', 'CIS', 'CARINFONET']},
	{'CodigoPa':'TUR', 'CodigoOMS':'TUR', 'Nombre_cortoP':'Türkiye', 'Nombre_completoP':'Türkiye', 'Agrup':['WHO_EURO']},
	{'CodigoPa':'TKM', 'CodigoOMS':'TKM', 'Nombre_cortoP':'Turkmenistan', 'Nombre_completoP':'Turkmenistan', 'Agrup':['WHO_EURO', 'CIS', 'CARINFONET']},
	{'CodigoPa':'UKR', 'CodigoOMS':'UKR', 'Nombre_cortoP':'Ukraine', 'Nombre_completoP':'Ukraine', 'Agrup':['WHO_EURO']},
	{'CodigoPa':'GBR', 'CodigoOMS':'UNK', 'Nombre_cortoP':'United Kingdom', 'Nombre_completoP':'United Kingdom', 'Agrup':['WHO_EURO', 'EU_MEMBERS', 'EU_BEFORE_MAY2004']},
	{'CodigoPa':'UZB', 'CodigoOMS':'UZB', 'Nombre_cortoP':'Uzbekistan', 'Nombre_completoP':'Republic of Uzbekistan', 'Agrup':['WHO_EURO', 'CIS', 'CARINFONET']}
];
db.Pais.insertMany(Pais)

