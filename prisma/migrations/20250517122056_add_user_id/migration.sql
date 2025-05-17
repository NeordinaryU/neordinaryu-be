/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `inactiveDate` DATETIME(6) NULL,
    `CreatedAt` DATETIME(6) NOT NULL,
    `region` ENUM('SEOUL', 'INCHEON_GYEONGGI', 'GYEONGSANG', 'CHUNGCHEONG', 'GANGWON', 'JEOLLA', 'JEJU') NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Megazine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `UserId` INTEGER NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `body` VARCHAR(191) NOT NULL,
    `CreatedAt` DATETIME(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funding` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(191) NULL,
    `goalMoney` INTEGER NOT NULL,
    `fundedMoney` INTEGER NOT NULL,
    `deadlineDate` DATETIME(3) NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL,
    `UpdatedAt` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,
    `region` ENUM('SEOUL', 'INCHEON_GYEONGGI', 'GYEONGSANG', 'CHUNGCHEONG', 'GANGWON', 'JEOLLA', 'JEJU') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Photo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `FundingId` INTEGER NOT NULL,
    `url` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JoinedUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `FundingsId` INTEGER NOT NULL,
    `UserId` INTEGER NOT NULL,
    `fundedMoney` INTEGER NOT NULL,
    `CreatedAt` DATETIME(6) NOT NULL,
    `UpdatedAt` DATETIME(6) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Megazine` ADD CONSTRAINT `Megazine_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funding` ADD CONSTRAINT `Funding_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_FundingId_fkey` FOREIGN KEY (`FundingId`) REFERENCES `Funding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JoinedUser` ADD CONSTRAINT `JoinedUser_FundingsId_fkey` FOREIGN KEY (`FundingsId`) REFERENCES `Funding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JoinedUser` ADD CONSTRAINT `JoinedUser_UserId_fkey` FOREIGN KEY (`UserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
