
    var canvas_context = document.getElementById("browser_canvas");
    var gl = canvas_context.getContext('webgl') || canvas_context.getContext("experimental-webgl");

    gl.clearColor(0,0,0.8,1);
    gl.clear(gl.COLOR_BUFFER_BIT);
