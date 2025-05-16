ALTER TABLE "myfirstmodule$salestrackingtable" DROP CONSTRAINT "frn_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_products";
DROP INDEX "idx_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_products";
ALTER TABLE "myfirstmodule$products" DROP CONSTRAINT "frn_myfirstmodule$products_system$owner";
ALTER TABLE "myfirstmodule$products" DROP CONSTRAINT "frn_myfirstmodule$products_system$changedby";
DROP INDEX "idx_myfirstmodule$products_system$owner";
DROP INDEX "idx_myfirstmodule$products_system$changedby";
ALTER TABLE "myfirstmodule$products" RENAME TO "440f7a305dcf46eab8af9b1e9634d887";
ALTER TABLE "myfirstmodule$salestrackingtable" DROP COLUMN "myfirstmodule$salestrackingtable_products";
ALTER TABLE "myfirstmodule$salestrackingtable" ADD "myfirstmodule$salestrackingtable_products" BIGINT NULL;
CREATE INDEX "idx_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_products" ON "myfirstmodule$salestrackingtable" ("myfirstmodule$salestrackingtable_products" ASC,"id" ASC);
DELETE FROM "mendixsystem$association"  WHERE "id" = 'be83fdb4-31bf-4540-8c68-dff1943ff1ae';
DELETE FROM "mendixsystem$index"  WHERE "id" = 'cf040288-5f8a-32be-8607-e358e3846ac3';
DELETE FROM "mendixsystem$index_column"  WHERE "index_id" = 'cf040288-5f8a-32be-8607-e358e3846ac3';
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('cf040288-5f8a-32be-8607-e358e3846ac3', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'idx_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_products');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('cf040288-5f8a-32be-8607-e358e3846ac3', 'f46431ec-aad6-42fd-a22f-29f100d0143c', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('f46431ec-aad6-42fd-a22f-29f100d0143c', 'MyFirstModule.SalesTrackingTable_Products', 'myfirstmodule$salestrackingtable', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'id', 'myfirstmodule$salestrackingtable_products', 'frn_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_products', 2, 1);
DELETE FROM "mendixsystem$entity"  WHERE "id" = 'be56dfbf-4362-48b9-90af-d184247fc22a';
DELETE FROM "mendixsystem$entityidentifier"  WHERE "id" = 'be56dfbf-4362-48b9-90af-d184247fc22a';
DELETE FROM "mendixsystem$sequence"  WHERE "attribute_id" IN ( SELECT "id" FROM "mendixsystem$attribute" WHERE "entity_id" = 'be56dfbf-4362-48b9-90af-d184247fc22a' );
DELETE FROM "mendixsystem$remote_primary_key"  WHERE "entity_id" = 'be56dfbf-4362-48b9-90af-d184247fc22a';
DELETE FROM "mendixsystem$attribute"  WHERE "entity_id" = 'be56dfbf-4362-48b9-90af-d184247fc22a';
DELETE FROM "mendixsystem$index"  WHERE "table_id" = 'be56dfbf-4362-48b9-90af-d184247fc22a';
DELETE FROM "mendixsystem$index_column"  WHERE "index_id" IN ('0bd09435-3184-37b5-bb52-d93a9ae530ef', '1ce4bfe0-85df-3d0d-abd4-1314fe5e30b6');
DELETE FROM "mendixsystem$association"  WHERE "id" = '21b8c886-44d0-3e39-baaa-54f2f3f921a5';
DELETE FROM "mendixsystem$association"  WHERE "id" = '7da805ad-d275-344e-8dac-db69c6a2e7ba';
CREATE TABLE "myfirstmodule$products" (
	"id" BIGINT NOT NULL,
	"productname" VARCHAR_IGNORECASE(200) NULL,
	"color" VARCHAR_IGNORECASE(6) NULL,
	"safetystocklevel" INT NULL,
	"listprice" DECIMAL(28, 8) NULL,
	"size" VARCHAR_IGNORECASE(10) NULL,
	"weight" DECIMAL(28, 8) NULL,
	"style" VARCHAR_IGNORECASE(200) NULL,
	"modelname" VARCHAR_IGNORECASE(200) NULL,
	"status" VARCHAR_IGNORECASE(7) NULL,
	"createddate" TIMESTAMP NULL,
	"changeddate" TIMESTAMP NULL,
	"system$owner" BIGINT NULL,
	"system$changedby" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$products_system$owner" ON "myfirstmodule$products" ("system$owner" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$products_system$changedby" ON "myfirstmodule$products" ("system$changedby" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'MyFirstModule.Products', 'myfirstmodule$products', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('4980db81-3cfe-408a-9b46-dfa12a4c3a94', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'ProductName', 'productname', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('b693d825-c973-4a9d-ab4a-78c6dc05e974', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'Color', 'color', 40, 6, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('6278f981-b348-451e-a855-67345fd9e5fd', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'SafetyStockLevel', 'safetystocklevel', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('28acc74b-595a-4750-a641-b93e7f2da908', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'ListPrice', 'listprice', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('fbba2f65-1669-46be-9b6b-c413bd87943d', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'Size', 'size', 40, 10, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('9952d568-0c3f-4992-9f50-27c4c99524dd', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'Weight', 'weight', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('71fbe9e6-3cd2-478b-9458-c34aca873b4d', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'Style', 'style', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('33844f27-5106-4308-a628-02717b0a33f5', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'ModelName', 'modelname', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('40aef613-40af-4845-a22b-7679c3548f26', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'Status', 'status', 40, 7, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('4cbe3ace-bb0f-3bf4-b581-6eac940dd790', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('7bfa24e0-bdfb-3918-8f30-e604c5ffc61f', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'changedDate', 'changeddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('bee78831-1649-35f8-ad4f-2d3423b8448c', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'idx_myfirstmodule$products_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('bee78831-1649-35f8-ad4f-2d3423b8448c', '42d1085c-6870-39ab-a57b-62de9cc15146', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('a24c5554-08de-37d6-a5a7-e60e9a6534d7', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', 'idx_myfirstmodule$products_system$changedby');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('a24c5554-08de-37d6-a5a7-e60e9a6534d7', '7c5d648f-9c2d-3a0e-a1c3-e70ad846f211', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('42d1085c-6870-39ab-a57b-62de9cc15146', 'System.owner', 'myfirstmodule$products', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner', 'frn_myfirstmodule$products_system$owner', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('7c5d648f-9c2d-3a0e-a1c3-e70ad846f211', 'System.changedBy', 'myfirstmodule$products', 'dfd1b4df-440b-490d-94d4-ab38bd25be9d', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$changedby', 'frn_myfirstmodule$products_system$changedby', 2, 1);
ALTER TABLE "myfirstmodule$salestrackingtable" ADD CONSTRAINT "frn_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_products" FOREIGN KEY ( "myfirstmodule$salestrackingtable_products" ) REFERENCES "myfirstmodule$products" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$products" ADD CONSTRAINT "frn_myfirstmodule$products_system$changedby" FOREIGN KEY ( "system$changedby" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$products" ADD CONSTRAINT "frn_myfirstmodule$products_system$owner" FOREIGN KEY ( "system$owner" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
DROP TABLE "440f7a305dcf46eab8af9b1e9634d887";
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20250513 15:56:33';
