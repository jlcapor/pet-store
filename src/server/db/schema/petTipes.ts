import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { lifecycleDates } from "./utils";

export const petTypes = pgTable('petTypes', {
	id: varchar('id', { length: 30 }),
	name: text('name').notNull().unique(),
	slug: text('slug').notNull().unique(),
	imageUrl: text('imageUrl'),
	description: text('description'),
    ...lifecycleDates,
});