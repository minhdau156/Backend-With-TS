import { ICommandHandler } from "../../../share/interface";
import { IBrandRepository, UpdateCommand } from "../interface";
export declare class UpdateBrandCmdHandler implements ICommandHandler<UpdateCommand, void> {
    private readonly repository;
    constructor(repository: IBrandRepository);
    execute(command: UpdateCommand): Promise<void>;
}
