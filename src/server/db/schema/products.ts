import { generateId } from '@/lib/id';
import { relations } from 'drizzle-orm';
import { decimal, index, integer, json, pgEnum, pgTable, text, varchar } from 'drizzle-orm/pg-core';
import { categories } from './categories';
import { subcategories } from './subcategories';
import { type ProductFile } from '@/types';
import { petTypes } from './petTipes';

export const productStatusEnum = pgEnum('product_status', [ 'disponible', 'agotado', 'descontinuado' ]);

export const products = pgTable(
	'products',
	{
		id: varchar('id', { length: 30 }).$defaultFn(() => generateId()).primaryKey(),
		name: text('name').notNull(),
		price: decimal('price', { precision: 10, scale: 2 }).notNull().default('0'),
		originalPrice: decimal('original_price', {
			precision: 10,
			scale: 2,
		}).default('0'),
		description: text('description'),
		images: json("images").$type<ProductFile[] | null>().default(null),
		rating: integer('rating').notNull().default(0),
		inventory: integer('inventory').notNull().default(0),
		status: productStatusEnum('status').notNull().default('disponible'),
		petTypeId: varchar('pet_type_id', { length: 30 }).references(() => petTypes.id),
		categoryId: varchar('category_id', { length: 30 })
			.references(() => categories.id, { onDelete: 'cascade' })
			.notNull(),
		subcategoryId: varchar('subcategory_id', { length: 30 }).references(() => subcategories.id, {
			onDelete: 'cascade',
		}),
	},
	(table) => ({
		petTypeIdIdx: index('products_pet_type_id_idx').on(table.petTypeId),
		categoryIdIdx: index('products_category_id_idx').on(table.categoryId),
		subcategoryIdIdx: index('products_subcategory_id_idx').on(table.subcategoryId),
	})
);

export const productsRelations = relations(products, ({ one, many }) => ({
	petType: one(petTypes, {
		fields: [ products.petTypeId ],
		references: [ petTypes.id ],
	}),
	category: one(categories, {
		fields: [ products.categoryId ],
		references: [ categories.id ],
	}),
	subcategory: one(subcategories, {
		fields: [ products.subcategoryId ],
		references: [ subcategories.id ],
	}),
}));

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
