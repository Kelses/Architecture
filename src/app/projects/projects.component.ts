import { Component, OnInit } from '@angular/core';
import { ProjectData } from '../models/project-data';
import { ProjectsService } from '../services/projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    rowCount: number | undefined;
    rowArray: number[] = [];
    squareArray: number[] = [0,1,2,3];
    projects: ProjectData[] = [];

    constructor(private projectsService: ProjectsService) { }

    ngOnInit(): void {
        this.projects = this.projectsService.GetAllProjects();
        this.rowCount = this.projects.length % 2 != 0
                      ? Math.floor(this.projects.length / 2) + 1
                      : Math.floor(this.projects.length / 2);

        this.rowArray = Array(this.rowCount).fill(0).map((x,i)=>i);
    }

    public getProjectIndex(row: number, square: number) : number {
        return row * 2 + (square > 1 ? 1 : 0);
    }

    public getBackground(row: number, square: number) : { [klass: string]: string; } {
        if ((row % 2 != 0 && square % 2 == 0) || (row % 2 == 0 && square % 2 != 0)) {
            return { "background": "url(../../assets/pictures/background.png) center", "background-size": "cover" };
        }
        else {
            var index = this.getProjectIndex(row, square);
            if (index >= this.projects.length) {
                return { "background": "url(../../assets/pictures/background.png) center", "background-size": "cover" };
            }

            return { "background": "url(" + this.projects[index].pictures[0] + ") center", "background-size": "cover" };
        }
    }

    public containsText(row: number, square: number) : boolean {
        return (row % 2 != 0 && square % 2 == 0) || (row % 2 == 0 && square % 2 != 0);
    }

    public getTopText(row: number, square: number) : string {
        var index = this.getProjectIndex(row, square);
        return this.projects[index].meta;
    }

    public getBottomText(row: number, square: number) : string {
        var index = this.getProjectIndex(row, square);
        return this.projects[index].title;
    }

    public shouldHaveLink(row: number, square: number) : boolean {
        var index = this.getProjectIndex(row, square);
        return index < this.projects.length;
    }

    public getProjectLink(row: number, square: number) : string {
        var index = this.getProjectIndex(row, square);
        return "/projects/" + this.projects[index].name;
    }

    public isLeft(row: number) : boolean {
        return row % 2 == 0;
    }
}
