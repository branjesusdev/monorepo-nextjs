import { firebaseManager } from "@repo/db-firebase";

import { COLLECTION_KEYS, DOCUMENT_KEYS } from "@/entry-point/const/keys";
import type { EnvironmentConfig, EnvironmentValues } from "@/entry-point/model/entity";
import { ENV } from "@/entry-point/model/enum/env";

export {
    environmentConfig,
}


const environmentConfig = async (env: string = ENV.DEV) : Promise<EnvironmentValues> => {
    try {
        const collection = await firebaseManager.getDocument(COLLECTION_KEYS.CONFIG, DOCUMENT_KEYS.ENVIRONMENT) as EnvironmentConfig;
        return collection[env] as EnvironmentValues;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


