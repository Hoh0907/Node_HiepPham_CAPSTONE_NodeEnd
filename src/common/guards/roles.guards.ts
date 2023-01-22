import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { KEY } from '../decorator/roles.decorator';
import { RequestUser } from '../../dto/index';
import { LoaiNguoiDung } from '../../users/dto/index';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }
    canActivate(context: ExecutionContext): boolean {
        const requireRoles = this.reflector.getAllAndOverride<LoaiNguoiDung[]>(
            KEY,
            [context.getHandler(), context.getClass()],
        );
        if (!requireRoles) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest<RequestUser>();
        const isAuthorized = requireRoles.some((role) => user.loai_nguoi_dung === role);
        if (isAuthorized) {
            return true;
        }
        else {
            throw new UnauthorizedException('Không đủ quyền thực hiện');
        }
    }
};