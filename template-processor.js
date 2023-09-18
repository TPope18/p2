class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }
    fillIn(dictionary) {
        return this.template.replace(/ /g, (match, property) => {
            return dictionary[property] || '';
        });
    }
}
