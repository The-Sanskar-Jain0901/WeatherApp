const submitBtn = document.getElementById('submitBtn');
const city = document.getElementById('city');
const city_name = document.getElementById('city_name');
const temp_stat = document.getElementById('temp_stat');
const temp = document.getElementById('temp');

// const datahide = document.querySelector('.mid_layer');
const getInfo = async (e) => {
    e.preventDefault();
    let city_val = city.value;
    if (city_val === "") {
        city_name.innerText = `plz enter something before search`;
        // datahide.classList.add('data_hide');
    }
    else {

        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city_val}&appid=d94314e9cb3f3ebfc307c95ac336c43b`;
        const resp = await fetch(url);
        const data = await resp.json();
        const arrdata = [data];
        city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
        temp.innerText = arrdata[0].main.temp - 272.15;
        const tempMood = arrdata[0].weather[0].main;
        if (tempMood = "Clear") {
            temp_status.innerHTML =
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
        }
        else if (tempMood = "Clouds") {
            temp_status.innerHTML =
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
        }
        else if (tempMood = "Rain") {
            temp_status.innerHTML =
                "<i class='fas fa-cloud-rain' style='color: #a4bøbe;'></i>";
        }
        else {
            temp_status.innerHTML =
                "<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }
        // datahide.classList.remove('data_hide');

        // catch (error) {
        //     city_name.innerText = `pls enter city name properly`;
        //     // datahide.classList.add('data_hide');
        // }
    }
}
submitBtn.addEventListener('click', getInfo);
