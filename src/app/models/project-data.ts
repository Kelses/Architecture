export class ProjectData {
    public name: string = '';
    public title: string = '';
    public text: string = '';
    public meta: string = '';
    public pictures: string[] = [];

    public constructor(init?:Partial<ProjectData>) {
        Object.assign(this, init);
    }
}