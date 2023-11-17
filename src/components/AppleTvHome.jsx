import Landing from "./Landing";
import Main from './Main';
import Faq from './Faq';
import data from './faq.json';
import products from './mainItem.json';

export default function AppleTvHome() {
    return <>
    
    <Landing />
    <Main products={ products }/>
    <Faq data = {data.home}/>
    </>
}