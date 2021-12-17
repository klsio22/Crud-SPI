import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class patient1639686343372 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "patient",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },

          {
            name: "name",
            type: "varchar",
          },

          {
            name: "clinic",
            type: "int",
          },
          {
            name: "age",
            type: "int",
          },
          {
            name: "rg",
            type: "bigint",
          },
          {
            name: "cpf",
            type: "bigint",
          },
          {
            name: "gender",
            type: "char",
          },
          {
            name: "zip_code",
            type: "bigint",
          },
          {
            name: "address",
            type: "varchar",
          },

          {
            name: "number",
            type: "int",
          },

          {
            name: "uf",
            type: "varchar",
          },

          {
            name: "state",
            type: "varchar",
          },
          {
            name: "status",
            type: "varchar",
          },

          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },

          {
            name: "user_id",
            type: "uuid",
          },
        ],

        foreignKeys: [
          {
            name: "fk_patient_user",
            columnNames: ["user_id"],
            referencedTableName: "user",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("patient");
  }
}
