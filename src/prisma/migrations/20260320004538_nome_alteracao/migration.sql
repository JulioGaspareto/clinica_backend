-- CreateTable
CREATE TABLE "token" (
    "id" SERIAL NOT NULL,
    "tokens" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "revogado" BOOLEAN NOT NULL DEFAULT false,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "token_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "token" ADD CONSTRAINT "token_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
