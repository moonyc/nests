import { Controller, Get } from '@nestjs/common'


@Controller() // decorator
class AppController {
    @Get()
    getRootRoute() {
        return 'hi there'
    }
}

export default AppController