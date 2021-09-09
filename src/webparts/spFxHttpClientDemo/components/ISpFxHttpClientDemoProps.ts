import {
  ButtonClickedCallback,
  ICountryListItem
} from '../../../models';
export interface ISpFxHttpClientDemoProps {
  spListItems: ICountryListItem[];
  onGetListItems?: ButtonClickedCallback;
}
