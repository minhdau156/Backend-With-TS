import { IRepository, TokenPayload } from "../../../share/interface";
import { PagingDTO } from "../../../share/model/paging";
import { IUserUseCase } from "../interface";
import { User, UserCondDTO, UserLoginDTO, UserRegistrationDTO, UserUpdateDTO } from "../model";
export declare class UserUseCase implements IUserUseCase {
    private readonly repository;
    constructor(repository: IRepository<User, UserCondDTO, UserUpdateDTO>);
    profile(userId: string): Promise<User>;
    verifyToken(token: string): Promise<TokenPayload>;
    login(data: UserLoginDTO): Promise<string>;
    register(data: UserRegistrationDTO): Promise<string>;
    create(data: UserRegistrationDTO): Promise<string>;
    getDetail(id: string): Promise<User | null>;
    update(id: string, data: UserUpdateDTO): Promise<boolean>;
    list(cond: UserCondDTO, paging: PagingDTO): Promise<User[]>;
    delete(id: string): Promise<boolean>;
}
