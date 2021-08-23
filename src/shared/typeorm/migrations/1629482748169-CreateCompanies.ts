import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompanies1629482748169 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'companies',
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                  generationStrategy: "uuid",
                  default: "uuid_generate_v4()",
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                  name: "cnpj",
                  type: "varchar",
                },
                {
                  name: "created_at",
                  type: "timestamp with time zone",
                  default: "now()",
                },
                {
                  name: "update_at",
                  type: "timestamp with time zone",
                  default: "now()",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('companies');
    }

}