/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Aluno` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Professor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Aluno` ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Professor` ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Aluno_email_key` ON `Aluno`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Professor_email_key` ON `Professor`(`email`);
