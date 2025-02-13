import {
    CanActivate,
    ExecutionContext,
    Injectable,
    NotFoundException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
  import { ROLES_KEY } from 'src/shared/decorators/roles.decorator';
  import { Role } from 'src/shared/types/enums';

  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService,
                private reflector:Reflector,
                ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      
      if (!token) {
        throw new NotFoundException("No token provided");
      }

      try {
        const payload =  await this.jwtService.verify(token,{secret:process.env.JWT_SECRET});
        
        request['user'] = payload;
        const role = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
          context.getHandler(),
          context.getClass(),
        ]);
        
        if (role)
        {
            if (!role.includes(payload.role))
        {
          throw new UnauthorizedException('Access to Route Declined');
        }
    }
      } catch (error){

        throw error;
      }
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }
  