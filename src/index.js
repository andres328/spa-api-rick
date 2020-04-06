import router from './routes';//el router esta dentro de routes en index.js

window.addEventListener('load', router)//cuando estos archivos esten listos vamos a ejecutar el codigo que hemos recibido
// osea va la funcion de router que esta dentro de routes en index.js y al cargar la pagina hace la funcion de router
window.addEventListener('hashchange', router)
