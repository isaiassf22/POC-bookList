-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "user" VARCHAR(15) NOT NULL,
    "email" TEXT,
    "password" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "token_list" (
    "token_id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "token" TEXT,

    CONSTRAINT "token_list_pkey" PRIMARY KEY ("token_id")
);

-- CreateTable
CREATE TABLE "customer_informations" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "token_id" INTEGER NOT NULL,
    "name" TEXT,
    "number" VARCHAR(12),
    "state" TEXT,
    "city" TEXT,
    "cep" VARCHAR(10)
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_informations_id_key" ON "customer_informations"("id");

-- AddForeignKey
ALTER TABLE "token_list" ADD CONSTRAINT "token_list_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "customer_informations" ADD CONSTRAINT "customer_informations_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "customer_informations" ADD CONSTRAINT "customer_informations_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "token_list"("token_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

