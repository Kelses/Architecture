import { Injectable } from '@angular/core';
import { HOMEPAGE_SLIDES, PROJECTS } from '../data/database';
import { ProjectData } from '../models/project-data';
import { HomepageSlide } from '../models/homepage-slide';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
    private projects = PROJECTS;

    public GetProjectDetails(name: string) : ProjectData | undefined {
        return this.projects.find(x => x.name == name);
    }

    public GetPreviousProject(name: string) : string | undefined {
        var project = this.projects.find(x => x.name == name);
        if (project === undefined) {
            return undefined;
        }

        var index = this.projects.indexOf(project);
        var previousIndex = index === 0
                          ? this.projects.length - 1
                          : index - 1;
        
        return this.projects[previousIndex].name;
    }

    public GetNextProject(name: string) : string | undefined {
        var project = this.projects.find(x => x.name == name);
        if (project === undefined) {
            return undefined;
        }

        var index = this.projects.indexOf(project);
        var nextIndex = index === this.projects.length - 1
                      ? 0
                      : index + 1;
      
        return this.projects[nextIndex].name;
    }

    public GetAllProjects() : ProjectData[] {
        return PROJECTS;
    }

    public GetHomepageSlides() : HomepageSlide[] {
        return HOMEPAGE_SLIDES;
    }

}
