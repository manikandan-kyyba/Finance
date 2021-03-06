// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

const AppName = 'Smart Insurance Services';
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = `Welcome to ${AppName}. How can I help?`;
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const MainQuestionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MainQuestionIntent';
    },
    handle(handlerInput) {
        const { attributesManager, requestEnvelope } = handlerInput;
        // the attributes manager allows us to access session attributes
        const sessionAttributes = attributesManager.getSessionAttributes();

        const policyLastDigit = Alexa.getSlotValue(requestEnvelope, 'policyLastDigit');
        sessionAttributes['policyLastDigit'] = policyLastDigit;

        const speakOutput = "Thank You. What information would you like to know?";
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withSimpleCard(AppName, speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const QuestionOneIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QuestionOneIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Your policy expires on 26th August 2031';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withSimpleCard(AppName, speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const QuestionTwoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QuestionTwoIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Your monthly premium is $153';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withSimpleCard(AppName, speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const QuestionThreeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QuestionThreeIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Your next premium is due on 14th September 2020';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withSimpleCard(AppName, speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const QuestionFourIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QuestionFourIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Today’s equity value of your Universal policy is $14,657.90';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withSimpleCard(AppName, speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const QuestionFiveIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QuestionFiveIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You are equity value of my Universal Policy is 76576';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withSimpleCard(AppName, speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const QuestionSixIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QuestionSixIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You are status of my life insurance claim is Done.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withSimpleCard(AppName, speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const QuestionSevenIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QuestionSevenIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You are status of my life insurance claim is Done.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withSimpleCard(AppName, speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Thank you, goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// This request interceptor will log all incoming requests to this lambda
const LoggingRequestInterceptor = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope)}`);
    }
};

// This response interceptor will log all outgoing responses of this lambda
const LoggingResponseInterceptor = {
    process(handlerInput, response) {
        console.log(`Outgoing response: ${JSON.stringify(response)}`);
    }
};


// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,

        MainQuestionIntentHandler,

        QuestionOneIntentHandler,
        QuestionTwoIntentHandler,
        QuestionThreeIntentHandler,
        QuestionFourIntentHandler,
        QuestionFiveIntentHandler,
        QuestionSixIntentHandler,
        QuestionSevenIntentHandler,

        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .addRequestInterceptors(
        LoggingRequestInterceptor,
        // LoadAttributesRequestInterceptor
    )
    .addResponseInterceptors(
        LoggingResponseInterceptor,
        // SaveAttributesResponseInterceptor
    )
    .lambda();
