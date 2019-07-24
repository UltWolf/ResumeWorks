export class Vacancy{
    constructor(Title: string,Description:string){
        this.title= Title;
        this.description=Description;
    }
    public id: number;
    public title: string;
    public description: string;
    public propose:string;
    public requirements:string;
    public skills:string;
    public authorEmail:string;
    
}