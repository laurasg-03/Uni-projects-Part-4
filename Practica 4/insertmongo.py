#Inserts para practica 2 de Gestion de datos Biomedicos
"""
Created on Tue Feb 28 18:26:45 2023

@authors: Laura Sanchez y Felipe Ruiz 
"""
import pandas as pd
import numpy as np
import os #Para sacar los path donde guardar los inserts.
import sys #Para usar sys.exit y cerrar el programa abruptame
from shutil import rmtree

def insert(Name,Data,lines,fichero):
    print(Name)
    Atributos=lines[Name]   ##Sacar del diccionario los atributos correspondientes al nombre de la entidad.
            ##En Atributos[0] se guarda la clave primaria,
    #FIRMA DEL FICHERO
    fichero.write("/*\nInsert (MongoDB) de "+Name+" generado por codigo\n")
    fichero.write("Autores: Laura Sanchez y Felipe Ruiz. (Pareja 11 del grupo 6212)\n")
    fichero.write("Gestion de Datos Biomedicos. Practica 4\n*/\n\n")
    #FIRMA DEL FICHERO
    
    fichero.write("db."+Name+".drop();\n")
    if Name=="Valor_anual":     #Para valor anual, el indice unico es la clave serial, no el primer atributo (usualmente el codigo de la entidad) 
        fichero.write("db."+Name+".createIndex({Clave_Serial:1}, {unique:true});\n")
    else:
        fichero.write("db."+Name+".createIndex({"+Atributos[0]+":1}, {unique:true});\n")
    fichero.write("var "+Name+"=\n[")     #crear la variable que se va a insertar
    
    Serial=0    #Variable serial que lleva la cuenta de los elementos introducidos
    
    if Name=="Pais": #El ultimo elemento a insertar en pais tambien es la parte de agrupacion de paises a los que pertenece. 
        agrup=pertenecePa("HLTHRES Metadata.xlsx")
        #Copio todo el bucle general para que no tenga que estar comparando cada vez que llegue a final de los atributos si el nombre es pais para que asi meta la agrupacion.
        for i in Data:  #Bucle para generar la variable para luego hacer el db.insert.coleccion(variable)
            fichero.write("\n\t{")
            
            for j in range(0,len(i)):
                if j==len(i)-1: #Si es el ultimo atributo a insertar, no hay que poner comas al final.
                        fichero.write("'"+Atributos[j]+"':'"+i[j]+"', 'Agrup':"+str(agrup[i[0]]))  #En pais no tengo problema de que vaya a haber un null o un numero, no los checkeo.
                else:       #Si no es el ultimo, poner una coma por cada atributo.
                        fichero.write("'"+Atributos[j]+"':'"+i[j]+"', ") #En pais no tengo problema de que vaya a haber un null o un numero, no los checkeo.   
            
            if i==Data[len(Data)-1]:
                fichero.write("}\n];\n") #Si es de los ultimos en introducir, no hay que poner comas entre "documentos"
                
            else:
                fichero.write("},") #Hay que poner comas entre "documentos" (documento1={atributo1:valor1, ...,atributoN:valorN},documento2,documentoM)
                
    elif Name=="Agrupacion_Paises": #El ultimo elemento a insertar en agrupaciones tambien son los paises pertenecientes a esa agrupacion 
    
        countries=perteneceAg("HLTHRES Metadata.xlsx")
        #Copio todo el bucle general para que no tenga que estar comparando cada vez que llegue a final de los atributos si el nombre es pais para que asi meta la agrupacion.
        for i in Data:  #Bucle para generar la variable para luego hacer el db.insert.coleccion(variable)
            fichero.write("\n\t{")
            
            for j in range(0,len(i)):
                if j==len(i)-1: #Si es el ultimo atributo a insertar, no hay que poner comas al final.
                        fichero.write("'"+Atributos[j]+"':'"+i[j]+"', 'Paises':"+str(countries[i[0]]))  #En pais no tengo problema de que vaya a haber un null o un numero, no los checkeo.
                else:       #Si no es el ultimo, poner una coma por cada atributo.
                        fichero.write("'"+Atributos[j]+"':'"+i[j]+"', ") #En pais no tengo problema de que vaya a haber un null o un numero, no los checkeo.   
            
            if i==Data[len(Data)-1]:
                fichero.write("}\n];\n") #Si es de los ultimos en introducir, no hay que poner comas entre "documentos"
                
            else:
                fichero.write("},") #Hay que poner comas entre "documentos" (documento1={atributo1:valor1, ...,atributoN:valorN},documento2,documentoM)
    
    else:
        for i in Data:  #Bucle para generar la variable para luego hacer el db.insert.coleccion(variable)
                
            Serial+=1   #Aumenta cada vez que pasa de un elemento al siguiente para introducirlo
            
            if Name=="Valor_anual":     #Valor anual tiene una clave serial
                fichero.write("\n\t{Clave_Serial:"+str(Serial)+", ")   #Hay que meter la clave serial por elemento introducido.
                
            else:
                fichero.write("\n\t{")
                
            for j in range(0,len(i)):
                if j==len(i)-1: #Si es el ultimo atributo a insertar, no hay que poner comas al final.
                    if str(i[j])==str(np.nan):
                        fichero.write("'"+Atributos[j]+"':null")  #Si es un nan, insertar null.
                    elif type(i[j])==float or type(i[j])==int:
                        fichero.write("'"+Atributos[j]+"':"+str(i[j])) #Quitar las comillas si es un numero
                    else:
                        fichero.write("'"+Atributos[j]+"':'"+i[j]+"'")
                else:       #Si no es el ultimo, poner una coma por cada atributo.
                    if str(i[j])==str(np.nan):
                        fichero.write("'"+Atributos[j]+"':null, ")  #Si es un nan, insertar null.
                    elif type(i[j])==float or type(i[j])==int:
                        fichero.write("'"+Atributos[j]+"':"+str(i[j])+", ") #Quitar las comillas si es un numero
                    else:
                        fichero.write("'"+Atributos[j]+"':'"+i[j]+"', ")         
                
            if i==Data[len(Data)-1]:
                fichero.write("}\n];\n") #Si es de los ultimos en introducir, no hay que poner comas entre "documentos"
                
            else:
                fichero.write("},") #Hay que poner comas entre "documentos" (documento1={atributo1:valor1, ...,atributoN:valorN},documento2,documentoM)
                
    fichero.write("db."+Name+".insertMany("+Name+")\n\n")
    
    
    return


def read_data(nombref):     #Lee el excel de las tablas del modelo relacional.

    table=pd.read_excel(nombref,nrows=11,usecols=[0,1,2,3,4,5,6,7,8])  #Lee las lineas necesarias para sacar las tablas y los nombres de sus atributos.
    data=table.values.tolist()  #cada fila la convierte en una lista de elementos.
    
    lines={}    #Creación de un diccionario donde se van a guardar para cada clave (nombre de la tabla), sus atributos.
    #Como no nos hacen falta las * o | de las claves primarias y externas, las deshechamos en el siguiente bucle:
    for i in data:
        for j in range(len(i)-1,-1,-1):    #se leen las lineas de derecha a izquierda para poder extraer correctamente los nan
            if type(i[j])==float:   #se ignoran los nan y los quitas.
                i.pop(j)
            else:           
                if i[j].count("|")==1:       #si la palabra tiene |, se lo quitas
                    i[j]=i[j].replace("|","")
               
                if i[j].count("*") == 1:     #si la palabra tiene *, se lo quitas
                    i[j]=i[j].replace("*","") 
                    
            if i[0]=="Pertenece" or i[0]=="Valor_anual":    #para quitarte las claves seriales para que el programa sql las añada solas, no hace falta que las pongas al insertar.
                lines[i[0]]=i[2:]          #Mete los valores al diccionario
            else:   #i[0] es el nombre de la tabla y i[1:] son todos los atributos que van seguidos de la misma (por eso había que borrar los "na" del final de cada fila)
                lines[i[0]]=i[1:]          #Mete los valores al diccionario.
                
    return lines        #Devuelve un diccionario con las claves siendo el nombre de las tablas y los valores siendo sus respectivos atributos en una lista


def SEXandPROF_LVL(nombre,lines,Dir):
    table=pd.read_excel(nombre,sheet_name="Labels",skiprows=293,nrows=6,usecols=[1,2])  #Lee la hoja y columnas necesarias para sacar los valores de SEX y lvl prof.
    data=table.values.tolist()  #cada fila la convierte en una lista de elementos.
    #Las 3 primeras listas tienen info de Nivel profesional y las ultimas 3 de sexo, por eso se hacen ambos en una misma función.
    ficheroS=open(Dir+"\\Sexo.js","w")       #Fichero donde crea los inserts para sexo
    ficheroP=open(Dir+"\\Nivel_Profesional.js","w")   #Fichero donde crea los inserts para nivel profesional
    
    insert("Sexo",data[3:],lines, ficheroS)     #Nombre de la tabla, info a insertar, diccionario con los atributos por nombre de tabla y fichero donde escribir.
    insert("Nivel_Profesional",data[:3],lines, ficheroP)    #Nombre de la tabla, info a insertar, diccionario con los atributos por nombre de tabla y fichero donde escribir.
    ficheroS.close()    
    ficheroP.close()
    return 


def REGION(nombre,lines,Dir):
    paises=pd.read_excel(nombre,sheet_name="Countries",nrows=54,usecols=[0])  #Lee la hoja y columnas necesarias para sacar los codigos de Paises.
    paises=paises.values.tolist()  #cada fila la convierte en una lista de elementos. --> se guarda a su vez en una lista
    agrup=pd.read_excel(nombre,sheet_name="Country groups",nrows=10,usecols=[0])  #Lee la hoja y columnas necesarias para sacar los codigos de Agrupacion de paises.
    agrup=agrup.values.tolist()    #cada fila la convierte en una lista de elementos. --> se guarda a su vez en una lista
    data=paises+agrup
    
    fichero=open(Dir+"\\Region.js","w")    
    insert("Region",data,lines,fichero) #Nombre de la tabla, info a insertar, diccionario con los atributos por nombre de tabla y fichero donde escribir.
    fichero.close()
    return 


def PAIS(nombre,lines,Dir):
    paises=pd.read_excel(nombre,sheet_name="Countries",nrows=54,usecols=[0,3,4,5])  #Lee la hoja y columnas necesarias para sacar los atributos de Paises.
    data=paises.values.tolist()    #cada fila la convierte en una lista de elementos. --> se guarda a su vez en una lista
    
    fichero=open(Dir+"\\Pais.js","w")    
    insert("Pais",data,lines,fichero) #Nombre de la tabla, info a insertar, diccionario con los atributos por nombre de tabla y fichero donde escribir.
    fichero.close()
    return


def AGRUP_PAISES(nombre,lines,Dir):
    agrup=pd.read_excel(nombre,sheet_name="Country groups",nrows=10,usecols=[0,1,2])
    data=agrup.values.tolist()    #cada fila la convierte en una lista de elementos. --> se guarda a su vez en una lista
    
    fichero=open(Dir+"\\Agrupacion_Paises.js","w")    
    insert("Agrupacion_Paises",data,lines,fichero)  #Nombre de la tabla, info a insertar, diccionario con los atributos por nombre de tabla y fichero donde escribir.
    fichero.close() 
    return

def UNIDAD(nombre,lines,Dir):
    unidades=pd.read_excel(nombre,sheet_name="Labels",skiprows=254,nrows=10,usecols=[0,1])
    data=unidades.values.tolist()     #cada fila la convierte en una lista de elementos. --> se guarda a su vez en una lista
    
    fichero=open(Dir+"\\Unidad_de_Medida.js","w")    
    insert("Unidad_de_Medida",data,lines,fichero)  #Nombre de la tabla, info a insertar, diccionario con los atributos por nombre de tabla y fichero donde escribir.
    fichero.close()
    
    return 

def TIPO(nombre,lines,Dir):
    tipos=pd.read_excel(nombre,sheet_name="Labels",skiprows=271,nrows=2,usecols=[0,1])  
    data=tipos.values.tolist()     #cada fila la convierte en una lista de elementos. --> se guarda a su vez en una lista
    
    fichero=open(Dir+"\\Tipo_de_Representacion.js","w")
    insert("Tipo_de_Representacion",data,lines,fichero)  #Nombre de la tabla, info a insertar, diccionario con los atributos por nombre de tabla y fichero donde escribir.
    fichero.close()
    
    return 

def CATEGORIA(nombre,lines,Dir):
    cat=pd.read_excel(nombre,sheet_name="Classifications",nrows=251,usecols=[1])
    data=cat.values.tolist()    #cada fila la convierte en una lista de elementos. --> se guarda a su vez en una lista
    #segun la pagina web, j00 tiene 155 indicadores, j01 94 y j02 1. --> en cada Hlthres
    data=[data[0][0],data[0+155][0],data[0+155+94][0]]  #obtener una lista de las tres claves y sus descripciones
    
    for i in range(0,len(data)):
        data[i]=[data[i][1:4],data[i][5:]]  #separas el nombre de las claves con su descripicion
        
    fichero=open(Dir+"\\Categoria.js","w")   
    insert("Categoria",data,lines,fichero)  #Nombre de la tabla, info a insertar, diccionario con los atributos por nombre de tabla y fichero donde escribir.
    fichero.close()
    
    return

def MEASURE(nombre,lines,Dir):
    cod_desc= pd.read_excel(nombre,sheet_name="Labels",skiprows=1,nrows=250,usecols=[0,1])
    units_reps=pd.read_excel(nombre,sheet_name="Measure list",nrows=251,usecols=[2,5])
    cat=pd.read_excel(nombre,sheet_name="Classifications",nrows=251,usecols=[1])
    
    cat=cat.values.tolist() #cada fila la convierte en una lista de elementos. --> se guarda a su vez en una lista
    copy=cat.copy()
    cat=[]
    for i in copy:
        cat.append(i[0][1:4])       #obtener solo los valores "J0X" de todo el string leido y meterlos en una lista
    cat=pd.DataFrame({"Categoria": cat})
    
    data=pd.concat([cod_desc,units_reps,cat],axis=1)
    data=data.values.tolist() #cada fila la convierte en una lista de elementos. --> se guarda a su vez en una lista
    
    fichero=open(Dir+"\\Indicador.js","w")  
    insert("Indicador",data,lines,fichero)  #Nombre de la tabla, info a insertar, diccionario con los atributos por nombre de tabla y fichero donde escribir.
    fichero.close()
    return

def pertenecePa(nombre):
    pert=pd.read_excel(nombre,sheet_name="Country groups mapping",skiprows=1,nrows=54,usecols=[1,2,3,4,5,6,7,8,9,10])
    data=pert.values.tolist()
    values=pert.columns.tolist()    #obtener el nombre de las columnas para asi crear un diccionario con sus indices y sus nombres
    
    groupsindex={}
    for x in range(1,len(values)):
        groupsindex.update({x:values[x]})       #Se crea un diccionario para saber los indices a los que les corresponde cada agrupacion
    
    country={}
    for i in data:
        agrup=[]
        for j in range(1,len(i)):
            if i[j]=="yes":         #se comprueba si en el indice existe un yes --> se mete a la lista junto con el nombre del pais original
                agrup.append(groupsindex[j])
        country.update({i[0]:agrup})        
                

    return country  #Devuelve un diccionario con las agrupaciones de paises que pertenece un pais

def perteneceAg(nombre):
    pert=pd.read_excel(nombre,sheet_name="Country groups mapping",skiprows=1,nrows=54,usecols=[1,2,3,4,5,6,7,8,9,10])
    data=pert.values.tolist()
    values=pert.columns.tolist()    #obtener el nombre de las columnas para asi crear un diccionario con sus indices y sus nombres
    
    groups=[]
    for x in range(0,len(values)):
        groups.append(values[x])       #Se crea un diccionario para saber los indices a los que les corresponde cada agrupacion
    
    agrup={}
    for j in range(1,len(groups)):
        countries=[]
        for i in data:
            if i[j]=="yes":
                countries.append(i[0])
        agrup.update({groups[j]:countries})
                
                
                
                

    return agrup  #Devuelve un diccionario con las agrupaciones de paises que pertenece un pais

def VALOR(nombre,lines,Dir):
    full=pd.read_csv("HLTHRES Data (table).csv",dtype={'Measure code':str, 'AGE_GRP':str, 'PROFESSIONAL_LEVEL':str,
         'SEX':str, 'OWNER_ENTITY':str, 'CARE_SETTING': str, 'CARE_TYPE': str, 'COUNTRY_REGION':str, 'YEAR': int, 'VALUE':float})    
    #el metodo .iloc() sirve para indexar por columnas.
    value=full.iloc[:,[9]]  #columna de valores
    year=full.iloc[:,[8]]   #columna de años
    measure=full.iloc[:,[0]]    #columna de indicador
    region=full.iloc[:,[7]] #columna de region
    sex=full.iloc[:,[3]]    #columna de sexo
    lvl_prof=full.iloc[:,[2]]   #columna de nivel profesional
    
    data=pd.concat([value,year,measure,region,sex,lvl_prof],axis=1) 
    #inserto las columnas en ese orden en especifico para que coincidan con mi orden establecido en el modelo relacional.
    data=data.values.tolist() #cada fila la convierte en una lista de elementos. --> se guarda a su vez en una lista
    
    fichero=open(Dir+"\\Valor_anual.js","w")  
    insert("Valor_anual",data,lines,fichero)   #Nombre de la tabla, info a insertar, diccionario con los atributos por nombre de tabla y fichero donde escribir.
    fichero.close()
    return



#####################################################################
#Codigo a ejecutar de verdad:


tablas="create.xlsx"    #Va a abrir el fichero donde tenemos nuestro modelo relacional
lines=read_data(tablas)     #Se ejecuta una vez y sirve para cada insert, no tiene sentido
                            #Ejecutarlo dentro de la funcion cada vez (no es optimo)

nombre="HLTHRES Metadata.xlsx"  #Nombre del fichero del cual se va a extraer casi todos los inserts

OGdir=os.path.dirname(os.path.realpath(__file__))   #Obtiene el path donde se encuentre el .py
#Creamos una carpeta donde guardar los inserts.js que se generen en la misma direccion donde esta el .py.

carpeta="Inserts"

final_path=os.path.join(OGdir,carpeta)  #Genera el path de la carpeta final (se crea en el mismo directorio donde se encuentre el .py)
try:
    os.makedirs(final_path) 
except:
    try:
        rmtree(final_path)  #Si ya existe la carpeta, la elimina junto con su contenido
        try:
            os.makedirs(final_path) #Intenta volver a generarla
        except:
            print("\nError al crear la carpeta.\n\n")
            sys.exit()
    except:
       print("\nError al borrar la carpeta. Algun programa la tiene abierta.\n\n")
       sys.exit() 
       
       
REGION(nombre,lines,final_path)
PAIS(nombre,lines,final_path)
AGRUP_PAISES(nombre,lines,final_path)
SEXandPROF_LVL(nombre,lines,final_path)
UNIDAD(nombre,lines,final_path)
TIPO(nombre,lines,final_path)
CATEGORIA(nombre,lines,final_path)
MEASURE(nombre,lines,final_path)
VALOR(nombre,lines,final_path)

print("SUPERSCRIPT")

f=open(final_path+"\\SUPERSCRIPT.js","w")

f.write("/*\n Superscrip generado por codigo para cargar la base de datos en MongoDB\n")
f.write("Autores: Laura Sanchez y Felipe Ruiz. (Pareja 11 del grupo 6212)\n")
f.write("Gestion de Datos Biomedicos. Practica 4\n*/\n\n")

f.write("OGdir = pwd()\n")

f.write("NEWdir = '"+final_path.replace("\\","\\\\")+"'\n") 
#MongoDB shell detecta "\" como "", por lo que se necesita poner "\\",
#como en python al escribir "\\" se va a transcribir como "\" en el archivo que se este escribiendo, 
#se "printean" las dos barras poniendo un string de cuatro "\\\\" en el codigo
f.write("cd(NEWdir)\n\n")

f.write("print('1.Cargando Region.js')\n")
f.write("load('Region.js')\n\n")

f.write("print('2.Cargando Pais.js')\n")
f.write("load('Pais.js')\n\n")

f.write("print('3.Cargando Agrupacion_Paises.js')\n")
f.write("load('Agrupacion_Paises.js')\n\n")

f.write("print('4.Cargando Sexo.js')\n")
f.write("load('Sexo.js')\n\n")

f.write("print('5.Cargando Nivel_Profesional.js')\n")
f.write("load('Nivel_Profesional.js')\n\n")

f.write("print('6.Cargando Unidad_de_Medida.js')\n")
f.write("load('Unidad_de_Medida.js')\n\n")

f.write("print('7.Cargando Tipo_de_Representacion.js')\n")
f.write("load('Tipo_de_Representacion.js')\n\n")


f.write("print('8.Cargando Categoria.js')\n")
f.write("load('Categoria.js')\n\n")

f.write("print('9.Cargando Indicador.js')\n")
f.write("load('Indicador.js')\n\n")

f.write("print('9.Cargando Valor_anual.js')\n")
f.write("load('Valor_anual.js')\n\n")

f.write("print('Base de Datos Cargada')\n\n")

f.write("cd(OGdir)")

f.close()

print("---------------------\nSe ha generado una capeta 'Inserts' en donde se encuentran los ficheros generados.\n")
print("Comando para ejecutar el superscript:\n\nload('"+str(final_path+"\\SUPERSCRIPT.js").replace("\\","\\\\")+"')")    
#Devuelve el path para que se pueda copiar directamente a la shell de mongo y pueda ejecutarse con load



   