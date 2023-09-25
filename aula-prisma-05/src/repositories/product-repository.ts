import { Product } from "@prisma/client";
import prisma from "../database/database";

export type CreateProduct = Omit<Product, "id" | "createdAt">

async function getProducts() {
  return await prisma.product.findMany();
}

async function getProduct(id: number) {
  return await prisma.product.findUnique({
    where: { id }
  })
}

async function createProduct(productInfo: CreateProduct) {
  await prisma.product.create({
    data: productInfo
  })
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;