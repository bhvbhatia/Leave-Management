import { LightningElement } from 'lwc';

export default class RecipeForm extends LightningElement {
formData={}
dietaryOptions = [
	{label: 'None', value:'none'},
	{label: 'Vegetarian', value: 'vegetarian'},
	{label: 'Vegan', value: 'vegan'},
	{label: 'Gluten Free', value: 'glutenfree'},
	{label: 'Dairy Free', value: 'dairyfree'}
]

mealTypeOptions = [
	{label: 'Breakfast', value: 'breakfast'},
	{label: 'Lunch', value: 'lunch'},
	{label: 'Dinner', value: 'dinner'},
	{label: 'Snack', value: 'snack'}
]

handleChange(event){
	console.log('change');
	
	const {name, value} = event.target;

	this.formData[name] = value;
}
generateRecipe(){
	console.log('clicked');
	
this.dispatchEvent(new CustomEvent('generate', 
	{detail: 
	{formData: this.formData},
	bubbles: true,
        composed: true
}));
console.log('AFTER EVENT');
}
}