import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const account_name = 'kylan'
    const user = await User.query().where({ account_name }).firstOrFail()
    try {
      await auth.use('web').login(user, true)
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
}
