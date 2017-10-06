import {getAllUrlQuery} from '../util/utils.js';
import {MyApp,MainView} from './F7Params.js';

export default class Router {
    constructor(){
        const urlQueryObj = getAllUrlQuery();
        console.log(urlQueryObj);
        this.viewUrl = urlQueryObj.url;
    }
    renderUrlView(){
        console.log(MainView)
        MainView.router.load({
            url:this.viewUrl
        })
    }
}

