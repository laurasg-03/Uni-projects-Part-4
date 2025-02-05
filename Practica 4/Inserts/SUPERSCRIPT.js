/*
 Superscrip generado por codigo para cargar la base de datos en MongoDB
Autores: Laura Sanchez y Felipe Ruiz. (Pareja 11 del grupo 6212)
Gestion de Datos Biomedicos. Practica 4
*/

OGdir = pwd()
NEWdir = 'C:\\Users\\Laura\\Desktop\\BASES DE DATOS\\P4\\Inserts'
cd(NEWdir)

print('1.Cargando Region.js')
load('Region.js')

print('2.Cargando Pais.js')
load('Pais.js')

print('3.Cargando Agrupacion_Paises.js')
load('Agrupacion_Paises.js')

print('4.Cargando Sexo.js')
load('Sexo.js')

print('5.Cargando Nivel_Profesional.js')
load('Nivel_Profesional.js')

print('6.Cargando Unidad_de_Medida.js')
load('Unidad_de_Medida.js')

print('7.Cargando Tipo_de_Representacion.js')
load('Tipo_de_Representacion.js')

print('8.Cargando Categoria.js')
load('Categoria.js')

print('9.Cargando Indicador.js')
load('Indicador.js')

print('9.Cargando Valor_anual.js')
load('Valor_anual.js')

print('Base de Datos Cargada')

cd(OGdir)