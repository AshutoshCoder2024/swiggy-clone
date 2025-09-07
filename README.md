# 🍽️ Swiggy Clone

A modern, responsive food delivery application built with React and Tailwind CSS, inspired by Swiggy's design and functionality.

![Swiggy Clone](https://img.shields.io/badge/React-19.1.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.7-38B2AC) ![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF)


## 🚀 Features

- **🏠 Home Page**: Beautiful landing page with food categories and restaurant options
- **🍕 Food Categories**: Browse through various food categories like Pizza, Burger, Chinese, North Indian, etc.
- **🏪 Restaurant Listing**: View restaurants with ratings, delivery time, and cuisine information
- **📱 Restaurant Menu**: Detailed menu view with food items and prices
- **🔍 Food Search**: Search functionality to find specific food items
- **🛒 Groceries Section**: Browse grocery items and essentials
- **📱 Responsive Design**: Mobile-first design that works on all devices
- **⚡ Fast Loading**: Optimized performance with Vite build tool
- **🎨 Modern UI**: Clean and intuitive user interface with Tailwind CSS



## 🛠️ Tech Stack 
## 🛠️ Tech Stack 
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4.1.7
- **Build Tool**: Vite 6.3.5
- **Routing**: React Router DOM 7.7.0
- **Development**: ESLint for code quality


## 📦 Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/swigy-clone.git
   cd swigy-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🏗️ Project Structure

```
swigy-clone/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Home_page.jsx  # Main landing page
│   │   ├── Restuarants.jsx # Restaurant listing
│   │   ├── RestuarantMenu.jsx # Restaurant menu
│   │   ├── Foodcard.jsx   # Food item cards
│   │   ├── Restcard.jsx   # Restaurant cards
│   │   ├── SearchFood.jsx # Food search functionality
│   │   └── shimmer.jsx    # Loading skeleton
│   ├── Utils/             # Data and utilities
│   │   ├── FoodData.js    # Food category data
│   │   ├── groceriesdata.js # Grocery data
│   │   └── dileverydata.jsx # Delivery information
│   ├── photos/            # Images and assets
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## 🎯 Key Components

### Home Page (`Home_page.jsx`)
- Displays food categories and restaurant options
- Includes header navigation and app download banner

### Restaurant Listing (`Restuarants.jsx`)
- Fetches restaurant data from Swiggy API
- Displays restaurant cards with ratings and delivery info
- Includes loading shimmer effect

### Restaurant Menu (`RestuarantMenu.jsx`)
- Shows detailed menu for selected restaurant
- Displays food items with prices and descriptions

### Search Functionality (`SearchFood.jsx`)
- Allows users to search for specific food items
- Filters results based on search query

## 🌐 API Integration

The application integrates with Swiggy's API to fetch:
- Restaurant listings
- Menu data
- Food categories
- Delivery information

### API Endpoints Used

#### Restaurant Listing API
```
https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3440997&lng=85.309562&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
```

#### Mobile Restaurant API
```
https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=10.054039908667727&lng=76.34344674532176&carousel=true&third_party_vendor=1
```

#### Restaurant Menu API
- **Pizza Hut**: `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3440997&lng=85.309562&restaurantId=80227&catalog_qa=undefined&submitAction=ENTER`
- **Burger King**: `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.3440997&lng=85.309562&restaurantId=657477&catalog_qa=undefined&submitAction=ENTER`

#### Food Search API
```
https://www.swiggy.com/dapi/menu/pl/search?lat=22.8006&lng=86.1871&restaurantId=449028&isMenuUx4=true&query=pizza&submitAction=ENTER
```

### API Structure Notes
- Different restaurants have the same API structure with only the `restaurantId` parameter changing
- All restaurant menus follow the same endpoint pattern
- The app dynamically passes restaurant IDs to fetch specific menu data


### CORS Proxy Configuration
```javascript
const proxyserver = "https://cors-anywhere.herokuapp.com/";
```

**Note**: The app uses a CORS proxy to access Swiggy's API due to cross-origin restrictions.

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- Responsive design utilities
- Custom color schemes
- Modern component styling
- Mobile-first approach

## 📱 Responsive Design

- **Mobile**: Optimized for mobile devices with touch-friendly interfaces
- **Tablet**: Responsive layout that adapts to tablet screens
- **Desktop**: Full-featured desktop experience with hover effects

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS 4.1.7 with custom configuration in `tailwind.config.js`.

### Vite
Development server configuration in `vite.config.js` with React plugin.

## 🌟 Features in Detail


### Food Categories
- Pizza, Burger, Chinese, North Indian
- Rolls, Momos, Cakes, Paratha
- Ice Cream, Biryani, Chole Bhature
- Pasta, Pav Bhaji, Shawarma, Noodles
- Kebabs, Samosa, Gulab Jamun, Shake
- Pure Veg options


### Restaurant Features
- Restaurant ratings and reviews
- Delivery time estimation
- Cuisine type display
- Restaurant images and descriptions


### User Experience
- Smooth navigation between pages
- Loading states with shimmer effects
- Search functionality
- Responsive design across devices


## 🚧 Challenges Faced & Solutions


### 1. Handling Large Amounts of Data
**Problem**: Managing large datasets with varying structures across different restaurants.

**Solution**: 
- Implemented dynamic data handling based on restaurant type
- Used conditional rendering for different data structures
- Created flexible components that adapt to various data formats
- Implemented category-based filtering (Veg/Non-Veg sections)



### 2. File Naming and Organization
**Problem**: Confusion about which file handles which functionality.


**Solution**:
- Established clear naming conventions
- Created detailed component documentation
- Organized files by feature and responsibility
- Used descriptive component names


### 3. Search Functionality Limitations
**Problem**: Search API requires active Swiggy session cookies, which aren't available through the proxy server.


**Technical Details**:
- Swiggy's search API expects active user session cookies
- CORS proxy server doesn't maintain Swiggy session state
- Search requests fail without proper authentication cookies


**Workaround**:
- Implemented client-side filtering for available data
- Used restaurant menu data for local search functionality
- Created mock search results for demonstration purposes




## 🔍 Technical Implementation Details


### Data Flow
1. **Restaurant Listing**: Fetches from Swiggy's restaurant API
2. **Menu Data**: Dynamically loads based on selected restaurant ID
3. **Search**: Client-side filtering of available menu items
4. **Categories**: Handles different restaurant category structures



### State Management
- Uses React hooks for local state management
- Implements loading states with shimmer effects
- Manages API responses and error handling


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License


This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙏 Acknowledgments

- Inspired by Swiggy's design and functionality
- Built with React and Tailwind CSS
- Uses Swiggy's API for data (for educational purposes)
- Special thanks to the open-source community for CORS proxy solutions

## 📞 Contact

If you have any questions or suggestions, feel free to reach out:

- **Email**: [ashutoshsahu9601@gmail.com]
- **LinkedIn**: [https://www.linkedin.com/in/ashutosh-kumar-sahu-5a5713331/]
- **Insagram**:[https://www.instagram.com/ashutosh_sahu_00/]

---

⭐ **Star this repository if you found it helpful!**
