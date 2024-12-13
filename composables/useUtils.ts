export const useUtils = () => {
    const sayHello = (time: string) => console.log("good " + time)
    return {
        sayHello
    }
}