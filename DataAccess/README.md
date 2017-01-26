# Capa de Acceso a Datos

Este assembly contendr� todo lo relacionado al acceso a datos. El mismo se hace mediante Entity Framework a una base de datos relacional.

Requiere una referencia al assembly que contiene las clases de modelo que ser�n almacenadas, el [Modelo de Dominio](../../../tree/master/ReservaSalas).

## Consideraciones

De manera de simplificar la implementaci�n de almac�n de usuarios y todo lo relacionado a autenticaci�n, el contexto de la base de datos est� definido en el assembly de [Web Api](../../../tree/master/WebApi).

Se decidi� esto para no tener que utilizar dos contextos distintos, lo que requiere un manejo m�s minucioso de las migraciones.
