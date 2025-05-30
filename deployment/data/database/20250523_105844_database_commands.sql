ALTER TABLE "secondmodule$salespersondata" DROP CONSTRAINT "frn_secondmodule$salespersondata_system$changedby";
ALTER TABLE "secondmodule$salespersondata" DROP CONSTRAINT "frn_secondmodule$salespersondata_system$owner";
DROP INDEX "idx_secondmodule$salespersondata_system$owner";
DROP INDEX "idx_secondmodule$salespersondata_system$changedby";
ALTER TABLE "secondmodule$salespersondata" RENAME TO "secondmodule$salesdeletedhistory";
ALTER TABLE "secondmodule$salesdeletedhistory" DROP COLUMN "salespersonnameagain";
ALTER TABLE "secondmodule$salesdeletedhistory" ALTER COLUMN "id" RENAME TO "43604764ad8f432c90445b0a9e6db406";
ALTER TABLE "secondmodule$salesdeletedhistory" ALTER COLUMN "43604764ad8f432c90445b0a9e6db406" RENAME TO "id";
ALTER TABLE "secondmodule$salesdeletedhistory" ADD "salesid" INT NULL;
UPDATE "secondmodule$salesdeletedhistory" SET "salesid" = 0;
ALTER TABLE "secondmodule$salesdeletedhistory" ADD "orderquantify" INT NULL;
UPDATE "secondmodule$salesdeletedhistory" SET "orderquantify" = 0;
CREATE INDEX "idx_secondmodule$salesdeletedhistory_system$owner" ON "secondmodule$salesdeletedhistory" ("system$owner" ASC,"id" ASC);
CREATE INDEX "idx_secondmodule$salesdeletedhistory_system$changedby" ON "secondmodule$salesdeletedhistory" ("system$changedby" ASC,"id" ASC);
UPDATE "mendixsystem$association" SET "association_name" = 'System.owner', "table_name" = 'secondmodule$salesdeletedhistory', "parent_entity_id" = '2a598c33-17bf-4b5b-9dea-7658676adb56', "child_entity_id" = '282e2e60-88a5-469d-84a5-ba8d9151644f', "parent_column_name" = 'id', "child_column_name" = 'system$owner', "pk_index_name" = NULL, "index_name" = NULL, "parent_fkc_name" = NULL, "child_fkc_name" = 'frn_secondmodule$salesdeletedhistory_system$owner', "parent_fkc_action" = NULL, "child_fkc_action" = 2, "storage_format" = 1 WHERE "id" = '50dc5529-331c-36d3-a480-06be828d2740';
UPDATE "mendixsystem$association" SET "association_name" = 'System.changedBy', "table_name" = 'secondmodule$salesdeletedhistory', "parent_entity_id" = '2a598c33-17bf-4b5b-9dea-7658676adb56', "child_entity_id" = '282e2e60-88a5-469d-84a5-ba8d9151644f', "parent_column_name" = 'id', "child_column_name" = 'system$changedby', "pk_index_name" = NULL, "index_name" = NULL, "parent_fkc_name" = NULL, "child_fkc_name" = 'frn_secondmodule$salesdeletedhistory_system$changedby', "parent_fkc_action" = NULL, "child_fkc_action" = 2, "storage_format" = 1 WHERE "id" = '8287e676-5633-3463-8c47-4467b7be2c90';
UPDATE "mendixsystem$entity" SET "entity_name" = 'SecondModule.SalesDeletedHistory', "table_name" = 'secondmodule$salesdeletedhistory', "superentity_id" = NULL, "remote" = false, "remote_primary_key" = false WHERE "id" = '2a598c33-17bf-4b5b-9dea-7658676adb56';
UPDATE "mendixsystem$attribute" SET "entity_id" = '2a598c33-17bf-4b5b-9dea-7658676adb56', "attribute_name" = 'SalesId', "column_name" = 'salesid', "type" = 3, "length" = 0, "default_value" = '0', "is_auto_number" = false WHERE "id" = 'b3a61233-1330-4cfb-a927-c790d26852e6';
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('6bcd181a-39e2-421f-b307-76cd706af807', '2a598c33-17bf-4b5b-9dea-7658676adb56', 'OrderQuantify', 'orderquantify', 3, 0, '0', false);
DELETE FROM "mendixsystem$index"  WHERE "id" = 'e239f191-2e99-3559-8a9e-15512d262380';
DELETE FROM "mendixsystem$index_column"  WHERE "index_id" = 'e239f191-2e99-3559-8a9e-15512d262380';
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('e239f191-2e99-3559-8a9e-15512d262380', '2a598c33-17bf-4b5b-9dea-7658676adb56', 'idx_secondmodule$salesdeletedhistory_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('e239f191-2e99-3559-8a9e-15512d262380', '50dc5529-331c-36d3-a480-06be828d2740', false, 0);
DELETE FROM "mendixsystem$index"  WHERE "id" = '84aee2c2-aa39-3e9e-b8bd-278e253a8128';
DELETE FROM "mendixsystem$index_column"  WHERE "index_id" = '84aee2c2-aa39-3e9e-b8bd-278e253a8128';
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('84aee2c2-aa39-3e9e-b8bd-278e253a8128', '2a598c33-17bf-4b5b-9dea-7658676adb56', 'idx_secondmodule$salesdeletedhistory_system$changedby');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('84aee2c2-aa39-3e9e-b8bd-278e253a8128', '8287e676-5633-3463-8c47-4467b7be2c90', false, 0);
UPDATE "mendixsystem$association" SET "association_name" = 'System.owner', "table_name" = 'secondmodule$salesdeletedhistory', "parent_entity_id" = '2a598c33-17bf-4b5b-9dea-7658676adb56', "child_entity_id" = '282e2e60-88a5-469d-84a5-ba8d9151644f', "parent_column_name" = 'id', "child_column_name" = 'system$owner', "pk_index_name" = NULL, "index_name" = NULL, "parent_fkc_name" = NULL, "child_fkc_name" = 'frn_secondmodule$salesdeletedhistory_system$owner', "parent_fkc_action" = NULL, "child_fkc_action" = 2, "storage_format" = 1 WHERE "id" = '50dc5529-331c-36d3-a480-06be828d2740';
UPDATE "mendixsystem$association" SET "association_name" = 'System.changedBy', "table_name" = 'secondmodule$salesdeletedhistory', "parent_entity_id" = '2a598c33-17bf-4b5b-9dea-7658676adb56', "child_entity_id" = '282e2e60-88a5-469d-84a5-ba8d9151644f', "parent_column_name" = 'id', "child_column_name" = 'system$changedby', "pk_index_name" = NULL, "index_name" = NULL, "parent_fkc_name" = NULL, "child_fkc_name" = 'frn_secondmodule$salesdeletedhistory_system$changedby', "parent_fkc_action" = NULL, "child_fkc_action" = 2, "storage_format" = 1 WHERE "id" = '8287e676-5633-3463-8c47-4467b7be2c90';
ALTER TABLE "secondmodule$salesdeletedhistory" ADD CONSTRAINT "frn_secondmodule$salesdeletedhistory_system$changedby" FOREIGN KEY ( "system$changedby" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "secondmodule$salesdeletedhistory" ADD CONSTRAINT "frn_secondmodule$salesdeletedhistory_system$owner" FOREIGN KEY ( "system$owner" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20250523 10:58:44';
