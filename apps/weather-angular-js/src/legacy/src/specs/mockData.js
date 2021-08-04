const mockData = {
    currentWeather: {
        city: 'Sydney',
        country: 'Australia',
        icon: 'weather-icon-0',
        temp: '28',
        tempUnit: 'F',
        condition: 'Sunny',
        date: 'Sat, 16 Dec 2017 08:00 PM CST',
    },
    currentForecast: [
        { day: 'Sat', date: 'Sat, 16 Dec 2017 08:00 PM CST', code: 0, high: '28', low: '20', condition: 'Sunny', },
        { day: 'Sun', date: 'Sun, 17 Dec 2017 08:00 PM CST', code: 0, high: '25', low: '19', condition: 'Partly Cloudy', },
        { day: 'Mon', date: 'Mon, 18 Dec 2017 08:00 PM CST', code: 0, high: '28', low: '20', condition: 'Sunny', },
        { day: 'Tue', date: 'Tue, 19 Dec 2017 08:00 PM CST', code: 0, high: '25', low: '19', condition: 'Partly Cloudy', },
        { day: 'Wed', date: 'Wed, 20 Dec 2017 08:00 PM CST', code: 0, high: '24', low: '18', condition: 'Rain', },
        { day: 'Thu', date: 'Thu, 21 Dec 2017 08:00 PM CST', code: 0, high: '24', low: '18', condition: 'Rain', },
    ],
    weatherLgBindings: {
        city: 'Sydney',
        country: 'Australia',
        icon: 'weather-icon-0',
        temp: '28',
        unit: 'F',
        condition: 'Sunny',
        date: 'Sat, 16 Dec 2017 08:00 PM CST',
    },
    weatherSmBindings: { 
        day: 'Sat', 
        date: 'Sat, 16 Dec 2017 08:00 PM CST', 
        icon: 'weather-icon-0', 
        high: '28', 
        low: '20', 
        condition: 'Sunny', 
    },
    weatherStateEvents: {
        loadWeather: 'loadWeather',
        updateCurrentWeather: 'updateCurrentWeather',
        updateCurrentForecast: 'updateCurrentForecast',
    },
    newCurrentWeather: {
        city: 'Houston',
        country: 'United States',
        icon: 'weather-icon-0',
        temp: '70',
        tempUnit: 'F',
        condition: 'Sunny',
        date: 'Sat, 16 Dec 2017 08:00 PM CST',
    },
};

export default mockData;
