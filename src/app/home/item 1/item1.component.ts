import { Component, OnInit, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';

export class Review {
	constructor(
				public comment: string,
				public star1: number,
				public star2: number,
				public star3: number,
				public star4: number,
				public star5: number,
				) {}
}

@Component({
	moduleId: module.id.toString(),
	templateUrl: 'item1.component.html',
	styleUrls: ['item1.component.css']
})


export class Item1Component implements OnInit {

	reviews = [];

	addReview(
				comment: string,
				star1: number, 
				star2: number, 
				star3: number, 
				star4: number,
				star5: number) {
		this.reviews.push(new Review(comment, star1, star2, star3, star4, star5));
	}

	currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}