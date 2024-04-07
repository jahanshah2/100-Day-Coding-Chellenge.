function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
}

console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));