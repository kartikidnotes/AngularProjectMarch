import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../../services/booking-service';
import { Booking } from '../../models/booking.model';
import { Auth } from '../../services/auth';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bookings',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css',
})
export class Bookings implements OnInit {
 bookings: Booking[] = [];

  constructor(
    private bookingService: BookingService,
    public auth: Auth
  ) {}

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    this.bookings = this.bookingService.getBookings();
  }

  cancelBooking(index: number) {

    if (!this.auth.isLoggedIn()) {
      alert("Login required");
      return;
    }

    this.bookingService.deleteBooking(index);
    this.loadBookings();
  }
}
