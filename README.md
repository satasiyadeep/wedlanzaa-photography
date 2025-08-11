# Wedlanzaa Wedding Photography Website

A beautiful, modern wedding photography business website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🌟 Features

- **Stunning UI/UX**: Beautiful, responsive design with smooth animations
- **Gallery Management**: Showcase wedding photography samples with category filtering
- **Inquiry System**: Contact form for potential clients to request photography services
- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern Animations**: Smooth transitions and interactions using Framer Motion
- **Professional Layout**: Clean, elegant design perfect for a photography business

## 🚀 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Nodemailer** - Email functionality
- **Multer** - File upload handling

### Frontend
- **React.js** - Frontend framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Axios** - HTTP client

## 📁 Project Structure

```
mern-todo-app/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source code
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json       # Frontend dependencies
├── models/                 # MongoDB models
├── routes/                 # API routes
├── server.js              # Express server
├── package.json           # Backend dependencies
└── README.md              # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Backend Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp env.example .env
   ```
   
   Update the `.env` file with your configuration:
   - `MONGODB_URI`: Your MongoDB connection string
   - `EMAIL_USER`: Gmail address for sending emails
   - `EMAIL_PASS`: Gmail app password
   - `PORT`: Server port (default: 5000)

3. **Start the server**
   ```bash
   npm run server
   ```

### Frontend Setup

1. **Navigate to client directory**
   ```bash
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

### Development Mode

Run both backend and frontend simultaneously:
```bash
npm run dev
```

## 🌐 API Endpoints

### Inquiries
- `POST /api/inquiries` - Create new inquiry
- `GET /api/inquiries` - Get all inquiries (admin)
- `PATCH /api/inquiries/:id` - Update inquiry status
- `DELETE /api/inquiries/:id` - Delete inquiry

### Gallery
- `GET /api/gallery` - Get all gallery images
- `GET /api/gallery/featured` - Get featured images
- `GET /api/gallery/category/:category` - Get images by category
- `POST /api/gallery` - Add new image (admin)
- `PATCH /api/gallery/:id` - Update image (admin)
- `DELETE /api/gallery/:id` - Delete image (admin)

## 📱 Pages

1. **Home** - Hero section, services, testimonials
2. **Gallery** - Photography portfolio with category filters
3. **About** - Information about Sahil Savaliya and the business
4. **Contact** - Inquiry form and contact information

## 🎨 Design Features

- **Color Scheme**: Elegant gold (#d4af37) and dark theme
- **Typography**: Playfair Display (headings) and Poppins (body text)
- **Animations**: Smooth scroll animations and hover effects
- **Responsive**: Mobile-first design approach
- **Modern UI**: Clean cards, gradients, and shadows

## 📧 Email Configuration

The website sends automatic confirmation emails when inquiries are submitted. To enable this:

1. Use a Gmail account
2. Enable 2-factor authentication
3. Generate an app password
4. Update the `.env` file with your credentials

## 🚀 Deployment

### Backend Deployment
- Deploy to Heroku, Railway, or any Node.js hosting platform
- Set environment variables in your hosting platform
- Ensure MongoDB connection is accessible

### Frontend Deployment
- Build the React app: `npm run build`
- Deploy the `build` folder to Netlify, Vercel, or any static hosting

## 🔧 Customization

### Business Information
- Update contact details in components
- Modify package prices and features
- Change business location and hours

### Styling
- Modify colors in CSS variables
- Update fonts and typography
- Customize animations and transitions

### Content
- Replace sample images with actual photography work
- Update testimonials and reviews
- Modify service descriptions

## 📞 Support

For support or questions about this website:
- **Contact Person**: Sahil Savaliya
- **Email**: info@wedlanzaa.com
- **Phone**: +91 98765 43210

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with love for the wedding photography business
- Special thanks to all the couples who trust us with their special moments
- Powered by modern web technologies and best practices

---

**Wedlanzaa Wedding Photography** - Capturing love stories forever ❤️ 