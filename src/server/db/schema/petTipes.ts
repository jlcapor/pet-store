import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { lifecycleDates } from "./utils";
import { categories } from "./categories";
import { relations } from "drizzle-orm";
import { generateId } from "@/lib/id";
import { categoryPetTypes } from "./categoryPetTypes";
import { products } from "./products";

export const petTypes = pgTable('pet_types', {
	id: varchar('id', { length: 30 }).$defaultFn(() => generateId()).primaryKey(),
	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),
	imageUrl: text('imageUrl'),
    ...lifecycleDates,
});

export const petTypesRelations = relations(petTypes, ({ many }) => ({
	products: many(products),
	categoryPetTypes: many(categoryPetTypes),
}));

export type PetType = typeof petTypes.$inferSelect;
export type NewPetType = typeof petTypes.$inferInsert; 