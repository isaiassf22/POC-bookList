-- CreateTable
CREATE TABLE "costumers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30),
    "phone" VARCHAR(11),

    CONSTRAINT "costumers_pkey" PRIMARY KEY ("id")
);

