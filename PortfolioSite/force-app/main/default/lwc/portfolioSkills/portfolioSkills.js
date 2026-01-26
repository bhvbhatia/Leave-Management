import { api, LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import TECH_FIELD_FIELD from '@salesforce/schema/Portfolio__c.TechnologySkills__c'
import SOFT_SKILLS_FIELD from '@salesforce/schema/Portfolio__c.SoftSkills__C'
import SOFTWARE_FIELD from '@salesforce/schema/Portfolio__c.SoftwareTools__c'
import METHODOLOGIES_FIELD from '@salesforce/schema/Portfolio__c.SoftwareDevelopmentMethodologies__c'
export default class PortfolioSkills extends LightningElement {

	techSkills=[]
	softSkills=[]
	softwareTools=[]
	methodologies=[]


	@api recordId
	@wire(getRecord, {
		recordId: '$recordId',
		fields: [TECH_FIELD_FIELD, SOFT_SKILLS_FIELD, SOFTWARE_FIELD, METHODOLOGIES_FIELD]
	})skillHandler({data,error}){
		if(data){
			console.log('data=> ',JSON.stringify(data));
			this.formatSkills(data);
	}
	if(error){
		console.log(error);
	}}

	formatSkills(data){
		const{SoftSkills__c,TechnologySkills__c,SoftwareTools__c,SoftwareDevelopmentMethodologies__c} = data.fields;
		this.techSkills = TechnologySkills__c ? TechnologySkills__c.value.split(','):[];
		this.softSkills = SoftSkills__c ? SoftSkills__c.value.split(','):[];
		this.softwareTools = SoftwareTools__c ? SoftwareTools__c.value.split(','):[];
		this.methodologies = SoftwareDevelopmentMethodologies__c ? SoftwareDevelopmentMethodologies__c.value.split(','):[];

	}
}