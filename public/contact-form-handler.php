<?php
/**
 * ACPL Contact Form Handler for Hostinger
 * 
 * This PHP script handles contact form submissions from the ACPL website.
 * It validates the form data, sends emails, and returns appropriate responses.
 */

// Set content type to JSON for API responses
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Configuration
$config = [
    'to_email' => 'contact@ajinkyacreatiion.com',
    'from_email' => 'noreply@ajinkyacreatiion.com',
    'subject_prefix' => 'ACPL Website Contact Form',
    'max_message_length' => 5000,
    'required_fields' => ['name', 'email', 'subject', 'message']
];

// Function to sanitize input
function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)));
}

// Function to validate email
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Function to validate phone number
function isValidPhone($phone) {
    if (empty($phone)) return true; // Phone is optional
    return preg_match('/^[\+]?[1-9][\d]{0,15}$/', preg_replace('/[\s\-\(\)]/', '', $phone));
}

// Function to send email
function sendContactEmail($formData, $config) {
    $to = $config['to_email'];
    $subject = $config['subject_prefix'] . ' - ' . $formData['subject'];
    
    // Create email body
    $message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background-color: #6366f1; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background-color: #f9f9f9; }
            .info-box { background-color: white; padding: 15px; margin: 10px 0; border-left: 4px solid #6366f1; }
            .footer { background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='header'>
            <h2>New Contact Inquiry - ACPL</h2>
            <p>Ajinkya Creatiion Private Limited</p>
        </div>
        
        <div class='content'>
            <h3>Contact Details</h3>
            
            <div class='info-box'>
                <strong>Name:</strong> " . $formData['name'] . "
            </div>
            
            <div class='info-box'>
                <strong>Email:</strong> " . $formData['email'] . "
            </div>
            
            <div class='info-box'>
                <strong>Phone:</strong> " . $formData['phone'] . "
            </div>
            
            <div class='info-box'>
                <strong>Subject:</strong> " . $formData['subject'] . "
            </div>
            
            <div class='info-box'>
                <strong>Message:</strong><br>" . nl2br($formData['message']) . "
            </div>
            
            <div class='info-box'>
                <strong>Submitted:</strong> " . $formData['timestamp'] . "
            </div>
        </div>
        
        <div class='footer'>
            <p>This email was sent from the ACPL website contact form.</p>
            <p>Reply directly to this email to respond to the inquiry.</p>
        </div>
    </body>
    </html>
    ";
    
    // Email headers
    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: ' . $config['from_email'],
        'Reply-To: ' . $formData['email'],
        'X-Mailer: PHP/' . phpversion()
    ];
    
    return mail($to, $subject, $message, implode("\r\n", $headers));
}

// Main processing
try {
    // Check if request method is POST
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Method not allowed']);
        exit;
    }
    
    // Get form data
    $formData = [
        'name' => sanitizeInput($_POST['name'] ?? ''),
        'email' => sanitizeInput($_POST['email'] ?? ''),
        'phone' => sanitizeInput($_POST['phone'] ?? 'Not provided'),
        'subject' => sanitizeInput($_POST['subject'] ?? ''),
        'message' => sanitizeInput($_POST['message'] ?? ''),
        'timestamp' => date('Y-m-d H:i:s')
    ];
    
    // Validation
    $errors = [];
    
    // Check required fields
    foreach ($config['required_fields'] as $field) {
        if (empty($formData[$field])) {
            $errors[] = ucfirst($field) . ' is required';
        }
    }
    
    // Validate email format
    if (!empty($formData['email']) && !isValidEmail($formData['email'])) {
        $errors[] = 'Invalid email format';
    }
    
    // Validate phone number
    if (!isValidPhone($formData['phone'])) {
        $errors[] = 'Invalid phone number format';
    }
    
    // Check message length
    if (strlen($formData['message']) > $config['max_message_length']) {
        $errors[] = 'Message is too long (max ' . $config['max_message_length'] . ' characters)';
    }
    
    // If there are validation errors, return them
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Validation failed', 'errors' => $errors]);
        exit;
    }
    
    // Try to send email
    if (sendContactEmail($formData, $config)) {
        // Success response
        echo json_encode([
            'success' => true, 
            'message' => 'Your message has been sent successfully. We will get back to you soon!'
        ]);
    } else {
        // Email sending failed
        http_response_code(500);
        echo json_encode([
            'success' => false, 
            'message' => 'Failed to send email. Please try again later.'
        ]);
    }
    
} catch (Exception $e) {
    // Handle any unexpected errors
    error_log('Contact form error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'An unexpected error occurred. Please try again later.'
    ]);
}
?>
