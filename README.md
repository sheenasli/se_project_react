# WTWR (What to Wear?)

## Overview

- About the project
- Features
- Figma Design
- Links
- Plans for Improvement

## About the project

The concept of the WTWR application is pretty simple - it makes a call to an external API (OpenWeather), which then responds with the daily weather forecast for a specific city. The WTWR application then collects this weather data, processes it, and then based on the forecast, recommends suitable clothing to wear to the user.

## Features

- Calls to external weather API when a user visits the site
- Responses are parsed and current temperature and city will be saved as a React state
- Set of clothing cards generated from hard-coded array of data
- Current location set in header
- Current temperature(F) set in the weather card
- Set temperature used to filter cards shown to user
- New garment modal can be opened and closed
- Image modal will appear when a card is clicked

## Figma Design

The Figma design was supplied by TripleTen and used to map out the UI design for this single page application. If you click on the link below, you will see that this design includes detailed views of each component used within the react application. The images and logos used were included in the Figma design. The second link includes detailed information for building the different screen-size applications.

- [Figma Design](https://www.figma.com/file/DTojSwldenF9UPKQZd6RRb/Sprint-10%3A-WTWR)
- [Figma Design for different screen-sizes](https://www.figma.com/file/F03bTb81Pw8IDPj5Y9rc5i/Sprint-10-%7C-WTWR?type=design&node-id=209-64&mode=design&t=gDxvwO7ejgoWXv7r-0)

## Links

- The project is hosted on GitHub Pages and can be seen live using the this [https://sheenasli.github.io/se_project_react/]
- The project's backend can be found by using this [link.]
- The API (OpenWeather) used in this application can be found by clicking on this [https://openweathermap.org/]

## Plans for Improvement

- Make the WTWR application responsive (header, cards, modal windows) to make it more user-friendly and aesthetically pleasing on different screen sized and devices
