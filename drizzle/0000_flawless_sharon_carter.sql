CREATE TABLE `motor_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`contact` text NOT NULL,
	`company` text NOT NULL,
	`kind` text NOT NULL,
	`product` text NOT NULL,
	`power` text NOT NULL,
	`voltage` text NOT NULL,
	`poles` text NOT NULL,
	`details` text NOT NULL,
	`created_at` text NOT NULL
);
