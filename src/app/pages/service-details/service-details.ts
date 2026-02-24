import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/booking-service';
import { Auth } from '../../services/auth';
import { Booking } from '../../models/booking.model';

@Component({
  selector: 'app-service-details',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './service-details.html',
  styleUrls: ['./service-details.css'],
})
export class ServiceDetails implements OnInit {
 
  
  serviceId!: string;
  serviceName!: string;

  bookingForm;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private router: Router,
    public auth: Auth
  ) {
    this.bookingForm = this.fb.group({
      customerName: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  // ngOnInit() {
  //   // Get service id from route
  //   this.serviceId = this.route.snapshot.paramMap.get('id')!;

  //   // For demo – you can replace with real service list
  //   // this.serviceName = "Service " + this.serviceId;
  // }

  ngOnInit() {
  this.serviceId = this.route.snapshot.paramMap.get('id')!;

  // Get real service name from query param
  this.serviceName = this.route.snapshot.queryParamMap.get('name')!;
}

  bookService() {

    if (!this.auth.isLoggedIn()) {
      alert("Please login first");
      this.router.navigate(['/login']);
      return;
    }

    if (this.bookingForm.invalid) return;

    const booking: Booking = {
      id: Date.now(),
      serviceName: this.serviceName,
      customerName: this.bookingForm.value.customerName!,
      date: this.bookingForm.value.date!,
      status: "Confirmed"
    };

    this.bookingService.addBooking(booking);

    alert("Booking Successful!");

    this.router.navigate(['/bookings']);
  }
}
