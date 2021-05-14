import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UserMigration1621000255029 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
