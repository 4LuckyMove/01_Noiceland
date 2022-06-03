export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`
        },
        open: "external",
        notify: false,
        port: 8080,
    })
}