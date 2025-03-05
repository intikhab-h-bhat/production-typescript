
interface ITakephoto{
    cameramode: string;
    burst:number;
}

interface IStory{
    startStory(s:string): string;
}

class TakePhoto implements ITakephoto{

    constructor(public cameramode:string, public burst:number)
    { }
 
}

class CreateStory implements ITakephoto, IStory{

    constructor(
        public cameramode:string, 
        public burst:number)
        { }

    startStory(s:string):string{
        return s;
    }
}

const takePhoto = new CreateStory('Portrait', 10);
const story= (takePhoto.startStory("Once upon a time"));
console.log(takePhoto,story);