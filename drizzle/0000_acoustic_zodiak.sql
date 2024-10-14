DO $$ BEGIN
 CREATE TYPE "public"."product_status" AS ENUM('disponible', 'agotado', 'descontinuado');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."user_roles" AS ENUM('ADMIN', 'USER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "categories" (
	"id" varchar(30) PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"image" text,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT current_timestamp,
	CONSTRAINT "categories_name_unique" UNIQUE("name"),
	CONSTRAINT "categories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "category_pet_types" (
	"category_id" varchar(30) NOT NULL,
	"pet_type_id" varchar(30) NOT NULL,
	CONSTRAINT "category_pet_types_category_id_pet_type_id_pk" PRIMARY KEY("category_id","pet_type_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pet_types" (
	"id" varchar(30) PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"imageUrl" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT current_timestamp,
	CONSTRAINT "pet_types_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" varchar(30) PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"price" numeric(10, 2) DEFAULT '0' NOT NULL,
	"original_price" numeric(10, 2) DEFAULT '0',
	"description" text,
	"images" json DEFAULT 'null'::json,
	"rating" integer DEFAULT 0 NOT NULL,
	"inventory" integer DEFAULT 0 NOT NULL,
	"status" "product_status" DEFAULT 'disponible' NOT NULL,
	"pet_type_id" varchar(30),
	"category_id" varchar(30) NOT NULL,
	"subcategory_id" varchar(30)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subcategories" (
	"id" varchar(30) PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"description" text,
	"category_id" varchar(30) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT current_timestamp,
	CONSTRAINT "subcategories_name_unique" UNIQUE("name"),
	CONSTRAINT "subcategories_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pet-store_account" (
	"user_id" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"provider" varchar(255) NOT NULL,
	"provider_account_id" varchar(255) NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" varchar(255),
	"scope" varchar(255),
	"id_token" text,
	"session_state" varchar(255),
	CONSTRAINT "pet-store_account_provider_provider_account_id_pk" PRIMARY KEY("provider","provider_account_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pet-store_post" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"created_by" varchar(255) NOT NULL,
	"created_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pet-store_session" (
	"session_token" varchar(255) PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"expires" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pet-store_user" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"email" varchar(255) NOT NULL,
	"password" varchar(255),
	"email_verified" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"image" varchar(255),
	"role" "user_roles" DEFAULT 'USER' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pet-store_verification_token" (
	"identifier" varchar(255) NOT NULL,
	"token" varchar(255) NOT NULL,
	"expires" timestamp with time zone NOT NULL,
	CONSTRAINT "pet-store_verification_token_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "category_pet_types" ADD CONSTRAINT "category_pet_types_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "category_pet_types" ADD CONSTRAINT "category_pet_types_pet_type_id_pet_types_id_fk" FOREIGN KEY ("pet_type_id") REFERENCES "public"."pet_types"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_pet_type_id_pet_types_id_fk" FOREIGN KEY ("pet_type_id") REFERENCES "public"."pet_types"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_subcategory_id_subcategories_id_fk" FOREIGN KEY ("subcategory_id") REFERENCES "public"."subcategories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "subcategories" ADD CONSTRAINT "subcategories_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pet-store_account" ADD CONSTRAINT "pet-store_account_user_id_pet-store_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."pet-store_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pet-store_post" ADD CONSTRAINT "pet-store_post_created_by_pet-store_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."pet-store_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pet-store_session" ADD CONSTRAINT "pet-store_session_user_id_pet-store_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."pet-store_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "products_pet_type_id_idx" ON "products" USING btree ("pet_type_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "products_category_id_idx" ON "products" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "products_subcategory_id_idx" ON "products" USING btree ("subcategory_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "subcategories_category_id_idx" ON "subcategories" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "account_user_id_idx" ON "pet-store_account" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "created_by_idx" ON "pet-store_post" USING btree ("created_by");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "pet-store_post" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "session_user_id_idx" ON "pet-store_session" USING btree ("user_id");