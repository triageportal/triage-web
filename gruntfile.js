module.exports = function (grunt){

    //Confuguration
    grunt.initConfig({
        // pass options to plugind, references to files etc
        less: {
            development: {
                options: {
                    paths: ["less/"]
                },
                files: {
                    "css/style.css" : "less/style.less"
                }
            }
        },
        watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less']
            }
        }
    });
    //grunt.loadNpmTasks('')
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //Register tasks

    grunt.registerTask('run', function(){
        console.log('i am running')
    })
}