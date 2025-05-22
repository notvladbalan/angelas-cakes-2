-- CreateTable
CREATE TABLE "CakeFlavor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "CakeFlavor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "review_id" SERIAL NOT NULL,
    "cake_flavor_id" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "Fillings" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Fillings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CakeTypes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "CakeTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Styles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Styles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CakeFlavor_name_key" ON "CakeFlavor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Fillings_name_key" ON "Fillings"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CakeTypes_name_key" ON "CakeTypes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Styles_name_key" ON "Styles"("name");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_cake_flavor_id_fkey" FOREIGN KEY ("cake_flavor_id") REFERENCES "CakeFlavor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
