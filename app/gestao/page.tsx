import {isAdmin} from '../admin-auth';import {requireChatGPTUser,chatGPTSignOutPath} from '../chatgpt-auth';import Admin from './ui';
export const dynamic='force-dynamic';
export default async function Page(){await requireChatGPTUser('/gestao');if(!await isAdmin())return <main className="access-denied"><h1>Acesso restrito à administração</h1><p>Entre com a conta proprietária do catálogo RBC.</p><a href={chatGPTSignOutPath('/gestao')} target="_top">Sair e trocar de conta</a><br/><a href="/">Voltar ao catálogo</a></main>;return <Admin/>}
