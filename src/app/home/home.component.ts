import { Component, OnInit } from '@angular/core';
import { HomepageSlide } from '../models/homepage-slide';
import { ProjectsService } from '../services/projects.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    slides: HomepageSlide[] | undefined;
    currentSlide: HomepageSlide | undefined;
    currentSlideIndex: number = 0;

    constructor(private projectsService: ProjectsService) { }

    ngOnInit(): void {
        this.slides = this.projectsService.GetHomepageSlides();
        this.currentSlide = this.slides[0];
    }

    public onSlideChange() : void {
        if (this.slides?.length !== undefined && this.currentSlideIndex === this.slides?.length - 1) {
            this.currentSlideIndex = 0;
        }
        else {
            this.currentSlideIndex += 1;
        }

        if (this.slides === undefined) {
            return;
        }

        this.currentSlide = this.slides[this.currentSlideIndex];
    }

}
