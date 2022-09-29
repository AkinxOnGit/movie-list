package com.example.moviebackend.entities;

import com.example.moviebackend.entities.types.ShowType;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "shows")

public class Show {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  private String title;
  private byte[] image;
  private int year;
  private String genre;
  private ShowType showType;
}
