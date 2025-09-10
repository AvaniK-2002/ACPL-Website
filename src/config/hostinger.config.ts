/**
 * Hostinger Form Configuration for ACPL Website
 *
 * This file contains the Hostinger form handling configuration settings for the contact form.
 * Update the form handler URL and other settings as needed.
 */

// Hostinger Form Configuration
export const HOSTINGER_CONFIG = {
  // Form handler URL (relative to your domain)
  FORM_HANDLER_URL: '/contact-form-handler.php',

  // Alternative form handler URL for development
  DEV_FORM_HANDLER_URL: '/contact-form-handler.php',

  // Recipient email address
  TO_EMAIL: 'contact@ajinkyacreatiion.com',

  // From email address (should be from your domain)
  FROM_EMAIL: 'noreply@ajinkyacreatiion.com',

  // Email subject prefix
  SUBJECT_PREFIX: 'ACPL Website Contact Form',

  // Maximum message length
  MAX_MESSAGE_LENGTH: 5000,
};

// Form data mapping for Hostinger
export const FORM_DATA_PARAMS = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  timestamp: new Date().toISOString(),
};

// Form submission options
export const FORM_OPTIONS = {
  // Request timeout in milliseconds
  timeout: 10000,

  // Retry attempts on failure
  retryAttempts: 2,

  // Rate limiting (client-side)
  rateLimitDelay: 5000, // 5 seconds between submissions
};

// Error messages
export const FORM_ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your internet connection and try again.',
  SERVER_ERROR: 'Server error. Please try again later or contact us directly.',
  VALIDATION_ERROR: 'Please fill in all required fields correctly.',
  GENERIC_ERROR: 'There was an error sending your message. Please try again later.',
  FORM_HANDLER_NOT_FOUND: 'Form handler not found. Please contact us directly at contact@ajinkyacreatiion.com',
};

// Success message
export const FORM_SUCCESS_MESSAGE = 'Thank you for your message! We will get back to you within 24 hours.';

/**
 * Validates Hostinger form configuration
 * @returns boolean - true if configuration is valid
 */
export const validateHostingerConfig = (): boolean => {
  const { FORM_HANDLER_URL, TO_EMAIL, FROM_EMAIL } = HOSTINGER_CONFIG;

  if (!FORM_HANDLER_URL) {
    console.warn('Hostinger: FORM_HANDLER_URL not configured');
    return false;
  }

  if (!TO_EMAIL) {
    console.warn('Hostinger: TO_EMAIL not configured');
    return false;
  }

  if (!FROM_EMAIL) {
    console.warn('Hostinger: FROM_EMAIL not configured');
    return false;
  }

  return true;
};

/**
 * Prepares form data for Hostinger submission
 * @param formData - Form data from contact form
 * @returns FormData object ready for submission
 */
export const prepareFormData = (formData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) => {
  const formDataToSend = new FormData();
  formDataToSend.append('name', formData.name);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('phone', formData.phone || 'Not provided');
  formDataToSend.append('subject', formData.subject);
  formDataToSend.append('message', formData.message);
  formDataToSend.append('timestamp', new Date().toISOString());

  return formDataToSend;
};

/**
 * Gets appropriate error message based on error type
 * @param error - Error object or message
 * @returns User-friendly error message
 */
export const getErrorMessage = (error: unknown): string => {
  if (typeof error === 'string') {
    if (error.includes('network') || error.includes('fetch')) {
      return FORM_ERROR_MESSAGES.NETWORK_ERROR;
    }
    if (error.includes('HTTP error! status: 404')) {
      return FORM_ERROR_MESSAGES.FORM_HANDLER_NOT_FOUND;
    }
    if (error.includes('HTTP error! status: 500')) {
      return FORM_ERROR_MESSAGES.SERVER_ERROR;
    }
  }

  if (error instanceof Error) {
    if (error.message.includes('network') || error.message.includes('fetch')) {
      return FORM_ERROR_MESSAGES.NETWORK_ERROR;
    }
    if (error.message.includes('HTTP error! status: 404')) {
      return FORM_ERROR_MESSAGES.FORM_HANDLER_NOT_FOUND;
    }
    if (error.message.includes('HTTP error! status: 500')) {
      return FORM_ERROR_MESSAGES.SERVER_ERROR;
    }
  }

  return FORM_ERROR_MESSAGES.GENERIC_ERROR;
};

/**
 * Validates form data before submission
 * @param formData - Form data to validate
 * @returns Validation result with errors if any
 */
export const validateFormData = (formData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  // Phone validation (optional but if provided, should be valid)
  if (formData.phone && formData.phone.trim()) {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/[\s\-()]/g, ''))) {
      errors.push('Please enter a valid phone number');
    }
  }

  // Subject validation
  if (!formData.subject || formData.subject.trim().length < 3) {
    errors.push('Subject must be at least 3 characters long');
  }

  // Message validation
  if (!formData.message || formData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  // Message length validation
  if (formData.message && formData.message.length > HOSTINGER_CONFIG.MAX_MESSAGE_LENGTH) {
    errors.push(`Message must be less than ${HOSTINGER_CONFIG.MAX_MESSAGE_LENGTH} characters`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Export default configuration
export default HOSTINGER_CONFIG;
