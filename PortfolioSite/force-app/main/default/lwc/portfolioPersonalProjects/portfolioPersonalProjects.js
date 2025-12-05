import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
export default class PortfolioPersonalProjects extends LightningElement {

	BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
	AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
	SurveyApp = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`


	projects=[
		{
			"name": "BMI Calculator",
			"image": this.BMICalculator,
			"link": "www.google.com"
		},
		{
			"name": "Alarm Clock",
			"image": this.AlarmClock,
			"link": "www.google.com"
		},
		{
			"name": "Survey App",
			"image": this.SurveyApp,
			"link": "www.google.com"
		}
	]
}