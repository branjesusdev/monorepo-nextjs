'use server';

import { createAxiosInstance, setGlobalBaseURL } from "@repo/api-fetcher";
import { environmentConfig } from "./db-firebase.instance";
import { getCookie } from "cookies-next";


export async function apiFetcher() {

    const getAuthorizationToken = (): string => {
        return (getCookie('authToken') as string) || '';
    };

    const getBaseUrl = async () => {
        const config = await environmentConfig(process.env.NEXT_PUBLIC_ENV);
        return config.api_base_url;
    }

    async function getInstance() {
        const baseURL = await getBaseUrl();
        const authToken = getAuthorizationToken();
        setGlobalBaseURL(baseURL);

        return createAxiosInstance({
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });

    }

    return getInstance();
}
