import { IProductQueryRepository } from "@/modules/cart/interface";
import { CartProduct } from "@/modules/cart/model";
import axios from "axios";

export class CartProductRPCRepo implements IProductQueryRepository {
  constructor(private readonly productServiceUrl: string) {}
  async findById(id: string): Promise<CartProduct | null> {
    try {
      const { data } = await axios.get(
        `${this.productServiceUrl}/v1/products/${id}`
      );
      const product = data.data;
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        salePrice: product.salePrice,
        images: product.images,
        quantity: product.quantity,
      };
    } catch (error) {
      return null;
    }
  }
  async findByIds(ids: string[]): Promise<Array<CartProduct>> {
    const { data } = await axios.post(
      `${this.productServiceUrl}/v1/rpc/products/by-ids`,
      { ids }
    );
    const products = data.data;

    return products.map((product: any) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      salePrice: product.salePrice,
      images: product.images,
      quantity: product.quantity,
    }));
  }
}
