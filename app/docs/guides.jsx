'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export default function Guides() {
  const [expandedGuide, setExpandedGuide] = useState(null);

  const guides = [
    {
      id: 1,
      title: 'Getting Started',
      icon: '🚀',
      content: `# Getting Started with Magic Planet Tools

## Step 1: Choose Your Tool
Browse our catalog of 50+ free and premium tools. Start with a free tool to get familiar with the platform.

## Step 2: Sign Up
Create a free account (no credit card required for free tools).

## Step 3: Configure
Follow the tool-specific setup guide (usually 5-15 minutes).

## Step 4: Start Using
Begin automating your workflow immediately.

## Step 5: Upgrade (Optional)
When you're ready for advanced features, upgrade to a premium tier.

## Support
Need help? Check our FAQ or contact support@magicplanettools.com`
    },
    {
      id: 2,
      title: 'Gmail SMTP Integration',
      icon: '📧',
      content: `# Gmail SMTP Integration Guide

## Prerequisites
- Gmail account
- Generate App Password (not your regular password)

## Step 1: Generate App Password
1. Go to myaccount.google.com
2. Click "Security" in left menu
3. Scroll to "App passwords"
4. Select "Mail" and "Windows Computer"
5. Google will generate a 16-character password

## Step 2: Configure in Magic Planet
1. Go to tool settings
2. Enter your Gmail address
3. Paste the 16-character app password
4. Click "Test Connection"

## Step 3: Send Your First Email
Use the tool to send a test email.

## Common Issues
- Q: Getting "Invalid credentials"?
  A: Make sure you used the 16-character App Password, not your regular password

- Q: Emails going to spam?
  A: Make sure your Gmail account has a verified recovery email and phone number

## Rate Limits
- Gmail Free Tier: 50 emails/hour
- Gmail Business: 500 emails/hour
- We recommend max 40 emails/hour to stay safe`
    },
    {
      id: 3,
      title: 'LinkedIn Scraper API',
      icon: '💼',
      content: `# LinkedIn Scraper API Guide

## Legal & Ethical Guidelines
✓ Scraping for recruitment is LEGAL
✓ Always respect LinkedIn's Terms of Service
✓ Use ethical rate limiting (max 100 requests/hour)
✓ Never re-sell scraped data

## Getting Started
1. Install the API client
2. Add your API key to configuration
3. Test with a sample LinkedIn URL

## Common Use Cases

### Scraping Candidate Profiles
- Extract name, title, company, skills
- Useful for recruitment

### Company Research
- Find hiring managers at target companies
- Research competitor employees

## Code Example
\`\`\`
GET /api/linkedin/profile?url=https://linkedin.com/in/username
\`\`\`

## Rate Limits
- Free tier: 50 profiles/month
- Pro tier: 1,000 profiles/month
- Enterprise: Unlimited

## Best Practices
1. Don't hammer the API (space requests out)
2. Cache results to avoid duplicate calls
3. Always rotate user agents
4. Use residential proxies for large volume`
    },
    {
      id: 4,
      title: 'Resume Parser',
      icon: '📄',
      content: `# Resume Parser Guide

## What It Does
Automatically extracts key information from resumes:
- Contact info (name, email, phone)
- Work experience
- Education
- Skills
- Certifications

## Supported Formats
- PDF
- DOC/DOCX
- TXT
- RTF

## Getting Started

### Step 1: Upload Resume
- Click "Upload Resume"
- Select file from computer
- Or paste text directly

### Step 2: Extract Data
- Tool parses resume automatically
- Returns structured JSON

### Step 3: Use Results
- Download as CSV
- Export to ATS
- Map to your fields

## Accuracy Rates
- Contact info: 98%
- Work experience: 95%
- Skills: 92%
- Education: 97%

## Tips for Best Results
1. Use standard resume formats
2. Use clear section headers
3. Avoid images/graphics
4. Use standard fonts

## API Example
\`\`\`
POST /api/resume/parse
Content-Type: multipart/form-data
file: <resume file>
\`\`\`

Returns:
\`\`\`json
{
  "name": "John Doe",
  "email": "john@example.com",
  "experience": [...],
  "skills": [...]
}
\`\`\``
    }
  ];

  return (
    <div className="space-y-4">
      {guides.map(guide => (
        <div key={guide.id} className="glass border border-slate-700/50 rounded-2xl overflow-hidden">
          <button
            onClick={() => setExpandedGuide(expandedGuide === guide.id ? null : guide.id)}
            className="w-full p-6 flex items-center justify-between hover:bg-slate-700/20 transition"
          >
            <div className="flex items-center gap-4 text-left">
              <span className="text-4xl">{guide.icon}</span>
              <div>
                <h3 className="text-xl font-bold">{guide.title}</h3>
              </div>
            </div>
            <FiChevronDown
              className={`transition ${expandedGuide === guide.id ? 'rotate-180' : ''}`}
            />
          </button>

          {expandedGuide === guide.id && (
            <div className="px-6 pb-6 pt-0 border-t border-slate-700/50 text-slate-300 max-h-96 overflow-y-auto">
              <div className="whitespace-pre-wrap text-sm leading-relaxed">
                {guide.content}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
