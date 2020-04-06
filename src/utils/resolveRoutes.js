const resolveRoutes = (route) => {
    if (route.length <= 3) {//aca lo que hace es preguntar si es menor a 3 caracteres de id osea hasta 999
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    return `/${route}`; //lo anterior busca el id de 0 a 999 pero ahi esta el about y no debe de ser asi aca solucionas ese chicharron
};

export default resolveRoutes;

/* 

if ternario.

Sintaxis:
condición ? expr1 : expr2
Ejemplo usado en este caso:
Condición: route === '/'
Si se cumple mostrará: route
Si NO se cumple mostrará: ‘/’

Espero haber ayudado. 😄


*/