import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
	REACT_APP_CRYPTO_RAPIDAPI_HOST,
	REACT_APP_RAPIDAPI_KEY,
	REACT_APP_CRYPTO_API_URL
} from '../config';

const cryptoHeaders = {
	'X-RapidAPI-Host': REACT_APP_CRYPTO_RAPIDAPI_HOST,
	'X-RapidAPI-Key': REACT_APP_RAPIDAPI_KEY
};

const baseUrl = REACT_APP_CRYPTO_API_URL;

const createRequest = url => ({ url, headers: cryptoHeaders });

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: builder => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`)
		})
	})
});

export const { useGetCryptosQuery } = cryptoApi;
