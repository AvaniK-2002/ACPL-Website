# Hostinger Setup Guide for ACPL Website

## 🎯 Overview

This guide provides comprehensive instructions for setting up and deploying the ACPL website on Hostinger hosting with proper configuration for optimal performance, security, and functionality.

## 📋 Prerequisites

- Hostinger hosting account with domain `ajinkyacreatiion.com`
- Built React application (`npm run build` completed)
- FTP/File Manager access to hosting account
- Email accounts configured for the domain

## 🚀 Initial Hostinger Setup

### Step 1: Domain Configuration

1. **Login to Hostinger Control Panel**
   - Navigate to [hpanel.hostinger.com](https://hpanel.hostinger.com)
   - Access your hosting account

2. **Verify Domain Settings**
   - Ensure `ajinkyacreatiion.com` is properly configured
   - Check DNS settings are pointing to Hostinger servers
   - Verify SSL certificate is active

3. **Set Up Subdomains (if needed)**
   - Configure `www.ajinkyacreatiion.com` redirect
   - Ensure both www and non-www versions work

### Step 2: File Upload and Directory Structure

1. **Access File Manager**
   - Go to Hostinger Control Panel → File Manager
   - Navigate to `public_html/` directory

2. **Upload Production Files**

   ```
   /public_html/
   ├── index.html                    # From dist/
   ├── assets/                       # From dist/assets/
   ├── .htaccess                     # From public/
   ├── contact-form-handler.php      # From public/
   ├── sitemap.xml                   # From public/
   ├── pages-sitemap.xml             # From public/
   ├── image-sitemap.xml             # From public/
   ├── robots.txt                    # From public/
   ├── ACPL.png                      # From public/
   └── favicon files                 # Generated favicon files

   ```

3. **Set File Permissions**
   - Files: 644 (readable by all, writable by owner)
   - Directories: 755 (executable and readable by all)
   - PHP files: 644
   - .htaccess: 644

## 📧 Email Configuration

### Step 1: Create Email Accounts

1. **Primary Business Email**
   - Create: `contact@ajinkyacreatiion.com`
   - Use for: Contact form submissions, business inquiries
   - Set up forwarding if needed

2. **No-Reply Email**
   - Create: `noreply@ajinkyacreatiion.com`
   - Use for: Automated form submissions
   - Configure as send-only

3. **Personal Email**
   - Create: `ajinkya.d@ajinkyacreatiion.com`
   - Use for: Direct founder contact

### Step 2: Configure Contact Form Handler

1. **Update PHP Configuration**

   ```php
   // In contact-form-handler.php
   $to_email = 'contact@ajinkyacreatiion.com';
   $from_email = 'noreply@ajinkyacreatiion.com';
   $subject_prefix = 'ACPL Website Contact Form';
   ```

2. **Test Email Functionality**
   - Submit test form from website
   - Verify emails are received
   - Check spam folders if needed

## 🔧 PHP Configuration

### Step 1: PHP Version

1. **Set PHP Version**
   - Go to Hostinger Control Panel → PHP Configuration
   - Select PHP 8.1 or higher (recommended)
   - Apply changes

2. **Enable Required Extensions**
   - Ensure `mail()` function is enabled
   - Enable `curl` extension
   - Enable `json` extension

### Step 2: PHP Settings

```ini
# Recommended PHP settings
max_execution_time = 300
memory_limit = 256M
upload_max_filesize = 10M
post_max_size = 10M
```

## 🛡️ Security Configuration

### Step 1: .htaccess Security Headers

The `.htaccess` file includes comprehensive security measures:

```apache
# Security Headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"

# HTTPS Enforcement
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Step 2: File Access Restrictions

```apache
# Block access to sensitive files
<Files ".htaccess">
    Order Allow,Deny
    Deny from all
</Files>

<Files "*.log">
    Order Allow,Deny
    Deny from all
</Files>
```

## 🔍 SEO and Performance Setup

### Step 1: Verify Sitemap Accessibility

1. **Test Sitemap URLs**
   - `https://ajinkyacreatiion.com/sitemap.xml`
   - `https://ajinkyacreatiion.com/pages-sitemap.xml`
   - `https://ajinkyacreatiion.com/image-sitemap.xml`

2. **Submit to Google Search Console**
   - Add property for `ajinkyacreatiion.com`
   - Submit all sitemap URLs
   - Monitor indexing status

### Step 2: Performance Optimization

1. **Enable Gzip Compression**

   ```apache
   # In .htaccess
   <IfModule mod_deflate.c>
       AddOutputFilterByType DEFLATE text/plain
       AddOutputFilterByType DEFLATE text/html
       AddOutputFilterByType DEFLATE text/xml
       AddOutputFilterByType DEFLATE text/css
       AddOutputFilterByType DEFLATE application/xml
       AddOutputFilterByType DEFLATE application/xhtml+xml
       AddOutputFilterByType DEFLATE application/rss+xml
       AddOutputFilterByType DEFLATE application/javascript
       AddOutputFilterByType DEFLATE application/x-javascript
   </IfModule>
   ```

2. **Browser Caching**

   ```apache
   # Cache static assets
   <IfModule mod_expires.c>
       ExpiresActive on
       ExpiresByType text/css "access plus 1 year"
       ExpiresByType application/javascript "access plus 1 year"
       ExpiresByType image/png "access plus 1 year"
       ExpiresByType image/jpg "access plus 1 year"
       ExpiresByType image/jpeg "access plus 1 year"
   </IfModule>
   ```

## 🧪 Testing and Verification

### Step 1: Functionality Testing

1. **Website Pages**
   - ✅ Homepage: `https://ajinkyacreatiion.com/`
   - ✅ About: `https://ajinkyacreatiion.com/about`
   - ✅ Services: `https://ajinkyacreatiion.com/services`
   - ✅ Contact: `https://ajinkyacreatiion.com/contact`

2. **Contact Form Testing**
   - Fill out contact form with test data
   - Verify email delivery to `contact@ajinkyacreatiion.com`
   - Test form validation and error handling
   - Check loading states and success messages

### Step 2: Technical Verification

1. **SSL Certificate**
   - Verify HTTPS is working
   - Check for mixed content warnings
   - Test HTTP to HTTPS redirects

2. **Performance Testing**
   - Run Google PageSpeed Insights
   - Test mobile responsiveness
   - Verify Core Web Vitals

3. **SEO Verification**
   - Test structured data with Google Rich Results Test
   - Verify meta tags in page source
   - Check robots.txt accessibility

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Contact Form Not Working

```bash
# Check PHP error logs in Hostinger control panel
# Verify email configuration
# Test SMTP settings
```

#### 404 Errors on Page Refresh

```apache
# Ensure .htaccess includes React Router fallback
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

#### Slow Loading Times

- Enable Gzip compression
- Optimize images
- Check Hostinger server status
- Consider CDN implementation

#### SSL Issues

- Verify SSL certificate in Hostinger panel
- Check for mixed content (HTTP resources on HTTPS pages)
- Update any hardcoded HTTP URLs to HTTPS

## 📞 Support Resources

### Hostinger Support

- **24/7 Live Chat**: Available in Hostinger control panel
- **Knowledge Base**: [support.hostinger.com](https://support.hostinger.com)
- **Email Support**: Available for premium plans

### ACPL Technical Contacts

- **Primary**: `contact@ajinkyacreatiion.com`
- **Technical**: `ajinkya.d@ajinkyacreatiion.com`
- **Phone**: +91-9130506044

## ✅ Post-Deployment Checklist

- [ ] All website pages load correctly
- [ ] Contact form sends emails successfully
- [ ] SSL certificate is active and working
- [ ] Sitemaps are accessible and submitted to Google
- [ ] Performance scores are acceptable (90+ on PageSpeed)
- [ ] Mobile responsiveness is verified
- [ ] All redirects work properly (www to non-www, HTTP to HTTPS)
- [ ] Email accounts are configured and working
- [ ] Backup procedures are in place

---

**Note**: This setup ensures optimal performance, security, and functionality for the ACPL website on Hostinger hosting platform.
