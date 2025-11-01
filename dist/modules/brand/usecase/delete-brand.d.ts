import { ICommandHandler } from "../../../share/interface";
import { DeleteCommand, IBrandRepository } from "../interface";
export declare class DeleteBrandCmdHandler implements ICommandHandler<DeleteCommand, void> {
    private readonly repository;
    constructor(repository: IBrandRepository);
    execute(command: DeleteCommand): Promise<void>;
}
