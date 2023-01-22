import {SetMetadata} from '@nestjs/common';

import {LoaiNguoiDung} from "../../users/dto/user.dto";

export const KEY = 'roles';

export const Roles = (...roles: LoaiNguoiDung[]) => SetMetadata(KEY,roles);
