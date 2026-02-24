import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  
   private bookings: Booking[] = [];

  constructor(private auth: Auth) {}

  getBookings(): Booking[] {
    return this.bookings;
  }

 addBooking(data: Booking) {
  this.bookings.push(data);
}

deleteBooking(index: number) {
  this.bookings.splice(index, 1);
}

   
}
