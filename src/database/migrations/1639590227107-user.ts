import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class user1639590227107 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },

                    {
                        name: "type_user_id",
                        type: "uuid",
                    },

                ],

                foreignKeys: [
                    {
                        name: "fk_type_user_id",
                        columnNames: ["type_user_id"],
                        referencedTableName: "type_user",
                        referencedColumnNames: ["id"]
                    }

                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user")
    }

}
