package com.example.moviebackend.movie;

import ch.qos.logback.core.pattern.parser.OptionTokenizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/movie")
public class MovieController {

  @Autowired
  MovieRepository movieRepository;

  @PostMapping("/create")
  public Movie createMovie(@RequestBody Movie movie){
    System.out.println("Hallo Schatiz");
    return movieRepository.save(movie);
  }

  @PutMapping("/{id}/add-image")
  public ResponseEntity<Movie> addImageToMovie(@RequestParam("image") MultipartFile image, @PathVariable int id) throws IOException {
    Optional<Movie> movie = movieRepository.findById(id);
    if (movie.isPresent()) {
      movie.get().setImage(image.getBytes());
      return ResponseEntity.status(HttpStatus.OK).body(movieRepository.save(movie.get()));
    }else return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Movie> getMovieById(@PathVariable int id) {
    return ResponseEntity.status(HttpStatus.OK).body(movieRepository.findById(id).get());
  }

  @GetMapping("/all")
  public ResponseEntity<List<Movie>> getMovies() {
    return ResponseEntity.status(HttpStatus.OK).body(movieRepository.findAll());
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteMovie(@PathVariable int id) {
    Optional<Movie> movie = movieRepository.findById(id);
    if (movie.isPresent()) {
      movieRepository.deleteById(id);
      return ResponseEntity.status(HttpStatus.OK).body("Deleted movie " + movie.get().getTitle());
    }else return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Movie not found");
  }

}
