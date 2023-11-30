// if you want to pin execution region
// export const config = {
//     regions: ['iad1'], // only execute this function on iad1
// };

export default function middleware(request) {
    // to force new deployment (script hash changes)
    const rand = "change-this-text-in-every-deployment";
    return new Response(rand)
}