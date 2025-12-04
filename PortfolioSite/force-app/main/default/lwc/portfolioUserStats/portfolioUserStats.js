import { LightningElement, api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
export default class PortfolioUserStats extends LightningElement {

	trailheadRanking 
	@api badges = '248'
	@api points = '194,425'
	@api trails = '30+'
	@api rank

	renderedCallback(){

		if(this.rank){
			let url = `${PortfolioAssets}/PortfolioAssets/Ranks/Ranger.png`;
			this.trailheadRanking = url
		}
	}
}