"use strict";
class TakePhoto {
    constructor(cameramode, burst) {
        this.cameramode = cameramode;
        this.burst = burst;
    }
}
class CreateStory {
    constructor(cameramode, burst) {
        this.cameramode = cameramode;
        this.burst = burst;
    }
    startStory(s) {
        return s;
    }
}
const takePhoto = new CreateStory('Portrait', 10);
const story = (takePhoto.startStory("Once upon a time"));
console.log(takePhoto, story);
