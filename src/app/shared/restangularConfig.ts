import { RestangularModule, Restangular } from 'ngx-restangular';
import { BaseURL } from './baseURL';

export function RestangularConfigFactory (RestangularProvider){
    RestangularProvider.setBaseUrl(BaseURL);
}