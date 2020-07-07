import { User } from './User';
import { Company } from './Company';
//import google from 'googlemaps';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
