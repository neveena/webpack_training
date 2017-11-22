class ExamplePlugin {
    apply (compiler) {
        compiler.plugin("run", (compiler, callback) => {
            console.log("PLUGIN !!!");
            callback();
        });
    }
}


module.exports = ExamplePlugin;