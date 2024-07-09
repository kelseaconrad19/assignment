// Problem Statement: You are tasked with developing an interactive 'Favorite Movies' list component in React. This component should allow users to add movies to a list, remove them, and toggle between different views. The list of movies will be hardcoded for simplicity. Your challenge is to implement this functionality using functional components and React Hooks.

// Task 1: Initializing and Displaying a List

// Start by creating a MoviesList functional component.
// Initialize a state with a hardcoded list of movie titles using the useState hook.
// Expected Outcome:

// The component should render an unordered list (<ul>) of movie titles.

// Task 2: Conditional Rendering of Movie Details

// For each movie, implement a feature that toggles additional details (like a brief description) when the movie title is clicked.
// Use conditional rendering to show or hide these details.
// Expected Outcome:

// Clicking on a movie title toggles the display of its details.
// Each movie should maintain its own toggle state.

// Task 3: Implementing Movie Removal

// Add a 'Remove' button next to each movie title.
// Implement a function to remove a movie from the list when this button is clicked.
// Expected Outcome:

// Clicking the 'Remove' button should instantly remove the movie from the list.

// Task 4: Toggling List View

// Implement a button outside the list to toggle between showing all movies and only showing a specific genre (e.g., 'Action').
// Use conditional rendering and state management to control the list's display based on this toggle.
// Expected Outcome:

// The toggle button should switch the view between all movies and movies of a specified genre.
// The state should correctly reflect the current view.

import { useState } from "react";
import styles from "./MoviesList.module.css";

const MoviesList = () => {
	const initialMovies = [
		{
			title: "The Shawshank Redemption",
			genre: "Drama",
			description:
				"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
		},
		{
			title: "The Godfather",
			genre: "Crime",
			description:
				"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
		},
		{
			title: "The Dark Knight",
			genre: "Action",
			description:
				"When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
		},
		{
			title: "The Lord of the Rings",
			genre: "Fantasy",
			description:
				"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth.",
		},
		{
			title: "Pulp Fiction",
			genre: "Crime",
			description:
				"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
		},
	];

	const [movies, setMovies] = useState(initialMovies);
	const [genreFilter, setGenreFilter] = useState("");

	const toggleGenreFilter = () => {
		setGenreFilter((prevGenreFilter) =>
			prevGenreFilter === "" ? "Crime" : ""
		);
	};

	const removeMovie = (title) => {
		setMovies((prevMovies) =>
			prevMovies.filter((movie) => movie.title !== title)
		);
	};

	const toggleDetails = (title) => {
		setMovies((prevMovies) =>
			prevMovies.map((movie) =>
				movie.title === title
					? { ...movie, showDetails: !movie.showDetails }
					: movie
			)
		);
	};

	return (
		<div>
			<button className={styles.filter} onClick={toggleGenreFilter}>
				{genreFilter === "" ? "Show only Crime movies" : "Show all movies"}
			</button>
			<ul>
				{movies
					.filter((movie) => genreFilter === "" || movie.genre === genreFilter)
					.map((movie) => (
						<li className={styles.title} key={movie.title}>
							<div onClick={() => toggleDetails(movie.title)}>
								{movie.title}
								{movie.showDetails && <div>{movie.description}</div>}
							</div>
							<button
								className={styles.removeButton}
								onClick={(event) => {
									event.stopPropagation();
									removeMovie(movie.title);
								}}
							>
								Remove
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default MoviesList;
