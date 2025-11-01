import { ICommandHandler } from "../../../share/interface";
import { CreateCommand, IBrandRepository } from "../interface";
export declare class CreateNewBrandCmdHandler implements ICommandHandler<CreateCommand, string> {
    private readonly repository;
    constructor(repository: IBrandRepository);
    execute(command: CreateCommand): Promise<string>;
}
