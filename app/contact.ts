export const RBC_PHONE_DISPLAY = '(81) 98466-6199';
export const RBC_WHATSAPP = '5581984666199';
export function whatsappUrl(message = 'Olá! Vim pelo catálogo da RBC Motores e gostaria de atendimento.') {
 return 'https://wa.me/' + RBC_WHATSAPP + '?text=' + encodeURIComponent(message);
}
