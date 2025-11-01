import { ITokenProvider, TokenPayload } from "../interface";
declare class JwtTokenService implements ITokenProvider {
    private readonly secretKey;
    private readonly expiresIn;
    constructor(secretKey: string, expiresIn: string | number);
    generateToken(payload: TokenPayload): Promise<string>;
    verifyToken(token: string): Promise<TokenPayload | null>;
}
export declare const jwtProvider: JwtTokenService;
export {};
