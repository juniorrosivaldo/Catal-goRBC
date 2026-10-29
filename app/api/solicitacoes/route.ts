import { getDb } from '../../../db';
import { requests } from '../../../db/schema';
export async function POST(req: Request) {
 const origin = req.headers.get('origin');
 if (origin && origin !== new URL(req.url).origin) return Response.json({error:'Origem inválida.'},{status:403});
 if (Number(req.headers.get('content-length')) > 12000) return Response.json({error:'Mensagem muito longa.'},{status:413});
 let body: Record<string, unknown>;
 try { const raw=await req.text(); if(raw.length>12000) throw new Error(); body=JSON.parse(raw); } catch {return Response.json({error:'Dados inválidos.'},{status:400});}
 if(body.website) return Response.json({error:'Solicitação inválida.'},{status:400});
 const get=(key:string,max=160)=>typeof body[key]==='string'?(body[key] as string).trim().slice(0,max):'';
 const name=get('name'), contact=get('contact');
 if(name.length<2 || contact.replace(/\D/g,'').length<10 || contact.replace(/\D/g,'').length>13 || body.consent!==true) return Response.json({error:'Informe nome, telefone com DDD e autorize o contato.'},{status:400});
 const id=crypto.randomUUID();
 try { await getDb().insert(requests).values({id,name,contact,company:get('company'),kind:get('kind'),product:get('product'),power:get('power'),voltage:get('voltage'),poles:get('poles'),details:get('details',2500),createdAt:new Date().toISOString()}); }
 catch {return Response.json({error:'Não foi possível registrar agora. Tente novamente.'},{status:503});}
 return Response.json({id},{status:201});
}
