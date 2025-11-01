import { IUseCase } from "@/share/interface";
import {
  AddCartItemDTO,
  CartItem,
  CartItemCondDTO,
  CartProduct,
  UpdateCartItemDTO,
} from "../model";

export interface ICartUseCase {
  addProductToCart(dto: AddCartItemDTO): Promise<boolean>;
  removeProductFromCart(id: string, requesterId: string): Promise<boolean>;
  updateProductQuantities(dto: UpdateCartItemDTO[] , requesterId: string): Promise<boolean>;
}

export interface ICartQueryRepository {
  listItems(userId: string): Promise<Array<CartItem>>;
  findByCond(cond: CartItemCondDTO): Promise<CartItem | null>;
  get(id: string): Promise<CartItem | null>;
}

export interface ICartCommandRepository {
  insert(data: CartItem): Promise<boolean>;
  update(id: string, data: CartItem): Promise<boolean>;
  remove(id: string, isHard: boolean): Promise<boolean>;
  updateMany(data: UpdateCartItemDTO[], userId: string): Promise<boolean>;
}

export interface IProductQueryRepository {
  findById(id: string): Promise<CartProduct | null>;
  findByIds(ids: string[]): Promise<Array<CartProduct>>;
}
