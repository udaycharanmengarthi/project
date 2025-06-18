# CustomsPortal - Digital Customs Filing System

A modern, responsive web application for managing customs declarations and trade documentation. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Authentication & Security
- Secure login system with form validation
- Demo credentials for testing
- Protected routes and session management
- Real-time form validation with error handling

### Dashboard & Analytics
- Comprehensive dashboard with key metrics
- Real-time filing status tracking
- Performance analytics and trends
- Interactive summary cards with trend indicators

### Filing Management
- Complete filing lifecycle management
- Status tracking (Pending, Approved, Rejected, In Review)
- Detailed filing information and descriptions
- Customer and shipment data management

### User Experience
- Fully responsive design (mobile, tablet, desktop)
- Modern UI with smooth animations and transitions
- Intuitive navigation with collapsible sidebar
- Real-time notifications and activity feed
- Advanced search and filtering capabilities

### Technical Features
- TypeScript for type safety
- Component-based architecture
- Mock data for development and testing
- Loading states and error handling
- Optimized performance and accessibility

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Code Quality**: ESLint with TypeScript support

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd customs-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🔐 Demo Credentials

For testing the application, use these demo credentials:

- **Email**: `demo@customsportal.com`
- **Password**: `demo123`

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

Key responsive features:
- Collapsible sidebar navigation
- Adaptive table layouts
- Mobile-optimized forms
- Touch-friendly interactions

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563EB)
- **Success**: Emerald (#059669)
- **Warning**: Amber (#D97706)
- **Error**: Red (#DC2626)
- **Neutral**: Gray scale

### Typography
- **Headings**: Inter font family, bold weights
- **Body**: Inter font family, regular weight
- **Spacing**: 8px grid system

### Components
- Rounded corners (8px, 12px, 16px)
- Subtle shadows and borders
- Smooth hover transitions
- Consistent spacing and alignment

## 📊 Mock Data Structure

The application includes comprehensive mock data:

### Filings
- 10 sample customs filings
- Various statuses and types
- Realistic customer and shipment data
- Date/time stamps and values

### Users
- Sample user profiles
- Role-based information
- Avatar integration

### Activities
- Recent activity feed
- Different activity types
- Timestamp tracking

## 🚀 Build & Deployment

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── FilingsList.tsx
│   ├── Header.tsx
│   ├── LayoutWrapper.tsx
│   ├── LoginForm.tsx
│   ├── Sidebar.tsx
│   └── SummaryCard.tsx
├── data/               # Mock data and constants
│   └── mockData.ts
├── pages/              # Page components
│   ├── Dashboard.tsx
│   └── Login.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration

## 🎯 Key Features Implemented

### ✅ Authentication Flow
- [x] Login form with validation
- [x] Error handling and loading states
- [x] Demo credentials system
- [x] Protected routing

### ✅ Dashboard
- [x] Summary statistics cards
- [x] Recent filings table
- [x] Activity feed
- [x] Quick actions panel
- [x] Performance metrics

### ✅ Responsive Design
- [x] Mobile-first approach
- [x] Adaptive layouts
- [x] Touch-friendly interfaces
- [x] Cross-browser compatibility

### ✅ User Experience
- [x] Loading states
- [x] Error handling
- [x] Smooth animations
- [x] Intuitive navigation
- [x] Accessibility features

## 🚀 Future Enhancements

- [ ] Real API integration
- [ ] Advanced filtering and search
- [ ] Document upload functionality
- [ ] Email notifications
- [ ] Export capabilities
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Advanced analytics dashboard

## 📄 License

This project is created for educational and demonstration purposes.

## 🤝 Contributing

This is a demo project. For production use, consider:
- Implementing real authentication
- Adding comprehensive testing
- Setting up CI/CD pipelines
- Adding error monitoring
- Implementing proper state management

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**