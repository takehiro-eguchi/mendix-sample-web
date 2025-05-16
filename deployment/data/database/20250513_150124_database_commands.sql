CREATE TABLE "myfirstmodule$salestrackingtable" (
	"id" BIGINT NOT NULL,
	"orderquantity" INT NULL,
	"unitprice" DECIMAL(28, 8) NULL,
	"discountamount" DECIMAL(28, 8) NULL,
	"productstandardcost" DECIMAL(28, 8) NULL,
	"taxamt" DECIMAL(28, 8) NULL,
	"orderdate" TIMESTAMP NULL,
	"shipdate" TIMESTAMP NULL,
	"duedate" TIMESTAMP NULL,
	"createddate" TIMESTAMP NULL,
	"changeddate" TIMESTAMP NULL,
	"myfirstmodule$salestrackingtable_customers" BIGINT NULL,
	"myfirstmodule$salestrackingtable_salespersons" BIGINT NULL,
	"system$changedby" BIGINT NULL,
	"myfirstmodule$salestrackingtable_products" BIGINT NULL,
	"myfirstmodule$salestrackingtable_locations" BIGINT NULL,
	"system$owner" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_customers" ON "myfirstmodule$salestrackingtable" ("myfirstmodule$salestrackingtable_customers" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_salespersons" ON "myfirstmodule$salestrackingtable" ("myfirstmodule$salestrackingtable_salespersons" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$salestrackingtable_system$changedby" ON "myfirstmodule$salestrackingtable" ("system$changedby" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_products" ON "myfirstmodule$salestrackingtable" ("myfirstmodule$salestrackingtable_products" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_locations" ON "myfirstmodule$salestrackingtable" ("myfirstmodule$salestrackingtable_locations" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$salestrackingtable_system$owner" ON "myfirstmodule$salestrackingtable" ("system$owner" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('0d3be470-3d3d-4edc-867c-8e6478678ce1', 'MyFirstModule.SalesTrackingTable', 'myfirstmodule$salestrackingtable', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('b8d69907-1a55-4540-8be8-633dd6fdeeba', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'OrderQuantity', 'orderquantity', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('ba10b803-38c5-4611-be9c-80ec8d85497b', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'UnitPrice', 'unitprice', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('84ca310f-0608-421c-bddd-f0513d7bccb2', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'DiscountAmount', 'discountamount', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('6bdfb0ba-391d-469c-9eb0-f592947fc5b1', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'ProductStandardCost', 'productstandardcost', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('25553521-bfe0-412e-aef0-95058f7d29ad', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'TaxAmt', 'taxamt', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('6f496ef2-411e-4cb6-b367-b34cc34b8d7c', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'OrderDate', 'orderdate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('7453b3fa-de70-46cf-8d83-c44d4c97c3ff', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'ShipDate', 'shipdate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('61f6026e-4303-4e66-8750-4a3ad9027dac', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'DueDate', 'duedate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('f9d74796-39fc-3d16-acf9-98ac2b06ffc5', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('df2e1c2b-8a21-3de6-b790-2fef234e3455', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'changedDate', 'changeddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('4b03ffc6-af7e-3b6a-aecc-034c1f2613df', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'idx_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_customers');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('4b03ffc6-af7e-3b6a-aecc-034c1f2613df', '8f312301-847c-4804-b277-0f3b0316ce11', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('64291095-6eb7-34a6-b354-93cb32b969b8', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'idx_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_salespersons');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('64291095-6eb7-34a6-b354-93cb32b969b8', '234fbac5-71ab-47c9-baf3-dd71dba000fe', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('fda390b0-4126-3d3e-aa13-da23784fff78', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'idx_myfirstmodule$salestrackingtable_system$changedby');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('fda390b0-4126-3d3e-aa13-da23784fff78', 'a2e2c444-a0a2-3dad-a18b-b0a8922b1e07', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('cf040288-5f8a-32be-8607-e358e3846ac3', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'idx_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_products');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('cf040288-5f8a-32be-8607-e358e3846ac3', 'be83fdb4-31bf-4540-8c68-dff1943ff1ae', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('6e39155b-9658-3971-88be-bbdcfeae47cf', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'idx_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_locations');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('6e39155b-9658-3971-88be-bbdcfeae47cf', 'a92d1e47-b004-438d-b949-8ab49c245b56', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('243f3450-d534-305f-a4e3-ebed6819eb95', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'idx_myfirstmodule$salestrackingtable_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('243f3450-d534-305f-a4e3-ebed6819eb95', 'ead330f6-b28f-3a05-a5af-4f9973af9860', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('8f312301-847c-4804-b277-0f3b0316ce11', 'MyFirstModule.SalesTrackingTable_Customers', 'myfirstmodule$salestrackingtable', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'a77a5039-cbd1-4c10-8059-65284bd081ed', 'id', 'myfirstmodule$salestrackingtable_customers', 'frn_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_customers', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('234fbac5-71ab-47c9-baf3-dd71dba000fe', 'MyFirstModule.SalesTrackingTable_SalesPersons', 'myfirstmodule$salestrackingtable', '0d3be470-3d3d-4edc-867c-8e6478678ce1', '2debcef0-1a94-483a-b0fa-89b0fcff7294', 'id', 'myfirstmodule$salestrackingtable_salespersons', 'frn_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_salespersons', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('a2e2c444-a0a2-3dad-a18b-b0a8922b1e07', 'System.changedBy', 'myfirstmodule$salestrackingtable', '0d3be470-3d3d-4edc-867c-8e6478678ce1', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$changedby', 'frn_myfirstmodule$salestrackingtable_system$changedby', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('be83fdb4-31bf-4540-8c68-dff1943ff1ae', 'MyFirstModule.SalesTrackingTable_Products', 'myfirstmodule$salestrackingtable', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'be56dfbf-4362-48b9-90af-d184247fc22a', 'id', 'myfirstmodule$salestrackingtable_products', 'frn_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_products', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('a92d1e47-b004-438d-b949-8ab49c245b56', 'MyFirstModule.SalesTrackingTable_Locations', 'myfirstmodule$salestrackingtable', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'e2bb6050-e9d1-4fe9-8a39-9045ef83a82b', 'id', 'myfirstmodule$salestrackingtable_locations', 'frn_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_locations', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('ead330f6-b28f-3a05-a5af-4f9973af9860', 'System.owner', 'myfirstmodule$salestrackingtable', '0d3be470-3d3d-4edc-867c-8e6478678ce1', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner', 'frn_myfirstmodule$salestrackingtable_system$owner', 2, 1);
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
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('be56dfbf-4362-48b9-90af-d184247fc22a', 'MyFirstModule.Products', 'myfirstmodule$products', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('a0341b14-4cef-4f4b-bb7c-c133b5415d4d', 'be56dfbf-4362-48b9-90af-d184247fc22a', 'ProductName', 'productname', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('83e984fd-cdd2-49f6-9d5c-be59a11d99ec', 'be56dfbf-4362-48b9-90af-d184247fc22a', 'Color', 'color', 40, 6, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('627adabf-e791-4a21-877a-91a1f8f3dc19', 'be56dfbf-4362-48b9-90af-d184247fc22a', 'SafetyStockLevel', 'safetystocklevel', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('bc6dbfa5-2f9d-480f-9189-68edad9ecf54', 'be56dfbf-4362-48b9-90af-d184247fc22a', 'ListPrice', 'listprice', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('facdd1c3-83cb-4c52-98de-a7d4e09fcb8b', 'be56dfbf-4362-48b9-90af-d184247fc22a', 'Size', 'size', 40, 10, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('05fff0c0-903e-400f-89de-5fae7ec412e4', 'be56dfbf-4362-48b9-90af-d184247fc22a', 'Weight', 'weight', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('8e817f62-6b2c-4098-b22e-6ec89a27b68b', 'be56dfbf-4362-48b9-90af-d184247fc22a', 'Style', 'style', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('830a687e-26f6-474e-9816-13b179116260', 'be56dfbf-4362-48b9-90af-d184247fc22a', 'ModelName', 'modelname', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('9d56802a-b908-41f7-9d55-679f78b1a0e8', 'be56dfbf-4362-48b9-90af-d184247fc22a', 'Status', 'status', 40, 7, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('98042ca7-68c2-3db8-8b36-65eb27dd971b', 'be56dfbf-4362-48b9-90af-d184247fc22a', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('45aabba8-1525-39f7-9f88-2eea7afa6e0d', 'be56dfbf-4362-48b9-90af-d184247fc22a', 'changedDate', 'changeddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('0bd09435-3184-37b5-bb52-d93a9ae530ef', 'be56dfbf-4362-48b9-90af-d184247fc22a', 'idx_myfirstmodule$products_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('0bd09435-3184-37b5-bb52-d93a9ae530ef', '21b8c886-44d0-3e39-baaa-54f2f3f921a5', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('1ce4bfe0-85df-3d0d-abd4-1314fe5e30b6', 'be56dfbf-4362-48b9-90af-d184247fc22a', 'idx_myfirstmodule$products_system$changedby');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('1ce4bfe0-85df-3d0d-abd4-1314fe5e30b6', '7da805ad-d275-344e-8dac-db69c6a2e7ba', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('21b8c886-44d0-3e39-baaa-54f2f3f921a5', 'System.owner', 'myfirstmodule$products', 'be56dfbf-4362-48b9-90af-d184247fc22a', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner', 'frn_myfirstmodule$products_system$owner', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('7da805ad-d275-344e-8dac-db69c6a2e7ba', 'System.changedBy', 'myfirstmodule$products', 'be56dfbf-4362-48b9-90af-d184247fc22a', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$changedby', 'frn_myfirstmodule$products_system$changedby', 2, 1);
CREATE TABLE "myfirstmodule$salespersons" (
	"id" BIGINT NOT NULL,
	"salespersonname" VARCHAR_IGNORECASE(200) NULL,
	"salespersonlastname" VARCHAR_IGNORECASE(200) NULL,
	"salespersontitle" VARCHAR_IGNORECASE(200) NULL,
	"hiredate" TIMESTAMP NULL,
	"birthdate" TIMESTAMP NULL,
	"maritialstatus" VARCHAR_IGNORECASE(8) NULL,
	"gender" VARCHAR_IGNORECASE(6) NULL,
	"monthlysalary" INT NULL,
	"status" VARCHAR_IGNORECASE(7) NULL,
	"createddate" TIMESTAMP NULL,
	"changeddate" TIMESTAMP NULL,
	"system$owner" BIGINT NULL,
	"system$changedby" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$salespersons_system$owner" ON "myfirstmodule$salespersons" ("system$owner" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$salespersons_system$changedby" ON "myfirstmodule$salespersons" ("system$changedby" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('2debcef0-1a94-483a-b0fa-89b0fcff7294', 'MyFirstModule.SalesPersons', 'myfirstmodule$salespersons', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('4483019c-6106-4f91-a80b-4763f3d418c8', '2debcef0-1a94-483a-b0fa-89b0fcff7294', 'SalesPersonName', 'salespersonname', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('17587270-22fc-4c41-bc96-106bbb9ae23b', '2debcef0-1a94-483a-b0fa-89b0fcff7294', 'SalesPersonLastName', 'salespersonlastname', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('62fb52c7-e9b9-45d5-8b73-97f837aa2f2e', '2debcef0-1a94-483a-b0fa-89b0fcff7294', 'SalesPersonTitle', 'salespersontitle', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('e830f297-fb74-4fb1-b7bc-56a1e7f17b69', '2debcef0-1a94-483a-b0fa-89b0fcff7294', 'HireDate', 'hiredate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('5e17c22a-2f16-46f6-abc4-65b823f4c029', '2debcef0-1a94-483a-b0fa-89b0fcff7294', 'BirthDate', 'birthdate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('2675004b-cc15-47b3-83bb-1c9a6412f2e8', '2debcef0-1a94-483a-b0fa-89b0fcff7294', 'MaritialStatus', 'maritialstatus', 40, 8, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('8f9e896a-7c74-429a-b6f7-46b992a364a9', '2debcef0-1a94-483a-b0fa-89b0fcff7294', 'Gender', 'gender', 40, 6, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('a4f72078-2c65-4bea-aef7-da1c0191902c', '2debcef0-1a94-483a-b0fa-89b0fcff7294', 'MonthlySalary', 'monthlysalary', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('04d6cf6d-98dd-4719-a609-392a86e429be', '2debcef0-1a94-483a-b0fa-89b0fcff7294', 'Status', 'status', 40, 7, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('05cd662b-cb1e-340a-8cbb-09cb94c33a45', '2debcef0-1a94-483a-b0fa-89b0fcff7294', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('010d5966-093c-3222-882d-fd1dd8b82706', '2debcef0-1a94-483a-b0fa-89b0fcff7294', 'changedDate', 'changeddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('636b78ad-8f68-3fa0-821a-cdb3397d8de4', '2debcef0-1a94-483a-b0fa-89b0fcff7294', 'idx_myfirstmodule$salespersons_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('636b78ad-8f68-3fa0-821a-cdb3397d8de4', '5dc8c2d6-18c3-314d-a44f-d61914c2d58c', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('ed065a89-7610-38f5-83b9-b428cf444254', '2debcef0-1a94-483a-b0fa-89b0fcff7294', 'idx_myfirstmodule$salespersons_system$changedby');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('ed065a89-7610-38f5-83b9-b428cf444254', '1baab6a4-3270-3ee1-ab7b-41a1175d9987', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('5dc8c2d6-18c3-314d-a44f-d61914c2d58c', 'System.owner', 'myfirstmodule$salespersons', '2debcef0-1a94-483a-b0fa-89b0fcff7294', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner', 'frn_myfirstmodule$salespersons_system$owner', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('1baab6a4-3270-3ee1-ab7b-41a1175d9987', 'System.changedBy', 'myfirstmodule$salespersons', '2debcef0-1a94-483a-b0fa-89b0fcff7294', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$changedby', 'frn_myfirstmodule$salespersons_system$changedby', 2, 1);
CREATE TABLE "myfirstmodule$locations" (
	"id" BIGINT NOT NULL,
	"state" VARCHAR_IGNORECASE(200) NULL,
	"city" VARCHAR_IGNORECASE(200) NULL,
	"country" VARCHAR_IGNORECASE(200) NULL,
	"longitude" DECIMAL(28, 8) NULL,
	"latitude" DECIMAL(28, 8) NULL,
	"postalcode" INT NULL,
	"createddate" TIMESTAMP NULL,
	"changeddate" TIMESTAMP NULL,
	"system$owner" BIGINT NULL,
	"system$changedby" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$locations_system$owner" ON "myfirstmodule$locations" ("system$owner" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$locations_system$changedby" ON "myfirstmodule$locations" ("system$changedby" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('e2bb6050-e9d1-4fe9-8a39-9045ef83a82b', 'MyFirstModule.Locations', 'myfirstmodule$locations', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('e601491f-8d04-4bce-83f6-f5524b98bc6a', 'e2bb6050-e9d1-4fe9-8a39-9045ef83a82b', 'State', 'state', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('fb82f4f9-adfd-46d0-8374-4da75f7474e7', 'e2bb6050-e9d1-4fe9-8a39-9045ef83a82b', 'City', 'city', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('4c1cf404-07e1-4de8-a029-f307fffd9536', 'e2bb6050-e9d1-4fe9-8a39-9045ef83a82b', 'Country', 'country', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('cd215c10-4e0a-46fd-8d63-e27946606a45', 'e2bb6050-e9d1-4fe9-8a39-9045ef83a82b', 'Longitude', 'longitude', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('249d1c5a-62f4-467f-b5f4-c52e47e8c301', 'e2bb6050-e9d1-4fe9-8a39-9045ef83a82b', 'Latitude', 'latitude', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('a45183f8-3112-4c62-b4ca-71e8ad7631c7', 'e2bb6050-e9d1-4fe9-8a39-9045ef83a82b', 'PostalCode', 'postalcode', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('a0bc34ea-d944-3485-9ddf-e42aff0979ec', 'e2bb6050-e9d1-4fe9-8a39-9045ef83a82b', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('3ab0ab85-b719-36fa-b860-4cf2a54907f9', 'e2bb6050-e9d1-4fe9-8a39-9045ef83a82b', 'changedDate', 'changeddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('6235d6bf-aca9-3b0e-9db5-cc37a5415b85', 'e2bb6050-e9d1-4fe9-8a39-9045ef83a82b', 'idx_myfirstmodule$locations_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('6235d6bf-aca9-3b0e-9db5-cc37a5415b85', '34c7806a-68ae-316e-8eb8-5e90989cf4ee', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('3c10c4c8-e56a-359e-bb4e-4097d567aac5', 'e2bb6050-e9d1-4fe9-8a39-9045ef83a82b', 'idx_myfirstmodule$locations_system$changedby');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('3c10c4c8-e56a-359e-bb4e-4097d567aac5', 'eddc90b8-a312-3672-b023-71e5b69dc2f5', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('34c7806a-68ae-316e-8eb8-5e90989cf4ee', 'System.owner', 'myfirstmodule$locations', 'e2bb6050-e9d1-4fe9-8a39-9045ef83a82b', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner', 'frn_myfirstmodule$locations_system$owner', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('eddc90b8-a312-3672-b023-71e5b69dc2f5', 'System.changedBy', 'myfirstmodule$locations', 'e2bb6050-e9d1-4fe9-8a39-9045ef83a82b', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$changedby', 'frn_myfirstmodule$locations_system$changedby', 2, 1);
CREATE TABLE "myfirstmodule$customers" (
	"id" BIGINT NOT NULL,
	"firstname" VARCHAR_IGNORECASE(200) NULL,
	"lastname" VARCHAR_IGNORECASE(200) NULL,
	"birthdate" TIMESTAMP NULL,
	"maritialstatus" VARCHAR_IGNORECASE(8) NULL,
	"gender" VARCHAR_IGNORECASE(6) NULL,
	"mailaddress" VARCHAR_IGNORECASE(200) NULL,
	"phonenumber" VARCHAR_IGNORECASE(200) NULL,
	"averageyearlyincome" DECIMAL(28, 8) NULL,
	"averagesalesorderquantity" INT NULL,
	"createddate" TIMESTAMP NULL,
	"changeddate" TIMESTAMP NULL,
	"system$owner" BIGINT NULL,
	"system$changedby" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$customers_system$owner" ON "myfirstmodule$customers" ("system$owner" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$customers_system$changedby" ON "myfirstmodule$customers" ("system$changedby" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('a77a5039-cbd1-4c10-8059-65284bd081ed', 'MyFirstModule.Customers', 'myfirstmodule$customers', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('a6569b4f-bdc8-4549-95fb-3c720de7718b', 'a77a5039-cbd1-4c10-8059-65284bd081ed', 'FirstName', 'firstname', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('9529c986-d7b7-4546-ae7f-48cbfaa3bf0c', 'a77a5039-cbd1-4c10-8059-65284bd081ed', 'LastName', 'lastname', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('3c18cd0e-63ec-46ab-b751-16c1d8ba98e6', 'a77a5039-cbd1-4c10-8059-65284bd081ed', 'BirthDate', 'birthdate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('e2580733-4d21-429a-8cbe-2b7e31bfaa10', 'a77a5039-cbd1-4c10-8059-65284bd081ed', 'MaritialStatus', 'maritialstatus', 40, 8, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('6032b036-0fed-4d9e-bae5-216d0f6dba95', 'a77a5039-cbd1-4c10-8059-65284bd081ed', 'Gender', 'gender', 40, 6, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('8951f9fb-ba95-499e-9623-f9a8fba29c49', 'a77a5039-cbd1-4c10-8059-65284bd081ed', 'MailAddress', 'mailaddress', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('200caae9-0010-4917-80fa-b42ba7646580', 'a77a5039-cbd1-4c10-8059-65284bd081ed', 'PhoneNumber', 'phonenumber', 30, 200, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('5929362b-eb11-45af-96f3-904770c93cc8', 'a77a5039-cbd1-4c10-8059-65284bd081ed', 'AverageYearlyIncome', 'averageyearlyincome', 5, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('a5fa16e7-24f3-4b20-86de-6f4afa44d4a2', 'a77a5039-cbd1-4c10-8059-65284bd081ed', 'AverageSalesOrderQuantity', 'averagesalesorderquantity', 3, 0, '0', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('7020b1b3-6b11-33e9-bd1f-8c40750a2486', 'a77a5039-cbd1-4c10-8059-65284bd081ed', 'createdDate', 'createddate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('7b470c64-a890-386e-8067-a6cb572dfc36', 'a77a5039-cbd1-4c10-8059-65284bd081ed', 'changedDate', 'changeddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('167a10ba-2d24-35ef-b471-187efb928c56', 'a77a5039-cbd1-4c10-8059-65284bd081ed', 'idx_myfirstmodule$customers_system$owner');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('167a10ba-2d24-35ef-b471-187efb928c56', 'f378d274-4160-3cd3-b333-490b690ff488', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('41a4d27d-652a-3e59-b6bf-a04c60956c2c', 'a77a5039-cbd1-4c10-8059-65284bd081ed', 'idx_myfirstmodule$customers_system$changedby');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('41a4d27d-652a-3e59-b6bf-a04c60956c2c', '0d79fe8f-e721-317d-bcc4-b38b453be505', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('f378d274-4160-3cd3-b333-490b690ff488', 'System.owner', 'myfirstmodule$customers', 'a77a5039-cbd1-4c10-8059-65284bd081ed', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$owner', 'frn_myfirstmodule$customers_system$owner', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('0d79fe8f-e721-317d-bcc4-b38b453be505', 'System.changedBy', 'myfirstmodule$customers', 'a77a5039-cbd1-4c10-8059-65284bd081ed', '282e2e60-88a5-469d-84a5-ba8d9151644f', 'id', 'system$changedby', 'frn_myfirstmodule$customers_system$changedby', 2, 1);
ALTER TABLE "myfirstmodule$salestrackingtable" ADD CONSTRAINT "frn_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_customers" FOREIGN KEY ( "myfirstmodule$salestrackingtable_customers" ) REFERENCES "myfirstmodule$customers" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$salestrackingtable" ADD CONSTRAINT "frn_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_salespersons" FOREIGN KEY ( "myfirstmodule$salestrackingtable_salespersons" ) REFERENCES "myfirstmodule$salespersons" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$salestrackingtable" ADD CONSTRAINT "frn_myfirstmodule$salestrackingtable_system$changedby" FOREIGN KEY ( "system$changedby" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$salestrackingtable" ADD CONSTRAINT "frn_myfirstmodule$salestrackingtable_system$owner" FOREIGN KEY ( "system$owner" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$salestrackingtable" ADD CONSTRAINT "frn_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_products" FOREIGN KEY ( "myfirstmodule$salestrackingtable_products" ) REFERENCES "myfirstmodule$products" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$salestrackingtable" ADD CONSTRAINT "frn_myfirstmodule$salestrackingtable_myfirstmodule$salestrackingtable_locations" FOREIGN KEY ( "myfirstmodule$salestrackingtable_locations" ) REFERENCES "myfirstmodule$locations" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$products" ADD CONSTRAINT "frn_myfirstmodule$products_system$changedby" FOREIGN KEY ( "system$changedby" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$products" ADD CONSTRAINT "frn_myfirstmodule$products_system$owner" FOREIGN KEY ( "system$owner" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$salespersons" ADD CONSTRAINT "frn_myfirstmodule$salespersons_system$changedby" FOREIGN KEY ( "system$changedby" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$salespersons" ADD CONSTRAINT "frn_myfirstmodule$salespersons_system$owner" FOREIGN KEY ( "system$owner" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$locations" ADD CONSTRAINT "frn_myfirstmodule$locations_system$owner" FOREIGN KEY ( "system$owner" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$locations" ADD CONSTRAINT "frn_myfirstmodule$locations_system$changedby" FOREIGN KEY ( "system$changedby" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$customers" ADD CONSTRAINT "frn_myfirstmodule$customers_system$changedby" FOREIGN KEY ( "system$changedby" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$customers" ADD CONSTRAINT "frn_myfirstmodule$customers_system$owner" FOREIGN KEY ( "system$owner" ) REFERENCES "system$user" ( "id" ) ON DELETE SET NULL;
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20250513 15:01:24';
