import { env } from 'cloudflare:workers';
import {getChatGPTUser} from './chatgpt-auth';
export async function isAdmin(){const user=await getChatGPTUser();return !!user && !!env.ADMIN_EMAIL && user.email.toLowerCase()===env.ADMIN_EMAIL.toLowerCase();}
export function sameOrigin(req:Request){const origin=req.headers.get('origin');return !!origin && origin===new URL(req.url).origin;}
