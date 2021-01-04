import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class CreateUserTokens1609713606198
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'user_tokens',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },

      ],
      foreignKeys: [],
    })
  }

  public async down(queryRunner: QueryRunner): Promise<void> { }
}
