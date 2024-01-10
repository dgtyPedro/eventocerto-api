-- CreateTable
CREATE TABLE `Event` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `thumbnail` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `genre` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Event_id_key`(`id`),
    UNIQUE INDEX `Event_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
