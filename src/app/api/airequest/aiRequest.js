import OpenAI from "openai";
const key = "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";
const openai = new OpenAI({apiKey: key});

export default async function xqtrequest(message){
const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": message}]
    

})
const response = completion.choices[0].message.content;
console.log(response);
return response;
};