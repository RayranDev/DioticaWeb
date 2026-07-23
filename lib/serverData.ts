import fs from 'fs';
import path from 'path';
import { Product, SAMPLE_PRODUCTS } from './data';

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'products.json');

export function getProductsFile(): Product[] {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const content = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading products.json:', error);
  }
  return SAMPLE_PRODUCTS;
}

export function saveProductsFile(products: Product[]): boolean {
  try {
    const dataDir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(products, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing products.json:', error);
    return false;
  }
}
