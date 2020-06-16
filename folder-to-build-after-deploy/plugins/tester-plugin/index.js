module.exports = {
  onPreBuild: async ({ utils: { build, status, cache, run, git } }) => {
    console.log(
      "I am in the prebuild of the plugin. This is where I would grab data, script out the pages I want and create them, move them to a pages/ directory, and then run a gatsby or Next.js build command on"
    );
  },
};
