import {getDb} from '../db';
import {motorRecords} from '../db/schema';
import {products, type Product} from './products';
export async function allMotors():Promise<Product[]>{const rows=await getDb().select().from(motorRecords);const map=new Map(products.map(p=>[p.id,p]));for(const row of rows){map.set(row.id,JSON.parse(row.data) as Product)}return [...map.values()];}
