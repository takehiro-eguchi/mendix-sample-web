ALTER TABLE "myfirstmodule$salestrackingtable" ADD "operationcode" VARCHAR_IGNORECASE(200) NULL;
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('59e8ec90-d000-47d4-b4f2-a1866d1b9630', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'OperationCode', 'operationcode', 30, 200, '', false);
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20250523 20:15:38';
