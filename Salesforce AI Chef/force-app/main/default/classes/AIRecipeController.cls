public with sharing class AIRecipeController {
    @AuraEnabled
    public static String generateAIRecipes(String ingredients, String dietaryRestrictions, String mealType, Integer servings){

        try{
        Map<String, ConnectApi.WrappedValue> inputParams = new Map<String, ConnectApi.WrappedValue>();
            ConnectApi.WrappedValue ingredientsValue = new ConnectApi.WrappedValue();
            ingredientsValue.value = ingredients;
            ConnectApi.WrappedValue dietaryRestrictionsValue = new ConnectApi.WrappedValue();
            dietaryRestrictionsValue.value = dietaryRestrictions;
            ConnectApi.WrappedValue mealTypeValue = new ConnectApi.WrappedValue();
            mealTypeValue.value = mealType;
            ConnectApi.WrappedValue servingsValue = new ConnectApi.WrappedValue();
            servingsValue.value = servings;
            inputParams.put('Input:Ingredients', ingredientsValue);
            inputParams.put('Input:Dietary_Restrictions', dietaryRestrictionsValue);
            inputParams.put('Input:Meal_Type', mealTypeValue);
            inputParams.put('Input:Serving_Size', servingsValue);

            //2. create config to require for invoking prompt template
            ConnectApi.EinsteinPromptTemplateGenerationsInput executeTemplateInput = new ConnectApi.EinsteinPromptTemplateGenerationsInput();
            executeTemplateInput.additionalConfig = new ConnectApi.EinsteinLlmAdditionalConfigInput();
        executeTemplateInput.additionalConfig.applicationName = 'PromptBuilderPreview';
        executeTemplateInput.isPreview = false;
        executeTemplateInput.inputParams = inputParams;

        //3. call the api 
          ConnectApi.EinsteinPromptTemplateGenerationsRepresentation generationsOutput = ConnectApi.EinsteinLLM.generateMessagesForPromptTemplate('Recipe_Generator', executeTemplateInput);
            
          //4. return the response
          ConnectApi.EinsteinLLMGenerationItemOutput response = generationsOutput.generations[0];
            return response.text;
    
    } catch(Exception e){
            throw new  AuraHandledException('Error generating: '+e.getMessage());
        }
    }
}