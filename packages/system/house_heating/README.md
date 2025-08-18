# House Heating

## House heating controller

### input_select.house_heating_mode

House heating mode:

* Manual mode: the house heating is controlled manually using switch.house_heating

* Automatic mode: the house heating is controlled by the average outside temperature according to [Czech Heating Season Rules](https://www.zakonyprolidi.cz/cs/2007-194)

### input_number.house_heating_season_treshold

Temperature threshold for calculating the heating season. According to [Czech Heating Season Rules](https://www.zakonyprolidi.cz/cs/2007-194), the default value is 13°C.

### binary_sensor.house_heating_season

This sensor turns on when average outside temperature for three consecutive days is below treshold temperature and turns off when average outside temperature for three consecutive days is above treshold temperature.

### switch.house_heating

This switch turns the heating in the house on or off by setting all room thermostats to Auto or Off mode. In Automatic mode, the switch is controlled by the house heating season sensor.

### sensor.outside_average_temperature_<yesterday|today|tomorrow>

The average outdoor temperature for a given day calculated according to [Czech Heating Season Rules](https://www.zakonyprolidi.cz/cs/2007-194).

Yesterday's and today's average ouside temperatures are calculated from the real temperature sensors, tomorrow's average outside temperature is calculated from the weather forecast.

The average outside temperature for a given day is calculated as a quarter of the sum of the temperatures at 7 a.m., 2 p.m., and double that at 9 p.m.

The calculation of average outside temperatures and the subsequent decision to start or end the heating season is made after 10 p.m. and immediately turns the house heating on or off.

## Heating UI

### Storage Tank

Vertical Bar with Temperature Gradient:

* [HASS Community: Gradient vertical Bar card](https://community.home-assistant.io/t/lovelace-bar-card/87503/905)
* [GitHub: Bar-Card (Not Maintained)](https://github.com/custom-cards/bar-card)
* [GitHub: Bar-Card (Fork)](https://github.com/spacerokk/bar-card)
