module.exports = function(grunt){
// -- склейка js
 grunt.initConfig({
  concat: {
   main: {
    src: ['public/js/road.js', 'public/js/main.js'], //-- пути к скл. файлам
    dest: 'public/js/gruntfile.js'
   }
  },

  uglify: {
   main: {
    files: {
     'public/js/gruntfile.min.js': '<%=concat.main.dest%>'
    }
   }
  },

  cssmin: {
   combine: {
    files: {
     'public/stylesheets/style.min.css':
     ['public/stylesheets/style.css','public/stylesheets/gallery.css']
    }
   }
  }
 });

//-- загрузка модулей 
 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
//-- загрузка задач
 grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);  
};
