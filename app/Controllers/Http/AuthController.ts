import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class AuthController {
  public async validateNonce({ auth, request, response }: HttpContextContract) {
    const account_name = 'kylan'
    const [user] = await Database.query().from('users').where('account_name', account_name)
    try {
      await auth.use('web').loginViaId(user.id, true)
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
}
