import { Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common";
import { ThrottlerException } from "@nestjs/throttler";

@Catch(ThrottlerException)
export class ThrottlerExceptionFilter implements ExceptionFilter {
  catch(exception: ThrottlerException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    response.status(429).send(`
    <html>
        <body style="text-align:center">
            <h1>Too many requests! Please try again later.</h1>
        </body>
    </html>
    `);
  }
}
