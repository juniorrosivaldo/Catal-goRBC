import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const requests = sqliteTable('motor_requests', {
 id: text('id').primaryKey(), name: text('name').notNull(), contact: text('contact').notNull(), company: text('company').notNull(), kind: text('kind').notNull(), product: text('product').notNull(), power: text('power').notNull(), voltage: text('voltage').notNull(), poles: text('poles').notNull(), details: text('details').notNull(), status: text('status').notNull().default('Novo'), notes: text('notes').notNull().default(''), createdAt: text('created_at').notNull()
});

export const motorRecords = sqliteTable('motor_records', {id: text('id').primaryKey(), data: text('data').notNull(), updatedAt: text('updated_at').notNull()});
