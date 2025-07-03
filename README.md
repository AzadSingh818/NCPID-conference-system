# NCPID Conference System 2025

## 📋 Overview

The **National Conference of Pediatric Infectious Diseases (NCPID) 2025** Abstract Management System is a comprehensive web application built for managing conference abstracts, delegate registration, and administrative tasks for the NCPID conference scheduled for **October 10-12, 2025**.

## 🌟 Key Features

### For Delegates
- **User Registration & Authentication** - Secure delegate registration with email verification
- **Abstract Submission** - Submit research abstracts with file uploads
- **Dashboard Access** - Personal dashboard to manage submissions
- **Multiple Submission Categories** - Support for various presentation types
- **File Upload Support** - Upload supporting documents with abstracts
- **Real-time Status Tracking** - Track submission status and reviews

### For Administrators
- **Admin Dashboard** - Comprehensive overview of all submissions
- **Abstract Review System** - Review, approve, or reject submissions
- **Category Management** - Organize submissions by presentation type
- **Export Functionality** - Export data to Excel/CSV formats
- **Email Notifications** - Send status updates to delegates
- **Statistics & Analytics** - View submission statistics by category
- **Bulk Operations** - Manage multiple submissions efficiently

### Technical Features
- **Responsive Design** - Mobile-friendly interface using Tailwind CSS
- **File Management** - Secure file upload and storage system
- **Email Integration** - Automated email notifications
- **Database Integration** - PostgreSQL for production, SQLite for development
- **JWT Authentication** - Secure token-based authentication
- **API Routes** - RESTful API endpoints for all operations

## 🛠 Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (production) / SQLite (development)
- **Authentication**: JWT, bcryptjs
- **File Handling**: Multer
- **Email**: Nodemailer
- **Icons**: Lucide React
- **Export**: XLSX, File-saver

## 📁 Project Structure

```
NCPID-conference-system/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── page.tsx                  # Home page
│   │   ├── layout.tsx                # Root layout
│   │   ├── globals.css               # Global styles
│   │   ├── admin/                    # Admin portal
│   │   │   ├── page.tsx              # Admin dashboard
│   │   │   └── login/                # Admin login
│   │   ├── delegate-login/           # Delegate authentication
│   │   ├── delegate-register/        # Delegate registration
│   │   ├── delegate-dashboard/       # Delegate portal
│   │   ├── submit/                   # Abstract submission
│   │   ├── abstract-guidelines/      # Submission guidelines
│   │   └── api/                      # API routes
│   │       ├── auth/                 # Authentication endpoints
│   │       ├── abstracts/            # Abstract management
│   │       ├── admin/                # Admin operations
│   │       ├── upload/               # File upload handling
│   │       ├── email/                # Email services
│   │       └── export/               # Data export
│   ├── components/                   # Reusable components
│   │   ├── FileUpload.tsx            # File upload component
│   │   ├── FinalUploadModal.jsx      # Upload modal
│   │   ├── WordCounter.jsx           # Word count utility
│   │   └── admin/                    # Admin-specific components
│   └── lib/                          # Utility libraries
│       ├── auth-utils.js             # Authentication utilities
│       ├── database-postgres.js      # Database operations
│       ├── email-service.ts          # Email service
│       ├── file-utils.ts             # File handling
│       └── file-validation.ts        # File validation
├── public/                           # Static assets
│   └── uploads/                      # File upload storage
├── data/                             # JSON data storage
├── database.sqlite                   # SQLite database (development)
├── package.json                      # Dependencies
├── next.config.js                    # Next.js configuration
├── tailwind.config.js               # Tailwind CSS config
└── tsconfig.json                    # TypeScript config
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.17.0
- **npm** >= 9.0.0
- **PostgreSQL** (for production) or SQLite (for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NCPID-conference-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Database Configuration
   DATABASE_URL=postgresql://username:password@localhost:5432/ncpid_conference
   # For development with SQLite, comment out the above and use:
   # DATABASE_URL=file:./database.sqlite
   
   # JWT Secret (generate a strong secret)
   JWT_SECRET=your-super-secret-jwt-key-here
   
   # Email Configuration (for notifications)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   
   # Admin Credentials
   ADMIN_EMAIL=admin@ncpid.com
   ADMIN_PASSWORD=secure-admin-password
   
   # Environment
   NODE_ENV=development
   ```

4. **Database Setup**
   
   **For PostgreSQL:**
   ```bash
   # Create database
   createdb ncpid_conference
   
   # The application will automatically create tables on first run
   ```
   
   **For SQLite (Development):**
   ```bash
   # SQLite database will be created automatically
   # No additional setup required
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Open [http://localhost:3000](http://localhost:3000) in your browser
   - Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)

## 📋 Usage Guide

### For Conference Delegates

1. **Registration**
   - Visit the home page and click "Register as Delegate"
   - Fill in your personal and professional details
   - Verify your email address

2. **Login**
   - Use the "Delegate Login" option
   - Access your personal dashboard

3. **Submit Abstract**
   - Click "Submit Abstract" from dashboard
   - Choose submission category:
     - Poster Presentation (6+2 minutes, 250 words)
     - Award Paper (6+2 minutes, 250 words)
     - E-Poster (Display only, 250 words)
   - Fill in abstract details
   - Upload supporting documents (PDF format recommended)
   - Submit for review

4. **Track Submissions**
   - Monitor submission status in your dashboard
   - Receive email notifications for status updates
   - Download acceptance/rejection letters

### For Administrators

1. **Admin Login**
   - Access `/admin` route
   - Use admin credentials from environment variables

2. **Dashboard Overview**
   - View submission statistics
   - Monitor category-wise distributions
   - Track approval/rejection rates

3. **Review Abstracts**
   - Browse all submissions in the Enhanced Abstract Table
   - Filter by status (pending, approved, rejected)
   - Click on abstracts to view full details
   - Approve or reject submissions with comments

4. **Bulk Operations**
   - Select multiple abstracts for bulk status updates
   - Export submission data to Excel
   - Send bulk email notifications

5. **Data Export**
   - Export all abstracts to Excel format
   - Generate reports for conference planning
   - Download individual submission files

## 🔧 Configuration

### Abstract Categories

The system supports the following submission categories:

```javascript
const categories = [
  {
    name: "Poster Presentation",
    duration: "6+2 minutes",
    wordLimit: 250,
    description: "Research poster with presentation time"
  },
  {
    name: "Award Paper",
    duration: "6+2 minutes", 
    wordLimit: 250,
    description: "Competitive paper presentation"
  },
  {
    name: "E-Poster",
    duration: "Display only",
    wordLimit: 250,
    description: "Electronic poster display"
  }
];
```

### File Upload Settings

- **Supported formats**: PDF, DOC, DOCX
- **Maximum file size**: 10MB per file
- **Storage location**: `public/uploads/abstracts/`
- **Naming convention**: `timestamp_randomid_filename.ext`

### Email Templates

Email notifications are sent for:
- User registration confirmation
- Abstract submission confirmation
- Status updates (approval/rejection)
- Admin notifications for new submissions

## 📊 Database Schema

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  affiliation VARCHAR(255),
  mobile VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Abstracts Table
```sql
CREATE TABLE abstracts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  abstract TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  author VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  affiliation VARCHAR(255),
  mobile VARCHAR(20),
  co_authors TEXT,
  file_path VARCHAR(500),
  original_filename VARCHAR(255),
  status VARCHAR(20) DEFAULT 'pending',
  submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  registration_id VARCHAR(50),
  abstract_number VARCHAR(50)
);
```

## 🚀 Deployment

### Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Set production environment variables**
   ```env
   NODE_ENV=production
   DATABASE_URL=your-production-postgresql-url
   JWT_SECRET=your-production-jwt-secret
   # ... other production configs
   ```

3. **Start production server**
   ```bash
   npm start
   ```

### Platform-Specific Deployment

**Vercel:**
```bash
npm install -g vercel
vercel --prod
```

**Heroku:**
```bash
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔒 Security Features

- **JWT Authentication** - Secure token-based auth system
- **Password Hashing** - bcryptjs for secure password storage
- **File Validation** - Strict file type and size validation
- **SQL Injection Protection** - Parameterized queries
- **CORS Configuration** - Proper cross-origin request handling
- **Environment Variables** - Sensitive data protection

## 🧪 Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/admin/login` - Admin login

### Abstract Management
- `GET /api/abstracts` - Get all abstracts (admin)
- `POST /api/abstracts` - Submit new abstract
- `GET /api/abstracts/user` - Get user's abstracts
- `PUT /api/abstracts/[id]` - Update abstract
- `DELETE /api/abstracts/[id]` - Delete abstract

### File Operations
- `POST /api/upload` - Upload files
- `GET /api/abstracts/download/[id]` - Download abstract files

### Admin Operations
- `PUT /api/admin/abstracts/status` - Update abstract status
- `POST /api/admin/abstracts/bulk-update` - Bulk status updates
- `GET /api/export` - Export data to Excel

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   ```
   Error: connect ECONNREFUSED 127.0.0.1:5432
   ```
   - Check PostgreSQL is running
   - Verify DATABASE_URL in `.env.local`
   - For development, try SQLite instead

2. **File Upload Issues**
   ```
   Error: ENOENT: no such file or directory
   ```
   - Ensure `public/uploads/abstracts/` directory exists
   - Check file permissions
   - Verify file size limits

3. **JWT Token Errors**
   ```
   JsonWebTokenError: invalid signature
   ```
   - Ensure JWT_SECRET is set in environment
   - Clear browser localStorage and cookies
   - Re-login to get new token

4. **Email Service Issues**
   ```
   Error: Invalid login credentials
   ```
   - Check email configuration in `.env.local`
   - Use app-specific passwords for Gmail
   - Verify SMTP settings

### Development Tips

- Use SQLite for local development to avoid PostgreSQL setup
- Check browser console for frontend errors
- Monitor server logs for API errors
- Use Postman or similar tools to test API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📞 Support

**Technical Support:**
- Email: iapidkc2022@gmail.com
- For conference-related queries, contact the organizing committee

**Conference Information:**
- **Event**: NCPID 2025 - National Conference Of Pediatric Infectious Diseases
- **Dates**: October 10-12, 2025
- **Abstract Deadline**: July 7th, 2025 (Extended)
- **Registration Deadline**: August 15, 2025

## 📄 License

This project is proprietary software developed for the NCPID 2025 conference. All rights reserved.

---

**Built with ❤️ for the NCPID 2025 Conference**

For the latest updates and announcements, please visit the official conference website or contact the organizing committee.
