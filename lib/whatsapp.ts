/**
 * WhatsApp utility functions for generating WhatsApp links with pre-filled messages
 */

export const WHATSAPP_NUMBER = '966501234567'; // Saudi Arabia number (replace with actual number)

export interface WhatsAppMessageOptions {
  message: string;
  phoneNumber?: string;
}

/**
 * Generate a WhatsApp link with a pre-filled message
 * @param options Message content and optional phone number
 * @returns WhatsApp link URL
 */
export function generateWhatsAppLink(options: WhatsAppMessageOptions): string {
  const { message, phoneNumber = WHATSAPP_NUMBER } = options;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

// Pre-defined message templates
export const WHATSAPP_TEMPLATES = {
  consultation: 'مرحباً، أود أن أحجز استشارة مع فريق مِراس للتسويق الطبي.',
  getStarted: 'مرحباً، أود البدء معكم في رحلة التمكين الرقمي.',
  serviceInquiry: (serviceName: string) => `مرحباً، أود الاستفسار عن خدمة ${serviceName}.`,
  general: 'مرحباً، أود التواصل معكم بخصوص خدماتكم التسويقية.',
};

export function generateConsultationLink(): string {
  return generateWhatsAppLink({
    message: WHATSAPP_TEMPLATES.consultation,
  });
}

export function generateGetStartedLink(): string {
  return generateWhatsAppLink({
    message: WHATSAPP_TEMPLATES.getStarted,
  });
}

export function generateServiceInquiryLink(serviceName: string): string {
  return generateWhatsAppLink({
    message: WHATSAPP_TEMPLATES.serviceInquiry(serviceName),
  });
}
