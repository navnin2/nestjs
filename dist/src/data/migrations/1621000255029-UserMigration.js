"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMigration1621000255029 = void 0;
class UserMigration1621000255029 {
    constructor() {
        this.name = 'UserMigration1621000255029';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "brand" varchar NOT NULL, "model" varchar NOT NULL, "colour" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "brand", "model", "colour") SELECT "id", "brand", "model", "colour" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "brand" varchar NOT NULL, "model" varchar NOT NULL, "colour" varchar NOT NULL, "cost" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "user"("id", "brand", "model", "colour") SELECT "id", "brand", "model", "colour" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
    }
}
exports.UserMigration1621000255029 = UserMigration1621000255029;
//# sourceMappingURL=1621000255029-UserMigration.js.map