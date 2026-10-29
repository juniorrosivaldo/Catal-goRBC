import {allMotors} from '../../motor-store';
export async function GET(){try{return Response.json((await allMotors()).filter(p=>p.status!=='Arquivado'&&p.status!=='Vendido').map(p=>({...p,price:p.showPrice?p.price:0})),{headers:{'Cache-Control':'no-store'}})}catch{return Response.json({error:'Catálogo temporariamente indisponível. Tente novamente.'},{status:503})}}
