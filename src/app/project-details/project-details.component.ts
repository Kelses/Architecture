import { Component, OnInit } from '@angular/core';
import { ProjectData } from '../models/project-data';
import { ProjectsService } from '../services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TRIGGERS } from './project-details.animations';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.scss'],
    animations: TRIGGERS
})
export class ProjectDetailsComponent implements OnInit {

    name: string | null = null;
    projectData: ProjectData | undefined;
    previousProject: string | undefined;
    nextProject: string | undefined;

    isTextDisplayed: boolean = true;

    constructor(private projectsService: ProjectsService,
                private route: ActivatedRoute,
                private router: Router) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit(): void {
        this.name = this.route.snapshot.paramMap.get('name');
        this.onRouteChange();
    }

    public onRouteChange() : void {
        if (!this.name) {
            return;
        }

        this.projectData = this.projectsService.GetProjectDetails(this.name);
        this.previousProject = this.projectsService.GetPreviousProject(this.name);
        this.nextProject = this.projectsService.GetNextProject(this.name);
    }

    public getPreviousProjectUrl() : string {
        return "/projects/" + this.previousProject;
    }

    public getNextProjectUrl() : string {
        return "/projects/" + this.nextProject;
    }

    public getCarouselInterval() : number {
        if (this.projectData?.pictures !== undefined && this.projectData?.pictures.length > 1) {
            return 5000;
        }
        else {
            return 0;
        }
    }

    public toggleText() : void {
        this.isTextDisplayed = !this.isTextDisplayed;
    }
}
