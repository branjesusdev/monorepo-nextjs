export const dashboardRoutes = (...args: any[]) => {
    const base = '/dashboard';

    return {
        base,
        banking: {
            base: `${base}/banking`,
            form: `${base}/banking/${args[0]}/${args[1]}/form`,
            summmary: `${base}/banking/${args[0]}/${args[1]}/summary`,
            confirm: `${base}/banking/${args[0]}/${args[1]}/confirm`,
        }
    };

}
