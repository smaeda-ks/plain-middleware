// if you want to pin execution region
// export const config = {
//     regions: ['iad1'], // only execute this function on iad1
// };

export default function middleware(request) {
    return new Response('success')
}