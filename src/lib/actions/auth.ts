"use server";

import { type LoginInput } from "../validations/auth";

export interface ActionResponse<T> {
    fieldError?: Partial<Record<keyof T, string | undefined>>;
    formError?: string;
}

export async function login(): Promise<ActionResponse<LoginInput>> {
    return {
        
    }
}

//https://medium.com/@farmaan30327/two-factor-authentication-with-nextjs-6a51299e5deb