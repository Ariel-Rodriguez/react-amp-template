import Server from './server'
import constants from './constants'

exports.run = () => {
  new Server(constants.server).start()
}
