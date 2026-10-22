-- AlterTable
ALTER TABLE "projects" ADD COLUMN "slug" TEXT;
ALTER TABLE "projects" ADD COLUMN "live_job_id" TEXT;
ALTER TABLE "projects" ADD COLUMN "live_published_at" DATETIME;

-- CreateIndex
CREATE UNIQUE INDEX "projects_slug_key" ON "projects"("slug");
