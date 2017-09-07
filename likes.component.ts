export class LikesComponent{

    constructor(private _likesCount: number, private _isSelected: boolean){
    }

    onClick(): any{
        this._likesCount = (this._isSelected) ? this._likesCount-1: this._likesCount+1;
        this._isSelected = !this._isSelected;
    }

    get likesCount() : number{
        return this._likesCount;
    }
    
    get isSelected(): any{
        return this._isSelected;
    }
}

let a:number []= [];

enum b{red=0, green=1, blue=2};
