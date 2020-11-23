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
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('/', ()=>{return ({info: "Versao 2.1 no ar! By: Marcelo Melo"})})
Route.post('/update-consumo', 'RecebeConsumoController.update')
Route.get('/consumo-diario', 'EnviaConsumoController.diario')
Route.get('/consumo-semanal', 'EnviaConsumoController.semanal')
Route.get('/consumo-mensal', 'EnviaConsumoController.mensal')
Route.get('/consumo-anual', 'EnviaConsumoController.anual')
Route.delete('/deletar-consumo', 'EnviaConsumoController.destroy')

Route.get('/download-diario', 'DownloadController.diario')
Route.get('/download-mensal', 'DownloadController.mensal')
Route.get('/download-anual', 'DownloadController.anual')