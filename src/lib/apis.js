export async function randomAdviceApi(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    return advice
}