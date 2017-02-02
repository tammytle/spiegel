import { BASIC_INFO } from '../constants';

export function inputbasicinfo(basicinfo) {
  return {
  	type: BASIC_INFO,
  	payload: basicinfo
  };
}
