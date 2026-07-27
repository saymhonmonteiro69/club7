export const WHATSAPP_NUMBER = "5592986470747"

export function WHATSAPP_LINK(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
