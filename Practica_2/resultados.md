# Resultados de la Comparación de Métodos de Conexión a MySQL

## Configuración de Hardware y Entorno de trabajo
- **Procesador**: Intel Core i3 3240 (3.4 GHz)
- **Memoria RAM**: 8 GB
- **Tipo de almacenamiento**: SSD
- **Sistema Operativo**: Windows 10 (22H2, x64).
- **Versión de Node.js**: v22.12.0.
- **Base de Datos**: MySQL configurado en XAMPP
- **Herramientas Utilizadas**: Node.js con el paquete `mysql2`

## Metodología de Pruebas
- Se realizaron 3 pruebas consecutivas para cada método, anotando el tiempo total de ejecución.
- La tabla `users` contenía 10 registros al momento de realizar las pruebas.
- No se ejecutaron otros procesos que requieran usar recursos de manera intensiva como el CPU
- Cada script se ejecutó desde la terminal utilizando el comando `node`.
- Cada método ejecutó la consulta SQL:

```sql
SELECT * FROM users;
```
## Resultados
- Conexión basica con un promedio de 57.960ms
- Conexión promises con un promedio de 58.816ms
- Conexión Pooling con un promedio de 58.816ms

## Observaciones
- Al tener 10 datos no se pudo apreciar una gran diferencia en el promedio de ejecución.
- El método Pooling requiere la linea pool.end(); para poder finalizar correctamente.
- El método básico requiere la linea connection.end(); para poder finalizar correctamente.