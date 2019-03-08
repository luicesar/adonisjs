'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')

Route.group(() => {
  //Route.resource('PrefixoDaRota','NomeDaController')
  Route.resource('tweets','TweetController')
  .apiOnly().except('update'); // Eliminando routes que nao existe na controller

}).middleware('auth');


// //Proteger uma rota quando o usuario não está logado
// Route.get('/app', 'AppController.index').middleware(['auth'])