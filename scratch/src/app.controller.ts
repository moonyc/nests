import { Controller, Get } from '@nestjs/common'

/*
    we use the controller decorator to control
    some high level routing rules
 */

@Controller() // decorator
class AppController {
    @Get()
    getRootRoute() {
        return 'hi there'
    }

    @Get('/bye')
    getByeThere() {
        return 'bye there'
    }
}

export default AppController