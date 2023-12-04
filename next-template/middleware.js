// if you want to pin execution region
// export const config = {
//     regions: ['iad1'], // only execute this function on iad1
// };

export default function middleware(request) {
    // this will be inlined and force tirgger new deployment
    // https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser
    return new Response(process.env.NEXT_PUBLIC_VERCEL_URL)
}