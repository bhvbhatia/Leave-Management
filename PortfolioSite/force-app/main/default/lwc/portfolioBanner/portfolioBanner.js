import { LightningElement , wire} from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAsset';
import {getFieldValue, getRecord} from 'lightning/uiRecordApi'
import FULLNAME  from '@salesforce/schema/Portfolio__c.Full_Name__c';
import COMPANY_NAME  from '@salesforce/schema/Portfolio__c.Company_Name__c';
import COMPANY_LOCATION  from '@salesforce/schema/Portfolio__c.Company_Location__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';



export default class PortfolioBanner extends LightningElement {

	linkedinUrl = 'https://www.linkedin.com/in/bhavy-bhatiya-175292150/';
    githubUrl = 'https://github.com/bhvbhatia'
    trailheadUrl = 'https://www.salesforce.com/trailblazer/bhvbhatia12'
    blogUrl = 'https://www.google.com/'


	userPic = `${PortfolioAssets}/PortfolioAssets/userPic.png`;
	linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
	linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
    blog = `${PortfolioAssets}/PortfolioAssets/Social/blogger.svg`;

	recordId = 'a04gL00000ASPDpQAP'
	
	@wire(getRecord, {recordId:'$recordId' , fields: [FULLNAME,COMPANY_NAME,COMPANY_LOCATION,DESIGNATION]})
	portfolioData


	get fullName(){
		return getFieldValue(this.portfolioData.data,FULLNAME)
	}

	get companyLocation(){
		return getFieldValue(this.portfolioData.data,COMPANY_LOCATION)
	}

	get companyName(){
		return getFieldValue(this.portfolioData.data,COMPANY_NAME)
	}

	get designation(){
		return getFieldValue(this.portfolioData.data,DESIGNATION)
	}
	



	}

