/*
  Warnings:

  - You are about to drop the column `priotity` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Task` DROP COLUMN `priotity`,
    ADD COLUMN `priority` VARCHAR(191) NOT NULL DEFAULT 'Low';
