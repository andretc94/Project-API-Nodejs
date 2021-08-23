import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class CreateIdCompanyInEmployee1629483378348 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "employees",
      new TableColumn({
        name: "company_id",
        type: "uuid",
      })
    );

    await queryRunner.createForeignKey(
      "employees",
      new TableForeignKey({
        name: "EmployeeCompany",
        columnNames: ["company_id"],
        referencedTableName: "companies",
        referencedColumnNames: ["id"],
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("employees", "EmployeeCompany");
    await queryRunner.dropColumn("employees", "company_id");
  }
}
