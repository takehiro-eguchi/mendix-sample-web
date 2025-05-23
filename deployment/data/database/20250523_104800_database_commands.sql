CREATE TABLE "secondmodule$salespersondata" (
	"id" BIGINT NOT NULL,
	"salespersonnameagain" VARCHAR_IGNORECASE(200) NULL,
	"createddate" TIMESTAMP NULL,
	"changeddate" TIMESTAMP NULL,
	"system$owner" BIGINT NULL,
	"system$changedby" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_secondmodule$salespersondata_system$owner" ON "secondmodule$salespersondata" ("system$owner" ASC,"id" ASC);
CREATE INDEX "idx_secondmodule$salespersondata_system$changedby" ON "secondmodule$salespersondata" ("system$changedby" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('2a598c33-17bf-4b5b-9dea-7658676adb56', 'SecondModule.SalesPersonData', 'secondmodule$salespersondata', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('b3a61233-1330-4cfb-a927-c790d26852e6', '2a598c33-17bf-4b5b-9dea-7658676adb56', 'SalesPersonNameAgain', 'salespersonnameagain', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('7db3455f-954e-38e2-ac81-1b1da5cbb10f', '2a598c33-17bf-4b5b-9dea-7658676adb56', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('36d4f561-8110-328c-8c74-6fff2d591bcd', '2a598c33-17bf-4b5b-9dea-7658676adb56', 'changedDate', 'changeddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('e239f191-2e99-3559-8a9e-15512d262380', '2a598c33-17bf-4b5b-9dea-7658676adb56', 'idx_secondmodule$salespersondata_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('e239f191-2e99-3559-8a9e-15512d262380', '50dc5529-331c-36d3-a480-06be828d2740', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('84aee2c2-aa39-3e9e-b8bd-278e253a8128', '2a598c33-17bf-4b5b-9dea-7658676adb56', 'idx_secondmodule$salespersondata_system$changedby');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('84aee2c2-aa39-3e9e-b8bd-278e253a8128', '8287e676-5633-3463-8c47-4467b7be2c90', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('50dc5529-331c-36d3-a480-06be828d2740', 'System.owner', 'secondmodule$salespersondata', '2a598c33-17bf-4b5b-9dea-7658676adb56', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner', 'frn_secondmodule$salespersondata_system$owner', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('8287e676-5633-3463-8c47-4467b7be2c90', 'System.changedBy', 'secondmodule$salespersondata', '2a598c33-17bf-4b5b-9dea-7658676adb56', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$changedby', 'frn_secondmodule$salespersondata_system$changedby', 2, 1);
ALTER TABLE "secondmodule$salespersondata" ADD CONSTRAINT "frn_secondmodule$salespersondata_system$changedby" FOREIGN KEY ( "system$changedby" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "secondmodule$salespersondata" ADD CONSTRAINT "frn_secondmodule$salespersondata_system$owner" FOREIGN KEY ( "system$owner" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20250523 10:48:00';
