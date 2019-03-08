'use strict'

const User = use('App/Models/User');

class AuthController {

    async register({ request }) {
        const data = request.only(['username', 'email', 'password']);
        const user = User.create(data);

        return user;

    }

    async authenticate({ request, auth }) {

        const { email, password } = request.all();

        // Tentar fazer a autenticacao
        const token = await auth.attempt(email, password);

        return token;
    }
}

module.exports = AuthController
