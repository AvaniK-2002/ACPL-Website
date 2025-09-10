/**
 * Form Service Utility for ACPL Website
 *
 * This utility handles Hostinger form submission for the contact form.
 * It provides a clean interface for sending form data with proper error handling.
 */

import {
  HOSTINGER_CONFIG,
  FORM_SUCCESS_MESSAGE,
  validateHostingerConfig,
  prepareFormData,
  getErrorMessage,
  validateFormData
} from '../config/hostinger.config';

// Form data interface
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Form service response interface
export interface FormServiceResponse {
  success: boolean;
  message: string;
  error?: string | Error | unknown;
}

/**
 * Initialize form service (no initialization needed for Hostinger)
 */
export const initializeFormService = (): void => {
  console.log('Hostinger form service ready');
};

/**
 * Submit form using Hostinger form handler
 * @param formData - Contact form data
 * @returns Promise with form service response
 */
export const sendContactForm = async (formData: ContactFormData): Promise<FormServiceResponse> => {
  try {
    // Validate configuration
    if (!validateHostingerConfig()) {
      return {
        success: false,
        message: 'Form service is not properly configured. Please contact us directly at contact@ajinkyacreatiion.com',
        error: 'Configuration validation failed'
      };
    }

    // Validate form data
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      return {
        success: false,
        message: 'Please correct the following errors: ' + validation.errors.join(', '),
        error: 'Validation failed'
      };
    }

    // Prepare form data
    const formDataToSend = prepareFormData(formData);

    // Submit form
    const response = await fetch(HOSTINGER_CONFIG.FORM_HANDLER_URL, {
      method: 'POST',
      body: formDataToSend,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.text();
    console.log('Form submitted successfully:', result);

    return {
      success: true,
      message: FORM_SUCCESS_MESSAGE
    };

  } catch (error) {
    console.error('Error submitting form:', error);

    return {
      success: false,
      message: getErrorMessage(error),
      error
    };
  }
};

// Note: validateFormData is now imported from hostinger.config.ts

/**
 * Check if Hostinger form service is properly configured
 * @returns boolean indicating if form service is ready to use
 */
export const isFormServiceReady = (): boolean => {
  return validateHostingerConfig();
};

/**
 * Get Hostinger form configuration status for debugging
 * @returns Configuration status object
 */
export const getFormServiceStatus = () => {
  const { FORM_HANDLER_URL, TO_EMAIL, FROM_EMAIL } = HOSTINGER_CONFIG;

  return {
    handlerConfigured: !!FORM_HANDLER_URL,
    recipientConfigured: !!TO_EMAIL,
    fromEmailConfigured: !!FROM_EMAIL,
    isReady: validateHostingerConfig()
  };
};

// Export default form service
export default {
  initialize: initializeFormService,
  send: sendContactForm,
  validate: validateFormData,
  isReady: isFormServiceReady,
  getStatus: getFormServiceStatus
};
