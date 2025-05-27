#Restaurant Page

A modern, responsive single-page restaurant website built with vanilla JavaScript, Webpack, and custom CSS.

Table of Contents

Project Overview

Features

Demo

Installation

Usage

Project Structure

Technologies

Contributing

License

Author

Project Overview

This project implements a simple restaurant website with three main sections—Home, Menu, and About—dynamically rendered using JavaScript modules. A fixed footer component displays site credits. Styling is applied via a custom CSS stylesheet, ensuring a clean, modern look.

Features

Single-Page Navigation: Navigate between Home, Menu, and About sections without page reloads.

Dynamic Content Loading: Each section is loaded through separate JavaScript modules (home.js, menu.js, about.js, footer.js).

Modular Architecture: Clear separation of concerns with each page section encapsulated in its own module.

Custom Styling: Responsive design and a fixed footer using CSS variables and Flexbox.

Webpack Bundling: Development build configured with Hot Reload and source maps.

Demo

Place a link or screenshot here if available.

Installation

Clone the repository

git clone https://github.com/ChivuAndrei2003/Restaurant-Page.git
cd Restaurant-Page

Install dependencies

npm install

Usage

Development server (auto-opens in browser):

npm run dev

Production build:

npm run build

The optimized output will be in the dist/ folder.

Project Structure

Restaurant-Page/
├─ dist/                  # Build output (auto-generated)
├─ node_modules/          # npm packages
├─ src/                   # Application source files
│  ├─ modules/            # JavaScript modules for each section
│  │  ├─ home.js          # Home section loader
│  │  ├─ menu.js          # Menu section loader
│  │  ├─ about.js         # About section loader
│  │  └─ footer.js        # Footer loader
│  ├─ style.css           # Main stylesheet
│  └─ index.js            # Entry point, initializes navigation
├─ template.html          # Base HTML template
├─ webpack.config.js      # Webpack configuration
├─ package.json           # Project metadata & scripts
└─ README.md              # This documentation

Technologies

JavaScript (ES6+) for dynamic DOM manipulation and module imports.

Webpack for bundling, development server, and asset management.

HTML5 & CSS3 with CSS variables, Flexbox, and modern design techniques.

Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Author

Made with ❤️ by ChivuAndrei2003