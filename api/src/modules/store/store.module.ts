import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from '../user/user.module';

import { SellerProductCategorySchema } from './entities/seller-product-category.entity';
import { SellerProductColorSchema } from './entities/seller-product-color.entity';
import { SellerProductSchema } from './entities/seller-product.entity';
import { SellerDiscountTypeSchema } from './entities/seller-discount-type.entity';
import { SellerDiscountSchema } from './entities/seller-discount.entity';
import { SellerProductRateSchema } from './entities/seller-product-rate.entity';
import { UserProductRateSchema } from './entities/user-product-rate.entity';
import { SellerProductImageSchema } from './entities/seller-product-image.entity';

import { SellerProductService } from './services/seller-product.service';
import { SellerService } from './services/seller.service';
import { SellerProductRateService } from './services/seller-product-rate.service';
import { SellerProductImageService } from './services/seller-product-image.service';
import { SellerProductColorService } from './services/seller-product-color.service';
import { SellerProductCategoryService } from './services/seller-product-category.service';
import { SellerDiscountService } from './services/seller-discount.service';
import { SellerDiscountTypeService } from './services/seller-discount-type.service';
import { UserProductRateService } from './services/user-product-rate.service';

import { SellerController } from './controllers/seller.controller';
import { SellerDiscountTypeController } from './controllers/seller-discount-type.controller';
import { SellerDiscountController } from './controllers/seller-discount.controller';
import { SellerProductCategoryController } from './controllers/seller-product-category.controller';
import { SellerProductColorController } from './controllers/seller-product-color.controller';
import { SellerProductImageController } from './controllers/seller-product-image.controller';
import { SellerProductRateController } from './controllers/seller-product-rate.controller';
import { SellerProductController } from './controllers/seller-product.controller';
import { SellerSchema } from './entities/seller.entity';

@Module({
    imports: [
        UserModule,
        MongooseModule.forFeature(
        [
          { name: 'Seller', schema: SellerSchema },
          { name: 'UserProductRate', schema: UserProductRateSchema },

          { name: 'Product', schema: SellerProductSchema },
          { name: 'ProductCategory', schema: SellerProductCategorySchema },
          { name: 'ProductColor', schema: SellerProductColorSchema },
          { name: 'ProductImage', schema: SellerProductImageSchema },
          { name: 'ProductRate', schema: SellerProductRateSchema },

          { name: 'DiscountType', schema: SellerDiscountTypeSchema },
          { name: 'Discount', schema: SellerDiscountSchema }, 
        ]
      )  
    ],
    controllers: [
      SellerController,
      SellerDiscountController,
      SellerDiscountTypeController,
      SellerProductController,
      SellerProductCategoryController,
      SellerProductImageController,
      SellerProductRateController,
      SellerProductColorController
    ],
    providers: [      
      SellerService,
      SellerProductService,
      SellerProductRateService,
      SellerProductImageService,
      SellerProductColorService,
      SellerProductCategoryService,
      SellerDiscountService,
      SellerDiscountTypeService,
      UserProductRateService
    ]
  })
  export class StoreModule {}
  