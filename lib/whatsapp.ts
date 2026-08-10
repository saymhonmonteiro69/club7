export const WHATSAPP_NUMBER = "5592993875478"

export function WHATSAPP_LINK(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
