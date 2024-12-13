export default defineNuxtPlugin(nuxtApp => {
    console.log(nuxtApp);

    return {
        provide: {
            sayHello: (msg: string) => console.log("my message " + msg)
        }
    }
})