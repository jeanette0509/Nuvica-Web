        // Article scrolling functionality
        function scrollArticles(direction) {
            const container = document.getElementById('articlesScroll');
            const scrollAmount = 300; // Adjust this value to change scroll distance
            
            if (direction > 0) {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        }
        
        // You can add more interactive features here
        document.addEventListener('DOMContentLoaded', function() {
            // Any additional JavaScript functionality can be added here
            console.log('Website loaded successfully');
        });