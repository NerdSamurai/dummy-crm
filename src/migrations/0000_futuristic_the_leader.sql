CREATE TABLE IF NOT EXISTS "customer" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "customer_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1000 CACHE 1),
	"name" varchar(255) NOT NULL,
	"description" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "lead" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "lead_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1000 CACHE 1),
	"customer_id" integer NOT NULL,
	"status" smallint DEFAULT 0 NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "lead" ADD CONSTRAINT "lead_customer_id_customer_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customer"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
