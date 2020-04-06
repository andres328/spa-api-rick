import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';//Como una buena practica no colocmos las extenciones porque ya se lee al exportar en cada archivo
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,//aca identificamos el valor que puede ser dinamico
    '/contact': 'Contact',
};

const router = async () => {
    const header = null || document.getElementById('header');//null || sirve para en caso de que no lo encuentre
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);//aca va al archivo utils/resolveRoutes
    let render = routes[route] ? routes[route] : Error404;//en caso de que la ruta falle va a salir el error 404 
    content.innerHTML = await render();
};

export default router;
 