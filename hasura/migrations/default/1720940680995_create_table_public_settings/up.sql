CREATE TABLE "public"."settings" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "is_under_maintenance" boolean NOT NULL DEFAULT false, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
