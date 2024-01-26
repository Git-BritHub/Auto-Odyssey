export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '90708da7cbmshb38712e588059a4p1d67bejsnb32e26c86991',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });
    const result = await response.json();
    return result;
}