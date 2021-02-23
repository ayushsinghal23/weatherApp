/** @format */
const submitBtn = document.getElementById("searchBtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.querySelector("#temp span");
const datahide = document.querySelector(".middle_layer");
// console.log(temp);

const APIkey = "4f30ced6bcb3d3f4aee7eb351396abe3";

const getInfo = async (event) => {
	event.preventDefault();
	let cityval = cityname.value;

	if (cityval === "") {
		city_name.innerText = "Please Enter the Correct City Name";
		datahide.classList.add("data_hide");
	} else {
		try {
			datahide.classList.remove("data_hide");
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=${APIkey}`;
			const response = await fetch(url);
			const data = await response.json();
			const arrData = [data];
			city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
			temp.innerText = arrData[0].main.temp;
			const tempMood = arrData[0].weather[0].main;
			if (tempMood === "Clear") {
				temp_status.innerHTML =
					'<i class="fas fa-sun" style="color:#eccc68;"></i>';
			} else if (tempMood === "Clouds") {
				temp_status.innerHTML =
					'<i class="fas fa-cloud" style="color:#f1f2f6;"></i>';
			} else if (tempMood === "Rain") {
				temp_status.innerHTML =
					'<i class="fas fa-rain" style="color:#a4b04e;"></i>';
			} else {
				temp_status.innerHTML =
					'<i class="fas fa-sun" style="color:#f1f2f6;"></i>';
			}
		} catch {
			city_name.innerText = "Please Enter the Correct City Name";
			datahide.classList.add("data_hide");
		}
	}
};
submitBtn.addEventListener("click", getInfo);
