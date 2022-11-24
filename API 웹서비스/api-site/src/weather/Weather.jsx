import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import "./Weather.css";

const Weather = () => {
  const [weatherdata, setweatherdata] = useState({});
  const [weatherdaysdata, setweatherdaysdata] = useState({});
  const API_KEY = "0ec244e46591fd7c367a89652a2c737e";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.5665&lon=126.9780&appid=${API_KEY}`;

  const seoulWeather = async () => {
    try {
      const data = await axios({
        method: "get",
        url: url,
      });
      setweatherdata(data);
      console.log(data);
    } catch (err) {
      alert(err);
    }
  };
  // const seoulWeatherdays = async () => {
  //   try {
  //     const daysdata = await axios({
  //       method: "get",
  //       url: daysurl,
  //     });
  //     setweatherdaysdata(daysdata);
  //     console.log(daysdata);
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  useEffect(() => {
    seoulWeather();
    // seoulWeatherdays();
  }, []);

  return (
    <>
      <div className="col-lg-2"></div>
      <div className="col-lg-4">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {Object.keys(weatherdata).length !== 0 && (
                  <div className="justCenter">
                    <div className="colum">
                      <div className="WeatherPlace">위치</div>
                      <div> {weatherdata.data.name}</div>
                    </div>
                    <div className="colum">
                      <div className="WeatherPlace">온도</div>
                      <div>
                        {Math.round(
                          (weatherdata.data.main.temp - 273.15) * 10
                        ) / 10}
                        °C
                      </div>
                    </div>
                    <div className="colum">
                      <div className="WeatherPlace">
                        {/* {weatherdata.data.weather[0].main === "Clouds" && (
                          <div>비</div>
                        )} */}
                        {weatherdata.data.weather.map(
                          (sun) =>
                            sun.main === "Clouds" && (
                              <div>
                                <i class="fa-solid fa-cloud"></i>
                              </div>
                            )
                        )}
                        {weatherdata.data.weather.map(
                          (sun) =>
                            sun.main === "Snow" && (
                              <div>
                                <i class="fa-solid fa-snowflake"></i>
                              </div>
                            )
                        )}
                        {weatherdata.data.weather.map(
                          (sun) =>
                            sun.main === "Rain" && (
                              <div>
                                <i class="fa-solid fa-cloud-showers-heavy"></i>
                              </div>
                            )
                        )}
                        {weatherdata.data.weather.map(
                          (sun) =>
                            sun.main === "Clear" && (
                              <div>
                                <i class="fa-solid fa-sun"></i>
                              </div>
                            )
                        )}
                      </div>
                      <div className="sun">
                        {weatherdata.data.weather.map(
                          (sun) => sun.main === "Clear" && <div>맑음</div>
                        )}
                        {weatherdata.data.weather.map(
                          (sun) => sun.main === "Rain" && <div>비</div>
                        )}
                        {weatherdata.data.weather.map(
                          (sun) => sun.main === "Snow" && <div>눈</div>
                        )}
                        {weatherdata.data.weather.map(
                          (sun) => sun.main === "Clouds" && <div>구름</div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
