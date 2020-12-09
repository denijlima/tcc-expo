let instance = null;

export default class AppState {
    constructor() {
        this.props = {};
        
        this.props['token'] = {
            value: '',
            observers: []
        };
    }

    addProp(name) {
        this.props[name] = {
            value: null,
            observers: []
        };
    }

    get(name) {
        let prop = this.props[name];
        return prop.value;
    }

    observe(propName, fn) {
        let prop = this.props[propName];
        if (!prop) throw "[IWallet] Property not found";

        prop.observers.push({
            observe: function (value) {
                return fn(value);
            }
        });
    }

    async setValue(propName, value) {
        let prop = this.props[propName];
        if (!prop) throw "Property not found";

        prop.value = value;
        prop.observers.forEach(e => e.observe(value));
    }

    static getInstance() {
        if (instance === null)
            instance = new AppState();
        
        return instance;
    }
}