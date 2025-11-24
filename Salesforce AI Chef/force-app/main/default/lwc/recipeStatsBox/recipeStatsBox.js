import { LightningElement, api } from 'lwc';

export default class RecipeStatsBox extends LightningElement {

	@api title;
	@api value;
	@api iconName

}