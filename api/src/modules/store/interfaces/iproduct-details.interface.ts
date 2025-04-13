import { ISellerProductDetailDynamic } from "./iseller-product-detail-dynamic";
import { ISellerProductImage } from "./iseller-product-image.inteface";
import { ISellerProduct } from "./iseller-product.interface";

export interface IProductDetails {

    id: number;

    productId: Number;

    product: ISellerProduct;

    title: string;

    description: string;

    material: string;

    discount_percentage: number;
    price_after_discount: number;
    brand: string;

    original_price: 999.00,

    is_on_sale: boolean,

    dynamicFields: ISellerProductDetailDynamic;

    productImages: ISellerProductImage[];

    product_url: string;

    "shipping_details": {
      "free_shipping": true,
      "estimated_delivery": "5-7 business days"
    },
    "options": {
      "gift_wrapping": true,
      "personalization": false
    },
    "seller_details": {
      "seller_name": "Urban Apparel Co.",
      "seller_rating": 4.8,
      "contact": "contact@urbanapparel.com",
      "location": "New York, NY"
    }    
}

