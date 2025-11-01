export declare const config: {
    rpc: {
        productBrand: string;
        productCategory: string;
        product: string;
        cart: string;
    };
    mysql: {
        database: string;
        username: string;
        password: string;
        host: string;
        port: number;
        dialect: string;
        pool: {
            max: number;
            min: number;
            acquire: number;
            idle: number;
        };
        logging: boolean;
    };
    accessToken: {
        secretKey: string;
        expiresIn: string;
    };
    redis: {
        host: string;
        port: number;
        url: string;
    };
};
