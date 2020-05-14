'use strict'

const Genre = use('App/Models/Genre');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with genres
 */
class GenreController {
  /**
   * Show a list of all genres.
   * GET genres
   * GET /genre
   */
  async index () {
    const genres = await Genre.all();
    return genres;
  }

  /**
   * Create/save a new genre.
   * POST genres
   * POST /genre
   */
  async store ({ request }) {
    const data = request.only(['description']);
    const genre = await Genre.create(data);

    return genre;
  }

  /**
   * Display a single genre.
   * GET genres/:id
   * GET /genre/:id
   */
  async show ({ params }) {
    const genre = await Genre.findOrFail(params.id);

    return genre;
  }

  /**
   * Update genre details.
   * PUT or PATCH genres/:id
   * PUT /genre/:id
   */
  async update ({ params, request }) {
    const data = request.only( ['description'] );
    const genre = await Genre.findOrFail(params.id);

    genre.merge(data);
    await genre.save();

    return genre;
  }

  /**
   * Delete a genre with id.
   * DELETE genres/:id
   * DELETE /genre/:id
   */
  async destroy ({ params }) {
    const genre = await Genre.findOrFail(params.id);
    await genre.delete();
  }
}

module.exports = GenreController
