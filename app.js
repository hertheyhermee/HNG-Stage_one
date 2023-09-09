
        // Function to get the current day of the week
        function getCurrentDayOfWeek() {
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const today = new Date();
            return daysOfWeek[today.getUTCDay()];
        }

        // Function to get the current UTC time in milliseconds
        function getCurrentUTCTime() {
            let currrentTime = new Date().getTime();
            // let 

            return currrentTime
        }

        // Update the elements with dynamic data
        document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML += ` ${getCurrentDayOfWeek()}`;
        document.querySelector('[data-testid="currentUTCTime"]').innerHTML += ` ${getCurrentUTCTime()}`;