'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tweet extends Model {
    user() { //user é o nome do relacionamento
        // definindo um relacionamento com o usuario
        return this.belongsTo('App/Models/User');
    }
}

module.exports = Tweet
