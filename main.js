"use strict";
exports.__esModule = true;
var likes_component_1 = require("./likes.component");
var component = new likes_component_1.LikesComponent(0, false);
component.onClick();
console.log("Likes = " + component.likesCount + " and isSelected = " + component.isSelected);
