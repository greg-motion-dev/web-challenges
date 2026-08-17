# Title

A movie details page that allows a user to view more information about a selected movie.

## Value Proposition

**As a** `movie enthusiast anticipating the latest releases` <br>
**I want to** `open a movie details page and view more information about a selected movie` <br>
**so that** `I can better decide whether I want to watch it ` <br>

## Description

![wireframe](./assets/scribble-movie-details-page.png)

## Acceptance Criteria

Movie selection - User can open the details page by clicking on a movie card from the homescreen.
Back navigation - User can click a back arrow to return to the homescreen.
Movie title - User can see and read the official movie title.
Release date - User can see the official release date of the movie.
Poster display - User can see a larger preview of the movie's official poster.
Overview text - User can see a short description or overview of the movie.
Details layout - User can see the title, release date, poster, and overview clearly arranged on the page.
Missing movie data - User can see a fallback notification or placeholder if some movie details are unavailable.

-

## Tasks

- Front-End:
  - Build movie details page UI
  - Add clickable movie cards on homescreen
  - Implement navigation from homescreen to details page
  - Create back button navigation
  - Display movie title
  - Display release date
  - Display large movie poster
  - Display movie overview/description
  - Create fallback UI for missing movie details
  - Style page layout based on the wireframe

- Back-End:
  - Create endpoint or service for fetching a single movie by ID
  - Ensure response includes title, release date, poster, and overview
