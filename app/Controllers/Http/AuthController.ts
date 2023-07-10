import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const account_name = 'kylan'
    const user = await User.query().where({ account_name }).firstOrFail()
    console.log('user', user)
    try {
      await auth.use('web').login(user, true)
      return response.status(200).json({ success: true })
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }

  public async test({ auth, request, response, session }: HttpContextContract) {
    console.log('auth.use(web).user', auth.use('web').user)
    console.log('auth', auth)
    console.log('session', session)
    const cookie = await request.cookie('adonis-session')
    console.log('auth.user: ', auth.user)
    console.log("auth.use('web').viaRemember: ", auth.use('web').viaRemember)
    console.log('cookie', cookie)
    await auth.use('web').authenticate()
  }
}
