# NewsHub

### Description:
This is a dynamic and responsive React news application that fetches the latest headlines from the NewsAPI. It allows users to browse news articles based on categories like technology, sports, entertainment, and more.

### Key Features:
1. **Infinite Scrolling:** Utilizes the "react-infinite-scroll-component" to load more news articles as the user scrolls down, providing a seamless reading experience.
2. **Category Selection:** Users can select their preferred news category, such as technology, sports, or health, and view the latest headlines in that category.
3. **Progress Bar:** Displays a progress bar that updates as news articles are loaded, giving users visual feedback on data retrieval.
4. **Responsive Design:** The application is designed to work seamlessly on various screen sizes, including mobile devices and desktops.
5. **NewsItem Component:** Each news article is displayed using the "NewsItem" component, which provides a brief summary, image, source, and publication date.
6. **Prop Validation:** PropTypes are used for prop validation to ensure data integrity and consistency.
7. **Dynamic Page Title:** Sets the page title dynamically to reflect the selected news category, enhancing the user experience.

### How to Use:
1. Clone the repository to your local machine.
2. Install the required dependencies using npm or yarn.
3. Replace the NewsAPI key in the code with your own API key (you can get one from NewsAPI).
4. Run the application using npm start or yarn start.
