import { Server } from './server'
import { Routers } from './routes/routes'
import { GetUserController } from './controllers/user/getUser.controller'
import { CreateUserController } from './controllers/user/createUser.controller'
import { AuthLoginControllers } from './controllers/user/authUserController.controller'
import { UpdateUserController } from './controllers/user/updateUser.controller'
import { DeleteUserController } from './controllers/user/deleteUser.controller'

const getUserController = new GetUserController()
const createUserController = new CreateUserController()
const authUserController = new AuthLoginControllers()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

export {
  createUserController,
  authUserController,
  getUserController,
  updateUserController,
  deleteUserController,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const server = new Server(
  new Routers(
    createUserController,
    authUserController,
    getUserController,
    updateUserController,
    deleteUserController,
  ),
)
