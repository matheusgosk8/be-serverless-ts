import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const data = _event.body || 'Sem corpo de requisição!';

    const response = {
      statusCode: 200,
      body: data,
    };

    return response;
  } catch (error) {
    console.error(error);

    const response = {
      statusCode: 500,
      body: 'Erro na rota de post!',
    };

    return response;
  }
};
