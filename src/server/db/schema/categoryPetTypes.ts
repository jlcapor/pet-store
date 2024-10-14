import { pgTable, primaryKey, varchar } from 'drizzle-orm/pg-core';
import { categories } from './categories';
import { petTypes } from './petTipes';
import { relations } from 'drizzle-orm';

export const categoryPetTypes = pgTable('category_pet_types', {
	categoryId: varchar('category_id', { length: 30 })
		.references(() => categories.id, { onDelete: 'cascade' })
		.notNull(),
	petTypeId: varchar('pet_type_id', { length: 30 })
        .references(() => petTypes.id, { onDelete: 'cascade' })
        .notNull(),
},
(t) => ({
    pk: primaryKey({ columns: [t.categoryId, t.petTypeId] }),
  }),
);

export const categoryPetTypesRelations = relations(categoryPetTypes, ({ one }) => ({
	category: one(categories, {
		fields: [ categoryPetTypes.categoryId ],
		references: [ categories.id ],
	}),
	petType: one(petTypes, {
		fields: [ categoryPetTypes.petTypeId ],
		references: [ petTypes.id ],
	}),
}));
