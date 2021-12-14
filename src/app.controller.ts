import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
	@Get('/testing')
	getRouteRoute() {
		return "test route";
	}
}