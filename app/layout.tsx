import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'RBC Motores | Encontre o motor para sua operação',description:'Consulte motores elétricos por potência, marca e polos. Solicite orçamento ou informe o motor que sua empresa precisa. Recife e região metropolitana.'};
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="pt-BR"><body>{children}</body></html>}
