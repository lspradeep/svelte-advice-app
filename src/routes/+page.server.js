import { randomAdviceApi } from '$lib/apis';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const randomAdvice = await randomAdviceApi();
    return {
     advice: randomAdvice,
    }
}



