import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CookieUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        console.log(request.params.accountId);
        return request.user;
    },
);
