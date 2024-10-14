import { relations } from 'drizzle-orm';
import { pgTable, text, varchar } from 'drizzle-orm/pg-core';

import { generateId } from '@/lib/id';

import { products } from './products';
import { subcategories } from './subcategories';
import { lifecycleDates } from './utils';
import { categoryPetTypes } from './categoryPetTypes';

export const categories = pgTable('categories', {
	id: varchar('id', { length: 30 }).$defaultFn(() => generateId()).primaryKey(),
	name: text('name').notNull().unique(),
	slug: text('slug').notNull().unique(),
	image: text('image'),
	description: text('description'),
	...lifecycleDates,
});

export const categoriesRelations = relations(categories, ({ many }) => ({
	categoryPetTypes: many(categoryPetTypes),
	products: many(products),
	subcategories: many(subcategories),
}));

export type Category = typeof categories.$inferSelect;
export type NewCategory = typeof categories.$inferInsert;
