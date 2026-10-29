CREATE TABLE `motor_records` (
	`id` text PRIMARY KEY NOT NULL,
	`data` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
ALTER TABLE `motor_requests` ADD `status` text DEFAULT 'Novo' NOT NULL;--> statement-breakpoint
ALTER TABLE `motor_requests` ADD `notes` text DEFAULT '' NOT NULL;