import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { UserSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UserAddressSchema } from './entities/user-address.entity';
import { UserAddressService } from './services/user-address.service';
import { UserAddressController } from './controllers/user-address.controller';
import { UserAuthenticatedSchema } from './entities/user-authenticate.entity';
import { UserAuthenticationService } from './services/user-authenticated.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: 'User', schema: UserSchema },
        { name: 'UserAddress', schema: UserAddressSchema },
        { name: 'UserAuthenticated', schema: UserAuthenticatedSchema }        
      ]
    )
  ],
  controllers: [
    UserController,
    UserAddressController
  ],
  providers: [
    UserService,
    UserAddressService,
    UserAuthenticationService
  ]
})
export class UserModule {}
