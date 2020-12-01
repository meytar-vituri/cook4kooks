import mongoose from 'mongoose';

const ingredient = mongoose.Schema({
    
        name: {type:String, required:true},
        amount: {type: Number, required:true},
        units: {type:String, required:true}
});

const step = mongoose.Schema({
            stepNumber: {type:Number, required:true},
            text: {type:String, required:true},
            time: {type:Number, required:true}
});


const Recipe = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    tags: [String],
    ingredients: [ingredient],
    steps:[step]
});

export const recipeModel =  mongoose.model('recipe', Recipe);
export const get = (callback, limit) => {
    recipeModel.find(callback).limit(limit);
}