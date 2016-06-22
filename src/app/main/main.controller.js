export default class MainController {
    constructor() {
        this.mainLink = {
            title: "Home", href: ".home"
        };
        
        this.links = [
            { title: "Calendar",    href: ".calendar" },
            { title: "Contact",     href: ".contact" }
            
        ];
        
        this.content = {
            display: "Main Content"
        }
    }
}
