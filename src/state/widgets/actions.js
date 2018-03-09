import { initialize } from 'redux-form';
import getWidgetAPI from 'api/widget';
import { getApiWidgetList } from 'api/widgetList';
import { SET_WIDGET_LIST } from 'state/widgets/types';


export const getWidgetList = widgetList => ({
  type: SET_WIDGET_LIST,
  payload: {
    widgetList,
  },
});

// thunk
export const fetchWidget = widgetCode => dispatch => (
  getWidgetAPI(widgetCode).then((response) => {
    dispatch(initialize('widget', response.payload));
  })
);

export const fetchWidgetList = () => dispatch =>
  getApiWidgetList().then((data) => {
    dispatch(getWidgetList(data.payload));
  });