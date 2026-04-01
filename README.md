# SLC Feed - Bird Feed Delivery Website

A professional, responsive website for a bird feed delivery service serving aviaries and bird facilities in the Salt Lake City area.

## Features

### Pages
- **Landing Page** (`index.html`) - Hero section with key selling points, features section, and services overview
- **About Page** (`about.html`) - Company mission, values, and commitment to customers
- **Contact Page** (`contact.html`) - Contact form and business information

### Design Highlights
- **Responsive Design** - Fully responsive layout that works on desktop, tablet, and mobile devices
- **Color Scheme** - Professional green and earth tones that relate to nature and bird care
  - Primary: Forest Green (#2c5f2d)
  - Secondary: Sage Green (#97bc62)
  - Accent: Warm Brown (#d4a574)

### Key Sections

#### Landing Page
- Eye-catching hero section with call-to-action
- Three core value propositions: Reliability, Availability, Dependability
- Services grid highlighting offerings
- Strong call-to-action button

#### About Page
- Company mission and purpose
- Clear explanation of why the business exists
- Four commitment areas with detailed descriptions
- Unique value proposition section

#### Contact Page
- Fully functional contact form with validation
- Multiple ways to reach the business (email, phone)
- Service interest selection dropdown
- Quick start information

## File Structure

```
SlcFeed/
├── index.html          # Landing page
├── about.html          # About page
├── contact.html        # Contact page
├── style.css           # All styling
├── script.js           # Form handling and interactions
└── README.md           # This file
```

## How to Use

1. Open `index.html` in a web browser to view the landing page
2. Navigate using the menu bar to explore other pages
3. Fill out the contact form to test form validation

## Customization

### Contact Information
Update the following in `contact.html`:
- Email: Change `hello@slcfeed.com` to your actual email
- Phone: Change `(801) 555-1234` to your actual phone number
- Service area: Modify the service area text as needed

### Colors
To change colors, edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #2c5f2d;      /* Main color */
    --secondary-color: #97bc62;    /* Secondary color */
    --accent-color: #d4a574;       /* Button/accent color */
    /* ... other variables ... */
}
```

### Content
All text content can be edited directly in the HTML files:
- Headlines in `<h1>`, `<h2>`, etc. tags
- Body text in `<p>` tags
- Features and services in their respective sections

### Form Handling
Currently, the form shows a success message locally. To integrate with a backend:
1. Create a server endpoint to receive form submissions
2. Update the `handleFormSubmit()` function in `script.js` to POST data to your endpoint
3. Handle responses accordingly

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

Ideas for expanding the website:
- Photo gallery of aviaries and birds
- Testimonials from satisfied customers
- Blog with bird care tips
- Online ordering system
- Pricing page with transparent rates
- Service scheduling calendar
- Customer login portal
- Email newsletter signup

## Notes

- The website uses semantic HTML5
- CSS is organized with clear sections for easy maintenance
- JavaScript is minimal but extensible for future features
- All images and icons use emoji for simplicity (easily replaceable with actual images)

---

**SLC Feed** - Delivering reliability, availability, and dependability
