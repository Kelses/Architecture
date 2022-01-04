export class HomepageSlide {
    public title: string = '';
    public meta: string = '';
    public picture: string = '';

    public constructor(init?:Partial<HomepageSlide>) {
        Object.assign(this, init);
    }
}