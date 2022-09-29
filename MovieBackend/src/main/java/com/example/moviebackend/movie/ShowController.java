package com.example.moviebackend.movie;

import com.example.moviebackend.Response;
import com.example.moviebackend.entities.Show;
import com.example.moviebackend.entities.types.ShowType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/show")
public class ShowController {

  @Autowired
  ShowRepository showRepository;

  @PostMapping("/create")
  public Show createShow(@RequestBody Show show){
    return showRepository.save(show);
  }

  @PutMapping("/{id}/add-image")
  public ResponseEntity<Show> addImageToShow(@RequestParam("image") MultipartFile image, @PathVariable int id) throws IOException {
    Optional<Show> show = showRepository.findById(id);
    if (show.isPresent()) {
      show.get().setImage(image.getBytes());
      return ResponseEntity.status(HttpStatus.OK).body(showRepository.save(show.get()));
    }else return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
  }

  @GetMapping("/{id}")
  public ResponseEntity<Show> getShowById(@PathVariable int id) {
    return ResponseEntity.status(HttpStatus.OK).body(showRepository.findById(id).get());
  }

  @GetMapping("/all")
  public ResponseEntity<List<Show>> getShows(@RequestParam(value = "type", defaultValue = "ALL") ShowType type) {
    List<Show> shows = showRepository.findAll();
    System.out.println(shows);
    switch (type){
      case MOVIE -> shows = shows.stream()
        .filter(s -> s.getShowType() == ShowType.MOVIE)
        .collect(Collectors.toList());

      case SERIES -> shows = shows.stream()
        .filter(s -> s.getShowType() == ShowType.SERIES)
        .collect(Collectors.toList());

      case ANIME -> shows = shows.stream()
        .filter(s -> s.getShowType() == ShowType.ANIME)
        .collect(Collectors.toList());

      case ALL -> {
      }
    }

    return ResponseEntity.status(HttpStatus.OK).body(shows);
  }
  @DeleteMapping("/{id}")
  public ResponseEntity<Response> deleteShow(@PathVariable int id) {
    Optional<Show> show = showRepository.findById(id);
    if (show.isPresent()) {
      showRepository.deleteById(id);
      return ResponseEntity.status(HttpStatus.OK).body(new Response("Show deleted: " + show.get().getTitle()));
    }else return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Response("Show not found"));
  }
}
