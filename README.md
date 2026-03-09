# Dr. Nakhoda's Skin Institute - Website

A production-ready website for Dr. Nakhoda's Skin Institute, a dermatology and cosmetic skin clinic in Karachi, Pakistan.

## Tech Stack

- **Frontend:** Next.js 15 (App Router), React 19, TailwindCSS 4
- **Backend:** Next.js API Routes
- **Database:** MongoDB with Mongoose
- **Email:** Nodemailer (SMTP)
- **Auth:** JWT (jose) with httpOnly cookies

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
MONGODB_URI=mongodb://localhost:27017/drnakhoda
JWT_SECRET=your-random-secret-key-here

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Start MongoDB

Make sure MongoDB is running locally or use MongoDB Atlas:

```bash
# Local MongoDB
mongod

# Or use a MongoDB Atlas connection string in MONGODB_URI
```

### 4. Seed Admin User

```bash
npx tsx src/lib/seed.ts
```

Default admin credentials:
- Email: `admin`
- Password: `admin123`

**Change these in production!**

### 5. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage (conversion funnel) |
| `/about` | About the clinic and doctor |
| `/treatments` | All treatments listed |
| `/pharmacy` | Pharmacy products |
| `/gallery` | Clinic photo gallery |
| `/contact` | Contact information and form |
| `/thank-you` | Post-booking confirmation |
| `/admin` | Admin login |
| `/admin/dashboard` | Appointment management |

## Deployment on VPS (Contabo)

### 1. Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20+
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install MongoDB
# Follow: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx
```

### 2. Deploy Application

```bash
# Clone your repository
git clone <your-repo-url> /var/www/drnakhoda
cd /var/www/drnakhoda

# Install dependencies
npm install

# Set environment variables
cp .env.example .env.local
nano .env.local  # Fill in production values

# Seed admin user
npx tsx src/lib/seed.ts

# Build
npm run build

# Start with PM2
pm2 start npm --name "drnakhoda" -- start
pm2 save
pm2 startup
```

### 3. Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 4. SSL with Let's Encrypt

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### 5. Connect Domain (Namecheap)

1. Log in to Namecheap
2. Go to Domain List > Manage > Advanced DNS
3. Add A Record: Host `@`, Value: `your-server-ip`
4. Add A Record: Host `www`, Value: `your-server-ip`
5. Wait for DNS propagation (up to 48 hours)

## Admin Panel

- Access: `/admin`
- Features: View, approve, and reject appointment requests
- Email notifications sent automatically on status change
