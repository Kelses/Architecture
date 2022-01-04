export class ProjectMetaData {
    public title: string = '';
    public meta: string = '';
    public picture: string = '';

    public constructor(init?:Partial<ProjectMetaData>) {
        Object.assign(this, init);
    }
}