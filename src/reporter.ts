export const reporter = {
    info: (message: string) => console.log(message),
    verbose: (message: string) => console.log(message),
    log: (message: string) => console.log(message),
    success: (message: string) => console.log(message),
    error: (message: string) => console.error(message),
    panic: (message: string) => {
        console.error(message);
        process.exit(1);
    },
    warn: (message: string) => console.warn(message),
};
