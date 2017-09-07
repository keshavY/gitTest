import {LikesComponent} from './likes.component';

let component = new LikesComponent(0, false);
component.onClick();
console.log(`Likes = ${component.likesCount} and isSelected = ${component.isSelected}`);