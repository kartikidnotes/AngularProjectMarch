import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services',
  imports: [CommonModule,RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services{

  services: Service[] = [
    {
      id: 1,
      name: "Home Cleaning",
      price: 1500,
      description: "Complete deep cleaning for your entire home.",
      image: "assets/clean.jpg"
    },
    {
      id: 2,
      name: "AC Repair",
      price: 800,
      description: "Professional air conditioner repair service.",
      image: "assets/ac.webp"
    },
    {
      id: 3,
      name: "Plumbing Service",
      price: 1200,
      description: "Fix leakage, pipe installation & maintenance.",
      image: "assets/clean.jpg"
    },
    {
      id: 4,
      name: "Electrician Service",
      price: 1000,
      description: "Complete electrical repair & wiring solutions.",
      image: "assets/ac.webp"
    },
    {
      id: 5,
      name: "Painting Service",
      price: 3000,
      description: "Interior & exterior painting for your home.",
      image: "assets/clean.jpg"
    },
    {
      id: 6,
      name: "Pest Control",
      price: 1800,
      description: "Remove insects & pests safely from your home.",
      image: "assets/ac.webp"
    }
  ];
}
