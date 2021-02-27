import camelCaseKeys from 'camelcase-keys';

const apiURL = process.env.REACT_APP_API_URL || 'https://api.github.com';

export interface RequestConfig<T> extends RequestInit {
  data?: T;
}

async function client<TReq, TRes>(
  endpoint: string,
  {data, headers: customHeaders, ...customConfig}: RequestConfig<TReq> = {}
): Promise<TRes> {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  } as RequestInit;

  return window.fetch(`${apiURL}/${endpoint}`, config).then(async (response) => {
    if (response.status === 401) {
      return Promise.reject({message: 'Please re-authenticate.'});
    }
    const data = await response.json();
    if (response.ok) {
      return camelCaseKeys(data, {deep: true});
    } else {
      return Promise.reject(data);
    }
  });
}

export {client};
