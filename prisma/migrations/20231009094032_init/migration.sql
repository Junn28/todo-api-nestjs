-- CreateTable
CREATE TABLE "todos" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "due_date" DATE,
    "completed" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
