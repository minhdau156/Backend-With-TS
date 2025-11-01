import { ITokenIntrospect, TokenIntrospectResult } from "../interface";
export declare class TokenIntrospectRPCClient implements ITokenIntrospect {
    private readonly url;
    constructor(url: string);
    introspect(token: string): Promise<TokenIntrospectResult>;
}
