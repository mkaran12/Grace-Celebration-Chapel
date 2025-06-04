# Grace Celebration Chapel Website

A modern, responsive website for Grace Celebration Chapel built with React and TypeScript. This website serves as the digital home for our church community, providing information about services, events, ministries, and ways to connect.

## 🏛️ About Grace Celebration Chapel

Grace Celebration Chapel is a vibrant community of believers dedicated to worship, fellowship, and service. Our website reflects our mission to welcome all people and share the love of Christ through digital ministry.

## 🚀 Features

- **Single Page Application**: Smooth navigation without page reloads
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Home Page**: Welcome message and church overview
- **About Section**: Church history, mission, and leadership information
- **Services**: Worship service times, locations, and details
- **Ministries**: Information about various church ministries and small groups
- **Resources**: Spiritual resources, downloads, and helpful materials
- **Contact Page**: Church location, contact information, and inquiry forms
- **Online Giving**: Secure donation platform integration
- **Smooth Animations**: CSS animations for enhanced user experience
- **Accessibility**: WCAG compliant for inclusive user experience

## 🛠️ Technology Stack

- **Frontend**: React 18+ with TypeScript
- **Navigation**: Custom single-page application routing
- **Styling**: CSS3 with custom animations
- **State Management**: React useState hooks
- **Component Architecture**: Modular component-based design
- **Build Tool**: Create React App / Vite
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint + Prettier

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gracecelebrationchapel/website.git
   cd grace-celebration-chapel-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the environment variables in `.env.local`:
   ```
   REACT_APP_API_URL=your_api_endpoint
   REACT_APP_CONTACT_EMAIL=info@gracecelebrationchapel.org
   REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_key
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

   The website will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # Main page components
│   ├── Home.tsx        # Home page component
│   ├── About.tsx       # About page component
│   ├── Services.tsx    # Services information
│   ├── Ministries.tsx  # Ministries overview
│   ├── Resources.tsx   # Spiritual resources
│   ├── Contact.tsx     # Contact information and forms
│   └── Giving.tsx      # Online giving platform
├── layout/             # Layout components
│   ├── Navigation.tsx  # Main navigation component
│   └── Footer.tsx      # Footer component
├── styles/             # Styling files
│   └── animations.css  # Custom CSS animations
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── assets/             # Images, icons, and other static assets
└── __tests__/          # Test files
```

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 🎨 Styling Guidelines

- Use custom CSS with animations.css for enhanced user experience
- Follow mobile-first responsive design principles
- Maintain consistent color scheme reflecting church branding
- Ensure proper contrast ratios for accessibility
- Use semantic HTML elements
- Implement smooth scrolling and transitions for better UX

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Production Build

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build/` directory.

### Deployment Options

**Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

**Netlify**
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Configure environment variables

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_API_URL` | Backend API endpoint | Yes |
| `REACT_APP_CONTACT_EMAIL` | Church contact email | Yes |
| `REACT_APP_GOOGLE_MAPS_API_KEY` | Google Maps integration | No |
| `REACT_APP_STRIPE_PUBLIC_KEY` | Online giving integration | No |
| `REACT_APP_YOUTUBE_CHANNEL_ID` | YouTube channel for sermons | No |

## 📚 Contributing

We welcome contributions from church members and the community! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Write or update tests**
5. **Ensure code quality**
   ```bash
   npm run lint
   npm run test
   ```
6. **Commit your changes**
   ```bash
   git commit -m "Add your descriptive commit message"
   ```
7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Create a Pull Request**

### Code Style

- Follow TypeScript best practices
- Use descriptive variable and function names
- Add comments for complex logic
- Maintain consistent indentation (2 spaces)
- Use Prettier for code formatting

## 🐛 Bug Reports

If you find a bug, please create an issue with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Browser and device information
- Screenshots (if applicable)

## 📞 Support

For technical support or questions:
- **Email**: tech@gracecelebrationchapel.org
- **GitHub Issues**: Create an issue for bugs or feature requests
- **Documentation**: Check our wiki for detailed guides

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Church leadership for their vision and support
- Volunteer developers and contributors
- Open source community for the amazing tools and libraries
- Church members for their feedback and testing

---

**Grace Celebration Chapel**  
*Building community, sharing faith, celebrating grace*

For more information about our church, visit us at [gracecelebrationchapel.org](https://gracecelebrationchapel.org)