CREATE SEQUENCE "myfirstmodule$salestrackingtable_salesid_mxseq" AS BIGINT START WITH 1;
ALTER TABLE "myfirstmodule$salestrackingtable" ADD "salesid" BIGINT NULL;
UPDATE "myfirstmodule$salestrackingtable" SET "salesid" = NEXT VALUE FOR "myfirstmodule$salestrackingtable_salesid_mxseq";
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('b26fa125-c2df-49c2-b031-8d6f00e55f80', '0d3be470-3d3d-4edc-867c-8e6478678ce1', 'SalesID', 'salesid', 0, 0, '1', true);
INSERT INTO "mendixsystem$sequence" ("attribute_id", "name", "start_value", "current_value") VALUES ('b26fa125-c2df-49c2-b031-8d6f00e55f80', 'myfirstmodule$salestrackingtable_salesid_mxseq', 1, 2);
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20250513 20:19:02';
