        // Function to display a modal with more information about the selected sustainability initiative
        function showDetails(title, description) {
            const modalTitle = document.getElementById("exampleModalLabel");
            const modalBody = document.getElementById("modalBody");

            modalTitle.innerText = title;
            modalBody.innerText = description;

            // Display the modal
            const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
            modal.show();
        }

        // Function to show a random sustainability tip
        function showRandomTip() {
            const tips = [
                "Reduce, Reuse, Recycle: Practice the 3Rs to minimize waste and conserve resources.",
                "Use Energy-Efficient Appliances: Opt for energy-efficient appliances to reduce energy consumption and save on utility bills.",
                "Plant Trees and Support Afforestation: Trees play a crucial role in absorbing carbon dioxide and providing oxygen, supporting biodiversity and preventing soil erosion.",
                "Conserve Water: Adopt water-saving practices such as fixing leaks, using water-saving fixtures, and avoiding water wastage.",
                "Use Public Transport or Carpool: Reduce your carbon footprint by using public transport or carpooling with others."
            ];

            const randomIndex = Math.floor(Math.random() * tips.length);
            const tipText = tips[randomIndex];

            const tipOfTheDayText = document.getElementById("tip-of-the-day-text");
            tipOfTheDayText.innerText = "Tip of the Day: " + tipText;
        }

        // Call the function to show a random tip when the page is loaded or refreshed
        showRandomTip();

        // When the temperature is above 30 degrees, change the text color to red
        document.addEventListener('DOMContentLoaded', function() {
            const rows = document.querySelectorAll('#temperatureTable tbody tr');
        
            rows.forEach(row => {
                const temperatureCell = row.querySelector('td:nth-child(2)');
                const temperatureValue = parseFloat(temperatureCell.textContent);
        
                if (temperatureValue > 30) {
                    temperatureCell.style.color = 'red';
                }
            });
        });
        
        