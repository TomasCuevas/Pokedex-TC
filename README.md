# Pokedex TC: Readme

Autor: Anselmo Tomas Cuevas  
Ultima actualización: 2022-11-30

## Contenido

- Objetivo
- Metas
- Background
- Diseño detallado
  - Main Page
  - Pokemon Page
  - Favoritos
  - TypesPokemonPage
  - Buscador
- Estilo de la aplicacion
- Ejecutar en modo desarrollo

## Objetivo

Es un proyecto personal de **Anselmo Tomas Cuevas**, realizado con el fin de aprender NextJs junto con librerias extras como _TanStackQuery(React-Query), Tailwind, Axios._ Utilizando la API [PokeApi](https://pokeapi.co/).

## Metas

- Pagina principal, donde se listen todos los pokemones respectivamente.
- Tener una pagina dedicada para cada pokemon.
- Poder agregar pokemones a una lista de favoritos.
- Poder listar todos los pokemones por el tipo de estos.
- Ofrecer un buscador de pokemones.
- Diseño responsive.

## Background

Estuve aprendiendo NextJs, junto con demas herramientas. Y me propuse a mejorar una aplicacion que realice en un curso tomado sobre Next. Aplicando manejadores de estado global y cache, mejorar el performance y agregar funcionalidades extras.

## Diseño detallado

### Main Page

A traves de un CustomHook **(useFetchPokemons)** y React-Query, obtenemos los pokemones de 50 en 50, cuando el usuario hace click en _Cargar mas_.  
Los pokemones que son servidos por el CustomHook, son renderizados por el componente **PokemonCard**.

![image](https://user-images.githubusercontent.com/79057608/204613008-2fe71fcc-49bd-47ad-b603-50f970a9c391.png)

![image](https://user-images.githubusercontent.com/79057608/204613334-81fed8af-69f3-4785-9087-b4f996beccad.png)

### Pokemon Page

En esta pagina, se hace uso de la funcion **getStaticProps** de NextJs para generar las paginas de forma estatica del lado del servidor y servirlas cuando el cliente las solicite.  
Se accede a esta por el url **/pokemon/[nombre del pokemon]**. El nombre del pokemon es tomado por la funcion **getStaticProps** y si existe un pokemon con el parametro ingresado, se devuelve la pagina. En otro caso, se retorna a la pagina principal.

![image](https://user-images.githubusercontent.com/79057608/204612810-460a611d-f439-4d36-8c64-e1cbe630d871.png)

![image](https://user-images.githubusercontent.com/79057608/204613658-dd7681c9-bfb8-4970-8866-dec49eb849b9.png)

### Favoritos

Se utiliza el **LocalStorage**, para almacenar y obtener todos los pokemones que el usuario agregue a sus favoritos.  
El usuario podra agregar o quitar pokemones de sus favoritos en la pagina de dicho pokemon, a traves de un boton que se intercambiara cuando el usuario ya posea dicho pokemon en su lista de favoritos o no.

![image](https://user-images.githubusercontent.com/79057608/204615336-ef17600d-3701-4017-a7f0-02b4b034488a.png)
![image](https://user-images.githubusercontent.com/79057608/204614846-8d415b7e-8b3e-47bf-a110-6fd85688692f.png)

### TypesPokemonsPage

Esta pagina, nuevamente hace uso de la funcion **getStaticProps** junto con **getStaticPaths**.  
Se accede a esta por el url **/pokemon/types/[tipo de pokemon]**. El tipo del pokemon es tomado por la funcion **getStaticProps** y si el tipo ingresado es correcto, devuelve todos los pokemones del tipo especificado. En otro caso, se retorna a la pagina principal.

![image](https://user-images.githubusercontent.com/79057608/204624447-b6cbe1ed-995a-4f2e-93ad-9cecd4f9e445.png)
![image](https://user-images.githubusercontent.com/79057608/204624624-19bf11ed-5f2a-4da2-92dc-6678fdd4cf97.png)

### Buscador

El componente encancargado de la busqueda, toma el input que el usuario ingresa y se lo pasa a un CustomHook **(useSearch)** que es encargado de realizar la busqueda y devolver los pokemones encontrados.

![image](https://user-images.githubusercontent.com/79057608/204773541-a889ec0c-f8ce-4b43-9665-a6ad23bb984c.png)

## Estilo de la aplicacion

En un principio, la aplicacion estaba completamente estilada por la libreria de componentes NextUi, pero luego, fue migrada completamente a Tailwind.

## Ejecutar en modo desarrollo

Para ejecutar este proyecto en modo desarrollo, primero debes clocar el repositorio con el siguiente comando:

```
  git clone https://github.com/TomasCuevas/Pokedex-TC.git
```

Una vez clonado, dentro de la carpeta del proyecto ejecutar en la terminar el siguiente comando, para instalar todas las dependencias del mismo:

```
  npm i
```

Tan solo con esto, podremos ejecutar el siguiente comando y se ejecutara el proyecto en modo desarrollo en nuestro equipo local:

```
  npm run dev
```
