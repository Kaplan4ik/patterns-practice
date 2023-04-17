import { BaseRequest } from '../adapter/services/baseRequest';
import { Adaptee } from '../adapter/services/specificRequest';
import { TransformedRequest } from '../adapter/services/transformedRequest';

export const Adapter = () => {
  const getResponseText = (request: BaseRequest) => {
    const response = request.request();
    console.group('Adapter.tsx', 'getResponseText', '6');
    console.log(response);
    console.groupEnd();
  };

  const standardRequest = new BaseRequest();
  getResponseText(standardRequest);

  const specificRequest = new Adaptee();
  const transformedResponse = new TransformedRequest(specificRequest);
  getResponseText(transformedResponse);

  return <></>;
};
