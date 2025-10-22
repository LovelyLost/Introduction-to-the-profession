import { Body, Controller, Post } from "@nestjs/common";

@Controller("auth")
export class AuthController {
  @Post("login")
  public login(@Body() dto) {
    console.log("Call login endpoint", dto);
    return { message: "ok" };
  }

  @Post("register")
  public register(@Body() dto) {
    console.log("Call login endpoint", dto);
    return { message: "ok" };
  }
}