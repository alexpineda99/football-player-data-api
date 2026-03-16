**Football Player Data API**

A developer-friendly API providing structured football player card data, ratings and advanced attributes across multiple football game editions.

The API allows developers to easily access historical football player statistics and metadata for use in apps, analytics platforms and gaming tools.

**Features**

• Historical football player ratings (2014–2022)

• Detailed attribute statistics

• Structured player card data

• Pagination support

• Advanced filtering (Mega plan)

• Rate limiting and caching

• High-volume request plans

• Optimized database queries


**Supported Editions**

2014

2015

2016

2017

2018

2019

2020

2021

2022


**Example Request**

GET /ufd/2020/players

**Example Response**
<img width="1740" height="981" alt="dataset 2020" src="https://github.com/user-attachments/assets/f3e15c9f-5e17-4ad4-9607-f8d672cc6cc2" />

**JSON response:**

{

  "name": "Ronaldo",
  
  "fullname": "C. Ronaldo dos Santos Aveiro",
  
  "birth_date": "1985-02-05",
  
  "overall_index": 99,
  
  "position": "ST",
  
  "foot": "Right",
  
  "club": "Piemonte Calcio",
  
  "league": "Serie A TIM",
  
  "country": "Portugal",
  
  "version": "TOTS",
  
  "skills": 5,
  
  "weak_foot": 4,
  
  "height": "187cm | 6'2\"",
  
  "weight": "83KG",
  
  "speed_indexOverallStat": 98,
  
  "speed_indexStats": [
  
    {
    
      "acceleration": 96,
      
      "top_speed": 99
      
    }
    
  ],
  
  "shooting_scoreOverallStat": 99,
  
  "shooting_scoreStats": [
  
    {
    
      "positioning": 99,
      
      "finishing": 99,
      
      "shot_power": 99,
      
      "distance_shots": 99,
      
      "aerial_strikes": 92,
      
      "penalties": 90
      
    }
    
  ],
  
  "passing_indexOverallStat": 92,
  
  "passing_indexStats": [
  
    {
    
      "vision": 92,
      
      "crossing": 94,
      
      "freeKickAccuracy": 85,
      
      "short_distribution": 93,
      
      "long_distribution": 86,
      
      "curve": 90
      
    }
    
  ],
  
  "dribble_indexOverallStat": 99,
  
  "dribble_indexStats": [
  
    {
    
      "agility": 96,
      
      "balance": 78,
      
      "reactions": 99,
      
      "ballControl": 99,
      
      "dribbling": 99,
      
      "composure": 99
      
    }
    
  ],
  
  "defensive_indexOverallStat": 43,
  
  "defensive_indexStats": [
  
    {
    
      "interceptions": 35,
      
      "headingAccuracy": 99,
      
      "marking": 34,
      
      "standingTackle": 39,
      
      "slidingTackle": 29
      
    }
    
  ],
  
  "physical_indexOverallStat": 94,
  
  "physical_indexStats": [
  
    {
    
      "jumping": 99,
      
      "stamina": 99,
      
      "strength": 94,
      
      "aggression": 75
      
    }
    
  ]
  
}


**Use Cases**

The API can be used to build:

• football squad builder tools

• player comparison apps

• football analytics dashboards

• sports data platforms

• gaming community tools

• football databases


**Quick Start**

All requests require RapidAPI authentication headers.


x-rapidapi-key: YOUR_API_KEY

x-rapidapi-host: ultimate-football-data-api.p.rapidapi.com


**Example request using curl:
**
curl https://ultimate-football-data-api.p.rapidapi.com/ufd/2020/players
API Access

**You can access the API via RapidAPI:**

RapidAPI Listing
https://rapidapi.com/ultimate-football-data-api-ultimate-football-data-api-default/api/ultimate-football-data-api

Landing Page
https://ufdapi.netlify.app/

Full Documentation

Full documentation is available here:

https://ufdapi.netlify.app/

Tech Stack

**Backend:**

• Node.js

• Express

• MySQL


**Infrastructure:**

• Render hosting

• RapidAPI distribution


**Legal Notice**

This API provides a historical football player dataset inspired by popular football simulation games.

It is not affiliated with or endorsed by any official football organizations or video game publishers.

**Support**

For technical support:

ufd.support@gmail.com
