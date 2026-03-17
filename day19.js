// async function fetchData(city) {
//     try {
//         const API_key = "e14307b6755c3d02a88405326217198f";
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=e14307b6755c3d02a88405326217198f`);

//         const data = await response.json();
//         console.log(city);
//         console.log(data.main.temp);
//         console.log(data.main.humidity);
//     } catch (err) {
//         console.error(err);
//     }
// }
// fetchData("london")
