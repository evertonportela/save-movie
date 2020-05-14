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

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/user/register', 'UserController.register')

Route.post('/user/authenticated', 'UserController.authenticated')

Route.group( () => {
  /**
   * GET /genre
   * POST /genre
   * GET /genre/:id
   * PUT /genre/:id
   * DELETE /genre/:id
   */
  Route.resource(  'genre', 'GenreController').apiOnly()
  
  /**
   * GET /movies
   * POST /movies
   * GET /movies/:id
   * PUT /movies/:id
   * DELETE /movies/:id
   */
  Route.resource(  'movies', 'MovieController').apiOnly()
  
  Route.resource(  'watched', 'WatchedController').apiOnly().except(['store', 'show', 'delete'])

  
} ).middleware('auth')
