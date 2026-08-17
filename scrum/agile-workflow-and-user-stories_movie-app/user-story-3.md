# Title

A watchlist feature that allows a user to save movies and view them in a dedicated watchlist page.

## Value Proposition

**As a** `movie enthusiast anticipating the latest releases` <br>
**I want to** `add movies to a personal watchlist and access them later` <br>
**so that** `I can keep track of movies I want to watch conveniently` <br>

## Description

![wireframe](./assets/scribble-movie-details-page.png)

## Acceptance Criteria

Add to watchlist - User can add a movie to the watchlist from the movie details page.
Watchlist navigation - User can open the watchlist page using the bottom navigation.
Saved movies display - User can see all saved watchlist movies displayed in a grid.
Movie preview - User can see each saved movie's poster, title, and score in the watchlist.
Watchlist persistence - Added movies remain visible in the watchlist after navigation between pages.
Empty watchlist - User can see a notification message if no movies have been added yet.
Bottom navigation - User can switch between Home and Watchlist using the bottom navigation bar.
Duplicate prevention - User cannot add the same movie to the watchlist multiple times.

-

## Tasks

- Front-End:
  - Build watchlist page UI
  - Build bottom navigation with Home and Watchlist tabs
  - Add "Add to Watchlist" button on movie details page
  - Implement add-to-watchlist functionality
  - Build grid layout for saved movies
  - Display saved movie poster
  - Display saved movie title
  - Display saved movie score
  - Create empty watchlist notification
  - Highlight active navigation tab
  - Prevent duplicate watchlist entries
  - Persist watchlist state during navigation

- Back-End:
  - Create endpoint or service for saving movies to a watchlist
  - Create endpoint or service for fetching watchlist movies
  - Prevent duplicate movie entries in stored watchlist data
  - Return movie data needed for watchlist display: title, poster, and score![alt text](https://file%2B.vscode-resource.vscode-cdn.net/Users/gregtelakis/Desktop/web-bootcamp/web-challenges/scrum/agile-workflow-and-user-stories_movie-app/assets/scribble-movie-list.png?version%3D1786963220867)
