-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `region` ENUM('SEOUL', 'INCHEON_GYEONGGI', 'GYEONGSANG', 'CHUNGCHEONG', 'JEOLLA', 'JEJU', 'GANGWON') NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,

    UNIQUE INDEX `users_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `megazines` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `body` VARCHAR(255) NOT NULL,
    `photoUrl` VARCHAR(255) NOT NULL,
    `link` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_fundings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `funding_id` INTEGER NOT NULL,
    `user_funded_money` BIGINT NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(100) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `funding_id` INTEGER NOT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fundings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `title` VARCHAR(10) NOT NULL,
    `description` VARCHAR(300) NOT NULL,
    `goal_money` BIGINT NOT NULL,
    `funded_money` INTEGER NOT NULL,
    `deadline_date` DATETIME(6) NOT NULL,
    `photo_url` VARCHAR(255) NOT NULL,
    `region` ENUM('SEOUL', 'INCHEON_GYEONGGI', 'GYEONGSANG', 'CHUNGCHEONG', 'JEOLLA', 'JEJU', 'GANGWON') NOT NULL,
    `detail_address` VARCHAR(30) NOT NULL,
    `complete_due_date` DATETIME(6) NOT NULL,
    `privacy_agreement` BOOLEAN NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_fundings` ADD CONSTRAINT `user_fundings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_fundings` ADD CONSTRAINT `user_fundings_funding_id_fkey` FOREIGN KEY (`funding_id`) REFERENCES `fundings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_funding_id_fkey` FOREIGN KEY (`funding_id`) REFERENCES `fundings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fundings` ADD CONSTRAINT `fundings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
