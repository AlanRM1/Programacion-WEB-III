# Comparación de Métodos de Conexión a MySQL con Node.js

Este proyecto compara de forma básica tres formas principales de conexión a una base de datos MySQL utilizando el paquete `mysql2` en Node.js: **Conexión Básica**, **Promises** y **Pooling**.

## Estructura del Proyecto
```plaintext
/Practica_2
├── basic.js          # Conexión básica
├── promises.js       # Conexión usando Promises
├── pooling.js        # Conexión con Pooling
├── resultados.md     # Resultados obtenidos y análisis
├── README.md         # Instrucciones del proyecto
├── package.json      # Configuración del proyecto y dependencias
└── package-lock.json # Registro detallado de las versiones de dependencias
```
## Para poder ejecutarlo correctamente se recomienda tener:
- Node.js v18.15.0 (o superior)
- XAMMPP
- Instalar las dependencias necesarias:
```bash
npm install
```

Crea la base de datos "testdb"

y una vez realizado el llenado de algunos datos puedes ejecutar desde la terminal:
```bash
node basic.js
```
(para la conexión Básica)

```bash
node promises.js
```
(para la conexión promises)
```bash
node pooling.js
```
(para la conexión con Pooling)

## Resultados

[Usando de guia principal la lectura del sitio GeeksforGeeks:](www.geeksforgeeks.org/how-to-connect-to-a-mysql-database-using-the-mysql2-package-in-node-js/)
y con los 10 datos dados en el mismo se tomaron los registros de medicion.
Consulta el archivo `resultados.md` para conocer el análisis completo y los tiempos de ejecución de cada método.