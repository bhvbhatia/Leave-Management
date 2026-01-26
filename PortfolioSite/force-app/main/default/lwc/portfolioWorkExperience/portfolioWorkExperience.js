import { LightningElement , wire,api} from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class PortfolioWorkExperience extends LightningElement {

@api recordId 
workExperiencedList=[]
@wire(getRelatedListRecords,{
	parentRecordId: '$recordId',
	relatedListId: 'WorkExperience__r',
	fields: ['Work_Experience__c.JobStartDate__c',
		'Work_Experience__c.JobEndDate__c',
		'Work_Experience__c.Role__c',
		'Work_Experience__c.Company_Name__c',
		'Work_Experience__c.Work_Location__c',
		'Work_Experience__c.Description__c',
		'Work_Experience__c.Is_Current__c'
	]
})
WorkExperienceHandler({data,error}){
	if(data){
		console.log('data=> ',JSON.stringify(data));
		this.formatExperience(data);
	}
	if(error){
		console.log(error);
	}
}
	formatExperience(data){
		this.workExperiencedList = 	data.records.map(item=>{
				let id = item.id
				const {JobStartDate__c,JobEndDate__c,Role__c,Company_Name__c,Work_Location__c,Description__c,Is_Current__c} = item.fields 
				let companyName = this.getValue(Company_Name__c)
				let role = this.getValue(Role__c)
				let workLocation = this.getValue(Work_Location__c)
				let JobStartDate = this.getValue(JobStartDate__c)
				let JobEndDate = this.getValue(JobEndDate__c)
				let Description = this.getValue(Description__c)
				let IsCurrent = this.getValue(Is_Current__c)
			return {id,JobStartDate, JobEndDate,role,companyName,workLocation,Description,IsCurrent}
			})
	}

	getValue(data){
		return data && (data.displayValue || data.value)
	}


}