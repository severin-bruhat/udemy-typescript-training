const add = (a: number, b: number) => {
    return a + b;
};

const substract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
};

const multiply = function(a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): string => {
    if(!message){
        throw new Error(message);
    }

    return message;
}

const throwError2 = (message: string): never => {
    throw new Error(message);
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny',
}

const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

// USING DETRUTCURING
// ES2015
const logWeatherES2015 = ({ date, weather}) => {
    console.log(date);
    console.log(weather);
}

const logWeatherDestructured = ({
    date, 
    weather
}: {
    date: Date, 
    weather: string
}): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);
logWeatherES2015(todaysWeather);
logWeatherDestructured(todaysWeather);