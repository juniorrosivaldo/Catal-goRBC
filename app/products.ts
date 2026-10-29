export const initialProducts = [
 ['WEG',.5,6,1,390],['Tianyang',.75,6,1,300],['WEG',.75,4,1,450],['WEG',.75,6,2,430],['Neri',1,4,1,450],['SEW',1,4,1,600],['WEG',1,4,2,600],['SEW',2,4,1,850],['WEG',2,4,1,850],['WEG',10,4,2,3000],['WEG',20,2,1,5600],['Siemens',30,4,2,7500],['ABB',60,4,1,13500],['Siemens',60,4,1,14500],['WEG',150,6,1,64900]
].map(([brand,power,poles,qty,price],i)=>({id:`RBC-${String(i+1).padStart(3,'0')}`,brand:String(brand),power:Number(power),poles:Number(poles),qty:Number(qty),price:Number(price),status:'Em conferência',voltage:'',rpm:'',frame:'',mounting:'',condition:'',warranty:'',description:'',photos:[] as string[],showPrice:true}));
export type Product = typeof initialProducts[number];
export const products = initialProducts;
